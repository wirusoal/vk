  var escapeHtml = function(text) {
    var map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
  
    var d =  text.replace(/[&<>"']/g, function(m) { return map[m]; });
    var re = /&lt;a target=&quot;_blank&quot; href=&quot;([\w\W]{1,400})&quot;&gt;([\w\W]{1,400})&lt;\/a&gt;/g; 
    d = d.replace(re,function(q,w,e){ return '<a target="_blank" href="'+w+'">'+e+'</a>'; });
    return d.replace(/&lt;br&gt;/g,'<br>');
  }
  
function emoji_load(){
      $("img[alte][alte!='']").each(function() {
        loa('https://vk.com/images/emoji/' + $(this).attr('alte') + '.png', $(this).attr('alte'), function(charCode, d) {
          $("img[alte='" + charCode + "']").attr("src", d).attr("alte", "");
        })
      });
}

function obj(obj){var s="";for(prop in obj){if(typeof obj[prop]!="function"){s+="obj["+prop+"] = "+obj[prop]+"; "}}return s}
var sender=function(d,e,f){chrome.storage.local.get('vkAccessToken',function(c){$.ajax({url:'https://api.vk.com/method/'+d+'?'+e+'&v=5.25&access_token='+c.vkAccessToken,dataType:"json",success:function(a,b){f(a)}})})}
var loadImage=function(c,d){$.ajax({url:c,async:true,dataType:"blob",success:function(a,b){d(window.webkitURL.createObjectURL(a))}})}
function notification_messages(id){sender('users.get','user_ids='+id+'&fields=photo_100,sex',function(data){if(!data['error']){loadImage(data['response'][0]['photo_100'],function(d){var sex=(data['response'][0]['sex']==2)?'написал':'написала';notify('Оповешение VK inviz',data['response'][0]['first_name']+' '+data['response'][0]['last_name']+" "+sex+" сообщение.",d)})}}); var song=document.getElementById('beep');song.play()}
function notify(c,d,e){chrome.notifications.create('',{type:'basic',iconUrl:e,title:c,message:d,buttons:[{title:'Открыть диалоги',iconUrl:'images/message-xxl.png'}]},function(){});chrome.notifications.onClicked.addListener(function(a){chrome.notifications.clear(a,function(){})});chrome.notifications.onButtonClicked.addListener(function(a,b){chrome.app.window.current().restore();$(".messages_open_v2").click()})}
var longPong=function(e){chrome.storage.local.get('longPong',function(c){if($("#longpong").val()==''){var d=c['longPong']['ts']}else{var d=$("#longpong").val()}console.log(c['longPong']['server']);$.ajax({url:'https://'+c['longPong']['server'].replace("//","/")+'?act=a_check&key='+c['longPong']['key']+'&ts='+d+'&wait=25&mode=2',dataType:"json",async:true,success:function(a,b){$("#longpong").val(a['ts']);e(a)}, error(a,b,c){
  if(a['status'] == 504){
    console.log("504");
    open_longPong();
    send_long_pong();
  }
}})})}
function open_longPong(){sender('messages.getLongPollServer','',function(a){var b={};b['ts']=a['response']['ts'];b['key']=a['response']['key'];b['server']=a['response']['server'];chrome.storage.local.set({'longPong':b},function(){})})}
function send_long_pong(){longPong(function(a){forLongPong(a['updates']);send_long_pong()})}
function formatDate(date,p){var diff=new Date()-date;var d=date;d=['0'+d.getDate(),'0'+(d.getMonth()+1),''+d.getFullYear(),'0'+d.getHours(),'0'+d.getMinutes()];for(var i=0;i<d.length;i++){d[i]=d[i].slice(-2)}var new_date=new Date();if(p==1){if(new_date.getDate()==date.getDate()){return d.slice(3).join(':')}else if(new_date.getDate()-1==date.getDate()){return'вчера'}else{return d[0]+' '+monthName[d[1]]}}else{if(diff<1000){return'только что'}var sec=Math.floor(diff/1000);if(sec<60){return sec+' сек. назад'}var min=Math.floor(diff/60000);if(min<60){return min+' мин. назад'}if(new_date.getDate()==date.getDate()){return'сегодня в '+d.slice(3).join(':')}else if(new_date.getDate()-1==date.getDate()){return'вчера в '+d.slice(3).join(':')}else{return d.slice(0,3).join('.')+' '+d.slice(3).join(':')}}}
function formatDates(date){var diff=new Date()-date;var d=date;d=['0'+d.getDate(),'0'+(d.getMonth()+1),''+d.getFullYear(),'0'+d.getHours(),'0'+d.getMinutes()];for(var i=0;i<d.length;i++){d[i]=d[i].slice(-2)}var new_date=new Date();if(new_date.getDate()==date.getDate()){return d.slice(3).join(':')}else if(new_date.getDate()-1==date.getDate()){return'вчера'}else{return d[0]+' '+monthName[d[1]]}}
//-------------------//
var mess_new = function(id,time,messages){
var text = '<div class="dialogs_msg_body old dialogs_msg_body_new_on"><div class="im_msg_text">'+((messages.length > 35) ? Emoji.emojiToHTML(messages.substr(0, 35))+'...':Emoji.emojiToHTML(messages))+'</div></div>';
$(".dialogs_row[uid='"+id+"'] .dialogs_row_t").find(".dialogs_msg_body").html(text);
$(".dialogs_row[uid='"+id+"'] .dialogs_row_t").find(".dialogs_date").html(formatDates(new Date(time * 1000)));
}

var repost_wall_mess = function(data) {
  console.info(data)
    var text = '';
    var reg = /(?:^|[\s]+)((http(s)?:\/\/)|(www\.))([^\.]+)\.(?:[^\s,]+)/ig;
    var mess = data['text'].replace(reg, function(s) {
      var str = (/:\/\//.exec(s) === null ? "http://" + s : s);
      return "<a target=\"_blank\" href=\"" + str + "\">" + str /*s*/ + "</a>";
    });
    text += '<div class="wall_post_text">' + mess + '</div>';
    text += '<div class="wall_attachments">';
    if (data['attachments'] != null) {
      for (var q = 0; q < data['attachments'].length; q++) {
        if (data['attachments'][q]['type'] == 'photo') {
          text += "<div style='height:75px;padding-left: 3px;float: left;' data-lightbox='photo_news' id='mes_photo_href' t='o" + data['attachments'][q]['photo']['id'] + "' href=''><img height='75px' src='images/image_loader.gif' id='mes_photo_img' t='" + data['attachments'][q]['photo']['id'] + "'></div>";
          loa(data['attachments'][q]['photo']['photo_604'], "o"+data['attachments'][q]['photo']['id'], function(id, d) {
            $("#mes_photo_href[t='" + id + "']").attr("href", d);
          })
          loa(data['attachments'][q]['photo']['photo_75'], data['attachments'][q]['photo']['id'], function(id, d) {
            $("#mes_photo_img[t='" + id + "']").attr("src", d);
          })
        } else if (data['attachments'][q]['type'] == 'link') {
          if (data['attachments'][q]['link']['url'].indexOf('://vk.com/') > -1) {
            text += '<div class="media_desc"><a target="_blank" class="lnk" href="' + data['attachments'][q]['link']['url'] + '"><b class="fl_l "></b><span class="a">Ссылка может нарушить вашу невидимость -> ' + data['attachments'][q]['link']['title'] + '</span></a></div>';
          } else {
            text += '<div class="media_desc"><a target="_blank" class="lnk" href="' + data['attachments'][q]['link']['url'] + '"><b class="fl_l "></b><span class="a">' + data['attachments'][q]['link']['title'] + '</span></a></div>';
          }
        } else if (data['attachments'][q]['type'] == 'video') {
          text += '<webview t="' + data['attachments'][q]['video']['id'] + '" style="width: 100%;" src=""></webview>';
          sender('video.get', 'videos=' + data['attachments'][q]['video']['owner_id'] + '_' + data['attachments'][q]['video']['id'] + '_' + data['attachments'][q]['video']['access_key'], function(data) {
            // console.log(obj(data['response'][1])); 
            $("webview[t='" + data['response'][1]['vid'] + "']").attr("src", data['response'][1]['player']);
          })
        } else if (data['attachments'][q]['type'] == 'audio') {
          text += '<div id="track" mus="repost_wall" class="audio_messages" duration="' + data['attachments'][q]['audio']['duration'] + '" uid="' + data['attachments'][q]['audio']['aid'] + '" url="' + data['attachments'][q]['audio']['url'] + '"><div class="track_play"></div><div class="track_title">' + data['attachments'][q]['audio']['artist'] + ' - ' + data['attachments'][q]['audio']['title'] + '</div></div>';
        } else if (data['attachments'][q]['type'] == 'doc') {
          text += "<a target='_blank' href='" + data['attachments'][q]['doc']['url'] + "'>" + data['attachments'][q]['doc']['title'] + "</a> ";
        }
      }
    }
    text += '</div>';
    return text;
  }

var messages_attr = function(data){
        var messages = '<table>';
        for (var i = 0; i < data.length; i++) {
          if (data[i]['body'] != null) {
            messages += "<tr>";
            messages = messages + '<td class="im_log_author"><div class="im_log_author_chat_thumb"><img id="id_' + data[i]['user_id'] + '" src="images/image_loader.gif" class="im_log_author_chat_thumb" width="32" height="32"></div></td>';
            messages = messages + '<td class="im_log_body"><div class="wrapped"><div class="im_log_author_chat_name" uid="' + data[i]['user_id'] + '"></div>';

            var reg = /(?:^|[\s]+)((http(s)?:\/\/)|(www\.))([^\.]+)\.(?:[^\s,]+)/ig;
            var mess = data[i]['body'].replace(reg, function(s) {
              var str = (/:\/\//.exec(s) === null ? "http://" + s : s);
              return "<a target=\"_blank\" href=\"" + str + "\">" + str /*s*/ + "</a>";
            });

            var reg = /\[([^\.]+)\|([^\.]+)\]/;
            mess = mess.replace(reg, function(s, d, n) {
              return n;
            });

            mess = mess.replace(/\n/ig, '<br>');
            messages = messages + '<div class="im_msg_text">' + Emoji.emojiToHTML(escapeHtml(mess));
            messages += "<div class='lala'>";
            //Проверяем есть ли прикрепления
            if (data[i]['attachments'] != null) {
              for (var q = 0; q < data[i]['attachments'].length; q++) {
                if (data[i]['attachments'][q]['type'] == 'photo') {
                  messages = messages + "<div style='height:75px;padding-left: 2px;' id='mes_photo_href' data-lightbox='photo_messages' t='a_" + data[i]['attachments'][q]['photo']['id'] + "' href=''><img height='75px' src='images/image_loader.gif' id='mes_photo_img' t='i_" + data[i]['attachments'][q]['photo']['id'] + "'></div>";
                  console.info(data[i]['attachments'][q]['photo']);
                  loa(data[i]['attachments'][q]['photo']['photo_604'], data[i]['attachments'][q]['photo']['id'], function(id, d) {
                    $("#mes_photo_href[t='a_" + id + "']").attr("href", d);
                  })
                  loa(data[i]['attachments'][q]['photo']['photo_75'], data[i]['attachments'][q]['photo']['id'], function(id, d) {
                    $("#mes_photo_img[t='i_" + id + "']").attr("src", d);
                  })
                } else if (data[i]['attachments'][q]['type'] == 'audio') {
                  //console.log(obj(data[i]['attachments'][q]['audio']));
                  // messages += '<div id="track" class="audio_messages" duration="'+data[i]['attachments'][q]['audio']['duration']+'" uid="'+data[i]['attachments'][q]['audio']['aid']+'" url="'+data[i]['attachments'][q]['audio']['url']+'"><div class="track_play"></div><div class="track_title">'+data[i]['attachments'][q]['audio']['artist']+' - '+data[i]['attachments'][q]['audio']['title']+'</div></div>';
                  messages += '<div id="track" mus="messages" class="audio_messages" duration="' + data[i]['attachments'][q]['audio']['duration'] + '" uid="' + data[i]['attachments'][q]['audio']['aid'] + '" url="' + data[i]['attachments'][q]['audio']['url'] + '"><div class="track_play"></div><div class="track_title">' + data[i]['attachments'][q]['audio']['artist'] + ' - ' + data[i]['attachments'][q]['audio']['title'] + '</div></div>';

                } else if (data[i]['attachments'][q]['type'] == 'video') {
                  console.log(obj(data[i]['attachments'][0]['video'])); 
                  messages = messages + '<webview t="' + data[i]['attachments'][q]['video']['id'] + '" style="width: 100%;" src=""></webview>';
                  sender('video.get', 'videos=' + data[i]['attachments'][q]['video']['owner_id'] + '_' + data[i]['attachments'][q]['video']['id'] + '_' + data[i]['attachments'][q]['video']['access_key'], function(data) {
                    $("webview[t='" + data['response'][1]['vid'] + "']").attr("src", data['response'][1]['player']);
                  })
                } else if (data[i]['attachments'][q]['type'] == 'sticker') {
                  messages = messages + "<img height='75px' src='' id='sticker' t='" + data[i]['attachments'][q]['sticker']['id'] + "'>";
                  loa(data[i]['attachments'][q]['sticker']['photo_64'], data[i]['attachments'][q]['sticker']['id'], function(id, d) {
                    $("#sticker[t='" + id + "']").attr("src", d);
                  })
                } else if (data[i]['attachments'][q]['type'] == 'doc') {
                  messages = messages + "<a target='_blank' href='" + data[i]['attachments'][q]['doc']['url'] + "'>Документ " + data[i]['attachments'][q]['doc']['title'] + "</a>";
                }
              }
            }
            messages += "</div>";
            messages = messages + "</div></div></td>";
            messages = messages + '<td class="im_log_date" uptime="'+data[i]['date']+'">' + formatDate(new Date(data[i]['date'] * 1000)) + '</td>';
            messages = messages + "</tr>";
         
          }
        }
        messages = messages+"</table>";
        return messages;
        emoji_load();
}


var dd_messages = function(data, s, offs){
  for (var i = 0; i < data['response']['items'].length; i++) {
          if (data['response']['items'][i]['body'] != null) {
          	if(s != 0){
              var news = $("#messages > #table").html();
              $("#messages > #table").html('');
            }
            var messages = "<div id='id_messagesss' id_messages='" + data['response']['items'][i]['id'] + "' style='"+((data['response']['items'][i]['read_state'] == 0)? 'background: rgba(235, 235, 235, 1);':'')+"'>";
            messages +='<table style="'+((data['response']['items'][i]['out'] == 0)? 'float:right':'')+'"><tr>';
           if(data['response']['items'][i]['out'] == 1){
           	if(data['response']['items'][i]['from_id'] != undefined){ $("#my_id").val(data['response']['items'][i]['from_id']); }
              messages = messages + '<th rowspan="2"><div class="im_log_author" style="float: left;margin-right: 3px;"><div class="im_log_author_chat_thumb"><img id="id_' + ((data['response']['items'][i]['from_id'] == undefined)? data['response']['items'][i]['user_id']:data['response']['items'][i]['from_id'] )+ '" src="'+((s == 0)? $("#messages").find("img[id='id_"+$("#my_id").val()+"']").attr('src'):"images/image_loader.gif")+'" class="im_log_author_chat_thumb myid" width="32" height="32"></div></div></th>';
            } 

              //messages = messages + '<div class="im_log_body" style="'+((data['response']['items'][i]['out'] == 0)? 'float: right;margin-right: 38px;':'float:left;')+'"><div class="wrapped">';
            var reg = /(?:^|[\s]+)((http(s)?:\/\/)|(www\.))([^\.]+)\.(?:[^\s,]+)/ig;
            var mess = data['response']['items'][i]['body'].replace(reg, function(s) {
              var str = (/:\/\//.exec(s) === null ? "http://" + s : s);
              return "<a target=\"_blank\" href=\"" + str + "\">" + str /*s*/ + "</a>";
            });

            var reg = /\[([^\.]+)\|([^\.]+)\]/;
            mess = mess.replace(reg, function(s, d, n) {
              return n;
            });

            mess = mess.replace(/\n/ig, '<br>');
            messages = messages + '<th><div class="im_log_date" style="'+((data['response']['items'][i]['out'] == 0)? 'float:right':'float:left;')+'" uptime="'+data['response']['items'][i]['date']+'">' + formatDate(new Date(data['response']['items'][i]['date'] * 1000)) + '</div></th>';
            
            if(data['response']['items'][i]['out'] == 0){
            messages = messages + '<th rowspan="2"><div class="im_log_author"><div class="im_log_author_chat_thumb"><img id="id_' + ((data['response']['items'][i]['from_id'] == undefined)? data['response']['items'][i]['user_id']:data['response']['items'][i]['from_id']) + '" src="'+((s == 0)? $("#messages").find("img[id='id_"+((data['response']['items'][i]['from_id'] == undefined)? data['response']['items'][i]['user_id']:data['response']['items'][i]['from_id'] )+"']").attr('src'):"images/image_loader.gif")+'" class="im_log_author_chat_thumb" width="32" height="32"></div></div></th>';
            }
            messages +="</tr>"
            messages = messages + '<tr><td><div class="im_msg_text" style="'+((data['response']['items'][i]['out'] == 0)? 'float:right':'float:left;')+'">' + Emoji.emojiToHTML(escapeHtml(mess));//emoji(escapeHtml(mess), true);  
            messages += "<div class='lala'>";
            //Проверяем есть ли прикрепления
            if (data['response']['items'][i]['attachments'] != null) {

              for (var q = 0; q < data['response']['items'][i]['attachments'].length; q++) {
               // console.log(obj(data['response']['items'][i]['attachments'][q]));
                if (data['response']['items'][i]['attachments'][q]['type'] == 'photo') {
                 //console.log(obj(data['response']['items'][i]['attachments'][q]['photo']));
                  messages = messages + "<div style='height:75px;padding-left: 2px;' id='mes_photo_href' data-lightbox='photo_messages' kl='p" + data['response']['items'][i]['attachments'][q]['photo']['id'] + "' href=''><img height='75px' src='images/image_loader.gif' id='mes_photo_img' t='" + data['response']['items'][i]['attachments'][q]['photo']['id'] + "'></div>";
                  loa(data['response']['items'][i]['attachments'][q]['photo']['photo_604'], "p"+data['response']['items'][i]['attachments'][q]['photo']['id'], function(id, d) {
                    $("#mes_photo_href[kl='" + id + "']").attr("href", d);
                  })
                  loa(data['response']['items'][i]['attachments'][q]['photo']['photo_130'], data['response']['items'][i]['attachments'][q]['photo']['id'], function(id, d) {
                    $("#mes_photo_img[t='" + id + "']").attr("src", d);
                  })
                } else if (data['response']['items'][i]['attachments'][q]['type'] == 'audio') {
                  //console.log(obj(data['response']['items'][i]['attachments'][q]['audio']));
                  // messages += '<div id="track" class="audio_messages" duration="'+data['response']['items'][i]['attachments'][q]['audio']['duration']+'" uid="'+data['response']['items'][i]['attachments'][q]['audio']['aid']+'" url="'+data['response']['items'][i]['attachments'][q]['audio']['url']+'"><div class="track_play"></div><div class="track_title">'+data['response']['items'][i]['attachments'][q]['audio']['artist']+' - '+data['response']['items'][i]['attachments'][q]['audio']['title']+'</div></div>';
                  messages += '<div id="track" mus="messages" class="audio_messages" duration="' + data['response']['items'][i]['attachments'][q]['audio']['duration'] + '" uid="' + data['response']['items'][i]['attachments'][q]['audio']['aid'] + '" url="' + data['response']['items'][i]['attachments'][q]['audio']['url'] + '"><div class="track_play"></div><div class="track_title">' + data['response']['items'][i]['attachments'][q]['audio']['artist'] + ' - ' + data['response']['items'][i]['attachments'][q]['audio']['title'] + '</div></div>';

                } else if (data['response']['items'][i]['attachments'][q]['type'] == 'video') {
                  //console.log(obj(data['response']['items'][i]['attachments'][0]['video'])); 
                  messages = messages + '<webview t="' + data['response']['items'][i]['attachments'][q]['video']['id'] + '" style="width: 100%;" src=""></webview>';
                  sender('video.get', 'videos=' + data['response']['items'][i]['attachments'][q]['video']['owner_id'] + '_' + data['response']['items'][i]['attachments'][q]['video']['id'] + '_' + data['response']['items'][i]['attachments'][q]['video']['access_key'], function(data) {
                    $("webview[t='" + data['response'][1]['vid'] + "']").attr("src", data['response'][1]['player']);
                  })
                } else if (data['response']['items'][i]['attachments'][q]['type'] == 'sticker') {
                  messages = messages + "<img height='64px' src='' id='sticker' t='" + data['response']['items'][i]['attachments'][q]['sticker']['id'] + "'>";
                  loa(data['response']['items'][i]['attachments'][q]['sticker']['photo_64'], data['response']['items'][i]['attachments'][q]['sticker']['id'], function(id, d) {
                    $("#sticker[t='" + id + "']").attr("src", d);
                  })
                } else if (data['response']['items'][i]['attachments'][q]['type'] == 'doc') {
                  messages = messages + "<a target='_blank' href='" + data['response']['items'][i]['attachments'][q]['doc']['url'] + "'>Документ " + data['response']['items'][i]['attachments'][q]['doc']['title'] + "</a>";
                } else if (data['response']['items'][i]['attachments'][q]['type'] == 'wall') {
                  messages += '<span style="color: #174CAA;font-size: 11px;">Прикреплена запись:</span>';                  
                  messages += '<div id="repost_wall_mess">';
                  //console.info(data['response']['items'][i]['attachments'][q]['wall'])
                  messages += repost_wall_mess(data['response']['items'][i]['attachments'][q]['wall']);
                  messages += '</div>';
                }
              }
            }
                  if(data['response']['items'][i]['fwd_messages'] != undefined){
                    for(var r = 0;r<data['response']['items'][i]['fwd_messages'].length;r++){
                    //  if(uid_user.indexOf(data['response']['items'][i]['fwd_messages'][r]['user_id']) == -1){ uid_user.push(data['response']['items'][i]['fwd_messages'][r]['user_id']); }
                    }
                    console.info(data['response']['items'][i]['fwd_messages']);
                  messages = messages + '<span style="color: rgb(97, 97, 231);font-size: 10px;">Пересланные сообщения</span><br>';
                  messages = messages + '<div id="messages_attr">';
                  messages = messages + messages_attr(data['response']['items'][i]['fwd_messages']);
                  messages = messages + '</div>';
                  }
            messages += "</div>";
            messages = messages + "</div></td></tr></table>";
            $("#messages > #table").append(messages);
            if(s != 0){
            $("#messages > #table").append(news);
            }

            if(offs == 0){
            $("#messages").scrollTop($("#messages").prop('scrollHeight'));
            }
          }
        }
        emoji_load()
}
//------------------//
var messages2 = function(datas) {
  sender('messages.getById', 'message_ids='+datas[0][1], function(data) {
     dd_messages(data,0,0);
  })
}


function forLongPong(data){
if(data != undefined){
  for(var i = 0;i < data['length']; i++){
    //console.log(obj(data[i]));
    switch (data[i][0]) {
      case 8: //Появился в сети
         if(data[i][2] == 0){
           $(".dialogs_row[uid='"+(data[i][1]*-1)+"']").find(".dialogs_online").css("background-image","url('images/pc.png')");
         }else{
           $(".dialogs_row[uid='"+(data[i][1]*-1)+"']").find(".dialogs_online").css("background-image","url('images/mobile-online.gif')");
         }
        break
      case 9: //Пропал
         $(".dialogs_row[uid='"+(data[i][1]*-1)+"']").find(".dialogs_online").css("background-image","url('images/offline.png')");
        break
      case 80: //Счетчик сообщенний
        break
      case 4: //Пришло новое сообщение
        if (chrome.app.window.current().isMinimized()) { notification_messages(data[i][3]); }
          //console.info(data);
          if($("#uid_user").val().substr(0, 5) == 'chat_'){
            var c_id = $("#uid_user").val().substring(5); 
            var new_id = data[i][3].toString().substring(data[i][3].toString().length-c_id.length);
            if(new_id == c_id){
              var updates_id = $("#uid_user").val();
            }else {
              var updates_id = data[i][3];
            }
          }else{
            var updates_id = data[i][3];
          }
          $(".dialogs_row[uid='"+updates_id+"']").css('background','#eef2f6'); 
            mess_new(updates_id,data[i][4],data[i][6]);
          $(".dialogs_row img[id^='id'][src='images/image_loader.gif']").parent().parent().parent().parent().parent().remove();
          if($(".dialogs_row[uid='"+updates_id+"']")[0]){
            $("#messages_form").prepend($(".dialogs_row[uid='"+updates_id+"']"));
          }else{
            //$("#get_mess").click();
          }
          chrome.storage.local.get('sound', function (result) {
            if (result.sound == undefined || result.sound == 1){
            var song=document.getElementById('beep');song.play();
          }})
        
        if($("#messages").css("display")=="block" && updates_id == $("#uid_user").val()){ 
          //$("#update_messages").click();
          messages2(data);
          chrome.storage.local.get('sound', function (result) {
            if (result.sound == undefined || result.sound == 1){
            var song=document.getElementById('beep');song.play();
          }})
        }
        break
      case 3: //Прочитал сообщение
        $(".dialogs_row[uid='"+data[i][3]+"']").removeClass('dialogs_new_msgs').css("background","");
        if(data[i][3] == $("#uid_user").val()){ $("*[id_messages]").css("background","");}
        break
      case 61:
        if ( data[i][1] < 0) { data[i][1] = Math.abs(data[i][1])+1000000000; }
        $("#messages_form").find(".dialogs_row[uid='"+data[i][1]+"']").find(".dialogs_online").hide();
        $(".dialogs_row[uid='"+data[i][1]+"']").find("#nabor").css("display","block");
        if(data[i][1] == $("#uid_user").val()){  $(".riso2").show(); }
        break
      default:
       // console.log(obj(data[i]));
    }
  }
 }else{ //console.info('11111');
  }
}


