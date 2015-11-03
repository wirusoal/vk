angular.module("api",[]).factory('api', function($q,$http) {
  var imageBlob = function(url){
    var defer = $q.defer();
    $http.get(url, {responseType: 'blob'}).success(function(blob) {
      defer.resolve(window.URL.createObjectURL(blob));
    })
    return defer.promise;
  }
  
  var monthName = { '01':"января", '02':"февраля", '03':"марта", '04':"апреля", '05':"мая", '06':"июня", '07':"июля", '08':"августа", '09':"сентября", '10':"октября", '11':"ноября", '12':"декабря"};
  var format_date = function(data,p) {
      var date=new Date(data*1000);var diff=new Date()-date;var d=date;d=['0'+d.getDate(),'0'+(d.getMonth()+1),''+d.getFullYear(),'0'+d.getHours(),'0'+d.getMinutes()];for(var i=0;i<d.length;i++){d[i]=d[i].slice(-2)}var new_date=new Date();if(p==1){if(new_date.getDate()==date.getDate()){return d.slice(3).join(':')}else if(new_date.getDate()-1==date.getDate()){return'вчера'}else{return d[0]+' '+monthName[d[1]]}}else{if(diff<1000){return'только что'}var sec=Math.floor(diff/1000);if(sec<60){return sec+' сек. назад'}var min=Math.floor(diff/60000);if(min<60){return min+' мин. назад'}if(new_date.getDate()==date.getDate()){return'сегодня в '+d.slice(3).join(':')}else if(new_date.getDate()-1==date.getDate()){return'вчера в '+d.slice(3).join(':')}else{return d.slice(0,3).join('.')+' '+d.slice(3).join(':')}}
    }

  return {
    json_get: function(method,key) {
      var deferred = $q.defer();
      chrome.storage.local.get('vkAccessToken', function (value) {
            $http.get('https://api.vk.com/method/'+method+'?'+key+'&access_token='+value['vkAccessToken']).success(function(data, status, headers, config) {
              for(i=0;i<data['response'].length;i++){
                $.each(data['response'][i], function( key, value ) {
                  if(key == 'photo'){           
                    data['response'][i]['photo'] = imageBlob(value)['$$state'];
                  }else if(key == 'date'){
                    data['response'][i]['date'] = format_date(data['response'][i]['date'],1);
                  }
                });
              }
              deferred.resolve(data);
            });
      });
      return deferred.promise;
    }
  }
})

app = angular.module('vkinviz', ['api']);

app.directive('scrolly', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var raw = element[0];
            element.bind('scroll', function () {
                if (raw.scrollTop >= (raw.scrollHeight -(raw.offsetHeight+20))) {
                  scope.$apply(attrs.scrolly);
                }
            });
        }
    };
});

app.controller('FriendList', function($scope,$http,api) {
  $scope.offset = 0;
  $scope.data = Array();
  $scope.loadFriend = function(){
    api.json_get('execute.messages_get','offset='+$scope.offset).then(function(data){
      for(i=0;i<data['response'].length;i++){
        data['response'][i]['id'] = (data['response'][i]['chat_id'] == 0)? data['response'][i]['id']: 'chat_'+data['response'][i]['chat_id']; 
        data['response'][i]['read_state'] = (data['response'][i]['read_state'] == 0 && data['response'][i]['out'] == 0) ? 'dialogs_new_msgs' : '';
        data['response'][i]['online'] = (data['response'][i]['online'] == 1) ? ((data['response'][i]['online_mobile'] == 1)? '#cc0043':'#00cc35'):'#aeaeae'; 
        $scope.data.push(data['response'][i]);
      }
      $scope.rm = function(im){
        return im['value'];
      }
    })
  }

  $scope.FriendScroll = function(){
    $scope.offset = $("#messages_form").find(".dialogs_row").length;
    $scope.loadFriend();
  }

  $scope.loadFriend();
})