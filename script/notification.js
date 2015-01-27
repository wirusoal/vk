function formatDate(date){var diff=new Date()-date;if(diff<1000){return'только что'}var sec=Math.floor(diff/1000);if(sec<60){return sec+' сек. назад'}var min=Math.floor(diff/60000);if(min<60){return min+' мин. назад'}var d=date;d=['0'+d.getDate(),'0'+(d.getMonth()+1),''+d.getFullYear(),'0'+d.getHours(),'0'+d.getMinutes()];for(var i=0;i<d.length;i++){d[i]=d[i].slice(-2)}var new_date=new Date();if(new_date.getDate()==date.getDate()){return'сегодня в '+d.slice(3).join(':')}else if(new_date.getDate()-1==date.getDate()){return'вчера в '+d.slice(3).join(':')}else{return d.slice(0,3).join('.')+' '+d.slice(3).join(':')}}
function obj(obj){var s="";for(prop in obj){if(typeof obj[prop]!="function"){s+="obj["+prop+"] = "+obj[prop]+"; "}}return s}
var sender=function(d,e,f){chrome.storage.local.get('vkAccessToken',function(c){$.ajax({url:'https://api.vk.com/method/'+d+'?'+e+'&access_token='+c.vkAccessToken,dataType:"json",success:function(a,b){f(a)}})})}
  var loadImagemes = function(uri, id, callback) {
      $.ajax({
        url: uri,
        async: true,
        dataType: "blob",
        beforeSend: function() {
          $("#preloader").show();
        },
        success: function(data, textStatus) {
          callback(id, window.webkitURL.createObjectURL(data));
        }
      })
    }
function notification_load(){
	sender('notifications.get','v=5.25', function(data){
		if(data['response']['count'] !=''){
			$(".new_notification").html('+'+data['response']['count']).show();
		}
	})
}

function like_comment(i,data,profiles,groups){
    var mess = data['parent']['text'].replace(/\[([^\.]+)\|([^\.]+)\]/, function(s, d, n) {
      return n;
    });
    var text = '<div id="notification_like_comment">';
    text += '<table class="feedback_row_t" cellpadding="0" cellspacing="0">'+
      '<tbody><tr>'+
        '<td class="feedback_row_photo">'+
          '<div class="feedback_row_photo">'+
            '<a href="#" >'+
              '<div class="feedback_photo_icon" style="background-position: 0 -48px;"></div>'+
              '<img class="feedback_row_photo" uid="'+data['feedback']['items'][0]['from_id']+'" src="">'+
            '</a>'+
          '</div>'+
        '</td>'+
        '<td class="feedback_row_content">'+
          '<div class="feedback_row_group_names" uid="'+data['feedback']['items'][0]['from_id']+'"></div>'+
          '<div class="feedback_row_group_photos clear_fix">'+mess+'</div>'+
          '<div class="feedback_row_date"><span class="rel_date">'+formatDate(new Date(data['date'] * 1000))+'</span></div>'+
        '</td>'+
      '</tr>'+
    '</tbody></table>';
    text += '<div>';
    $("#news").append(text);
        	for(var j = 0;j < profiles.length;j++){
        	  if(data['feedback']['items'][0]['from_id'] == profiles[j]['id']){
                $(".feedback_row_group_names[uid='"+profiles[j]['id']+"']").html('<a href="#" class="mem_link">'+profiles[j]['first_name']+' '+profiles[j]['last_name']+'</a> оценил'+((profiles[j]['sex'] == 1)? 'а':'')+' Ваш комментарий');
                loadImagemes(profiles[j]['photo_50'],profiles[j]['id'],function(id,src){
                	$(".feedback_row_photo[uid='"+id+"']").attr('src',src);
                })
        	  }
        	}
}

function like_comment_photo(i,data,profiles,groups){
  var mess = data['parent']['text'].replace(/\[([^\.]+)\|([^\.]+)\]/, function(s, d, n) {
    return n;
  });
    var text = '<div id="notification_like_comment">';
    text += '<table class="feedback_row_t" cellpadding="0" cellspacing="0">'+
      '<tbody><tr>'+
        '<td class="feedback_row_photo">'+
          '<div class="feedback_row_photo">'+
            '<a href="#" >'+
              '<div class="feedback_photo_icon" style="background-position: 0 -48px;"></div>'+
              '<img class="feedback_row_photo" uid="'+data['feedback']['items'][0]['from_id']+'" src="">'+
            '</a>'+
          '</div>'+
        '</td>'+
        '<td class="feedback_row_content">'+
          '<div class="feedback_row_group_names" uid="'+data['feedback']['items'][0]['from_id']+'"></div>'+
          '<div class="feedback_row_group_photos clear_fix">'+mess+'</div>'+
          '<div class="feedback_row_date"><span class="rel_date">'+formatDate(new Date(data['date'] * 1000))+'</span></div>'+
        '</td>'+
        '<td>'+
        '<div class="feedback_photo_view" id_photo="m_'+data['parent']['photo']['id']+'" data-lightbox="photo_messages" href=""><img class="feedback_photo_view_mini" id_photo="'+data['parent']['photo']['id']+'" src=""></div>'+
        '</td>'+
      '</tr>'+
    '</tbody></table>';
    text += '<div>';
    $("#news").append(text);
      loadImagemes(data['parent']['photo']['photo_75'],data['parent']['photo']['id'],function(id,src){
        $("img[id_photo='"+id+"']").attr('src',src);
      })

      loadImagemes((data['parent']['photo']['photo_604'] != undefined )? data['parent']['photo']['photo_604']:data['parent']['photo']['photo_130'],data['parent']['photo']['id'],function(id,src){
        $("div[id_photo='m_"+id+"']").attr('href',src);
      })


          for(var j = 0;j < profiles.length;j++){
            if(data['feedback']['items'][0]['from_id'] == profiles[j]['id']){
                $(".feedback_row_group_names[uid='"+profiles[j]['id']+"']").html('<a href="#" class="mem_link">'+profiles[j]['first_name']+' '+profiles[j]['last_name']+'</a> оценил'+((profiles[j]['sex'] == 1)? 'а':'')+' Ваш комментарий к фотографии');
                loadImagemes(profiles[j]['photo_50'],profiles[j]['id'],function(id,src){
                  $(".feedback_row_photo[uid='"+id+"']").attr('src',src);
                })
            }
          }
}
function notification(){
	sender('notifications.get','v=5.25', function(data){
    console.info(data);
		for(var i = 0;i<data['response']['items'].length;i++){
			switch (data['response']['items'][i]['type']) {
               case 'like_comment':
                 like_comment(i,data['response']['items'][i],data['response']['profiles'],data['response']['groups']);
               break
               case 'like_comment_topic':
                 like_comment(i,data['response']['items'][i],data['response']['profiles'],data['response']['groups']);
               break
               case 'like_comment_photo':
                 like_comment_photo(i,data['response']['items'][i],data['response']['profiles'],data['response']['groups']);
               break
               default:
                 // console.info(data['response']['items'][i])
            }
		}
	})
}