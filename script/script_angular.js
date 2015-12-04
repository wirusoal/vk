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
      chrome.storage.local.get('active', function(resultq) {
      chrome.storage.local.get('vkAccessToken', function (value) {
            $http.get('https://api.vk.com/method/'+method+'?'+key+'&access_token='+value['vkAccessToken'][resultq['active']-1]).success(function(data, status, headers, config) {
              for(i=0;i<data['response'].length;i++){
                $.each(data['response'][i], function( key, value ) {
                  if(key == 'photo'){           
                    data['response'][i]['photo'] = imageBlob(value)['$$state'];
                  }else if(key == 'photo_medium'){
                    data['response'][i]['photo_medium'] = imageBlob(value)['$$state'];
                  }else if(key == 'thumb'){
                    data['response'][i]['thumb'] = imageBlob(value)['$$state'];
                  }else if(key == 'date'){
                    data['response'][i]['date'] = format_date(data['response'][i]['date'],1);
                  }
                });
              }
              deferred.resolve(data);
            });
        })
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

app.directive('enter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.enter);
                });

                event.preventDefault();
            }
        });
    };
});
//Диалоги
app.controller('DialogList', function($scope,$http,api) {
  $scope.offsetm = 0;
  $scope.dataq = Array();
  $scope.loadDialog = function(){
    api.json_get('execute.messages_get','offset='+$scope.offsetm).then(function(data){
      for(i=0;i<data['response'].length;i++){
        data['response'][i]['id'] = (data['response'][i]['chat_id'] == 0)? data['response'][i]['id']: 'chat_'+data['response'][i]['chat_id']; 
        data['response'][i]['read_state'] = (data['response'][i]['read_state'] == 0 && data['response'][i]['out'] == 0) ? 'dialogs_new_msgs' : '';
        data['response'][i]['online'] = (data['response'][i]['online'] == 1) ? ((data['response'][i]['online_mobile'] == 1)? '#cc0043':'#00cc35'):'#aeaeae'; 
        $scope.dataq.push(data['response'][i]);
      }
      $scope.rm = function(im){
        return im['value'];
      }
    })
  }

  $scope.DialogScroll = function(){
    $scope.offsetm = $("#messages_form").find(".dialogs_row").length;
    $scope.loadDialog();
  }

  $scope.loadDialog();

})
//Видеозаписи
app.controller('VideoList', function($scope,$http,api) {
  $scope.offsetl = 0;
  $scope.data = Array();
  $scope.loadVideo = function(){
    var filters = ($(".video_filters").prop("checked")) ? 'long' : 'short';
    api.json_get('video.search','count=20&q='+$scope.search_input_video+'&filters=' + filters + '&offset='+$scope.offsetl).then(function(data){
      for(i=0;i<data['response'].length;i++){
        data['response'][i]['title'] = (data['response'][i]['title'].length > 30) ? data['response'][i]['title'].slice(0, 30) + "..." : data['response'][i]['title'];
        if (data['response'][i]['duration'] > 60) {
            var second = ((data['response'][i]['duration'] % 60) > 9) ? data['response'][i]['duration'] % 60 : '0' + data['response'][i]['duration'] % 60;
            data['response'][i]['duration'] = Math.floor(data['response'][i]['duration'] / 60) + ':' + second;
          } else {
            data['response'][i]['duration'] = '00:' + data['response'][i]['duration'];
          }
        $scope.data.push(data['response'][i]);
      }
      $scope.rm = function(im){
        return im['value'];
      }
    })
  }  
  
  $scope.FindVideo = function(){
    $scope.offsetl = 0;
    $scope.data = Array();
    $scope.loadVideo();
  }
  $scope.VideoScroll = function(){
    $scope.offsetl = $(".search_video_list").find(".video_row_cont").length;
    $scope.loadVideo();
  }
})
//Список групп
app.controller('GroupList', function($scope,$http,api) {
  $scope.offsetp = 0;
  $scope.data = Array();
  $scope.loadGroupList = function(){
    var method = ($scope.search_input_group == undefined || $scope.search_input_group == '')? 'groups.get':'groups.search'; 
    api.json_get(method,'count=20&v=3.0&extended=1&offset='+$scope.offsetp+'&q='+$scope.search_input_group).then(function(data){
      for(i=1;i<data['response'].length;i++){
        data['response'][i]['type'] = (data['response'][i]['type'] == 'page') ? 'Публичная страница' : (data['response'][i]['type'] == 'group') ? 'Группа' : 'Мероприятие';
        $scope.data.push(data['response'][i]);
      }
      $scope.rm = function(im){
        return im['value'];
      }
    })
  }  
  
  $scope.FindGroupList = function(){
    $scope.offsetp = 0;
    $scope.data = Array();
    $scope.loadGroupList();
  }
  $scope.GroupListScroll = function(){
    $scope.offsetp = $(".group_list").find(".group_list_row").length;
    $scope.loadGroupList();
  }
  $scope.FindGroupList();
})

app.controller('user_list_akk', function($scope,$http,api) {
  $scope.load_akk = function(){
    $scope.test = Array();
    chrome.storage.local.get('vkAccessToken', function (value) {
      for (var i = 0; i < value['vkAccessToken'].length; i++) {
        $http.get('https://api.vk.com/method/users.get?fields=photo_50&name_case=Nom&access_token='+value['vkAccessToken'][i]).success(function(data) {
          $http.get(data.response[0].photo_50, {responseType: 'blob'}).success(function(blob) {
            data.response[0].photo_50 = window.URL.createObjectURL(blob);   
          })
          $scope.test.push(data.response[0]);
        });
      };
    });
  };
  //$scope.load_akk();
})