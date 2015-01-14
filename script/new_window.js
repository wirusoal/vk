$(document).ready(function() {
var user_id = /ID_(.*)/.exec(chrome.app.window.current().id);
$("#uid_user").val(user_id[1]);
$(".title-button_close").click(function(){
  window.close();
})

function formatDate(date){var diff=new Date()-date;if(diff<1000){return'только что'}var sec=Math.floor(diff/1000);if(sec<60){return sec+' сек. назад'}var min=Math.floor(diff/60000);if(min<60){return min+' мин. назад'}var d=date;d=['0'+d.getDate(),'0'+(d.getMonth()+1),''+d.getFullYear(),'0'+d.getHours(),'0'+d.getMinutes()];for(var i=0;i<d.length;i++){d[i]=d[i].slice(-2)}var new_date=new Date();if(new_date.getDate()==date.getDate()){return'сегодня в '+d.slice(3).join(':')}else if(new_date.getDate()-1==date.getDate()){return'вчера в '+d.slice(3).join(':')}else{return d.slice(0,3).join('.')+' '+d.slice(3).join(':')}}
var loadImage=function(uri,callback){$.ajax({url:uri,async:true,dataType:"blob",success:function(data,textStatus){callback(window.webkitURL.createObjectURL(data))}})}
var loadImagemes=function(uri,id,callback){$.ajax({url:uri,async:true,dataType:"blob",success:function(data,textStatus){callback(id,window.webkitURL.createObjectURL(data))}})}
var sender=function(METHOD,PARAMETERS,callback){chrome.storage.local.get('vkAccessToken',function(result){$.ajax({url:'https://api.vk.com/method/'+METHOD+'?'+PARAMETERS+'&access_token='+result.vkAccessToken,dataType:"json",success:function(data,textStatus){callback(data)}})})}
function name_avatar(){sender('users.get','user_ids='+user_id[1]+'&fields=photo_100',function(data){if(!data['error']){$(".title-area > span").html(data['response'][0]['first_name']+" "+data['response'][0]['last_name'])}})}
  name_avatar()
  //--------------------//
 //       emoji        //
//--------------------//
  function emoji(str, replaceWithImages) {
      var output = "";
      var vkSymbols = ["D83DDE0A", "D83DDE03", "D83DDE09", "D83DDE06", "D83DDE1C", "D83DDE0B", "D83DDE0D", "D83DDE0E", "D83DDE12", "D83DDE0F", "D83DDE14", "D83DDE22", "D83DDE2D", "D83DDE29", "D83DDE28", "D83DDE10", "D83DDE0C", "D83DDE20", "D83DDE21", "D83DDE07", "D83DDE30", "D83DDE32", "D83DDE33", "D83DDE37", "D83DDE1A", "D83DDE08", "2764", "D83DDC4D", "D83DDC4E", "261D", "270C", "D83DDC4C", "26BD", "26C5", "D83CDF1F", "D83CDF4C", "D83CDF7A", "D83CDF7B", "D83CDF39", "D83CDF45", "D83CDF52", "D83CDF81", "D83CDF82", "D83CDF84", "D83CDFC1", "D83CDFC6", "D83DDC0E", "D83DDC0F", "D83DDC1C", "D83DDC2B", "D83DDC2E", "D83DDC03", "D83DDC3B", "D83DDC3C", "D83DDC05", "D83DDC13", "D83DDC18", "D83DDC94", "D83DDCAD", "D83DDC36", "D83DDC31", "D83DDC37", "D83DDC11", "23F3", "26BE", "26C4", "2600", "D83CDF3A", "D83CDF3B", "D83CDF3C", "D83CDF3D", "D83CDF4A", "D83CDF4B", "D83CDF4D", "D83CDF4E", "D83CDF4F", "D83CDF6D", "D83CDF37", "D83CDF38", "D83CDF46", "D83CDF49", "D83CDF50", "D83CDF51", "D83CDF53", "D83CDF54", "D83CDF55", "D83CDF56", "D83CDF57", "D83CDF69", "D83CDF83", "D83CDFAA", "D83CDFB1", "D83CDFB2", "D83CDFB7", "D83CDFB8", "D83CDFBE", "D83CDFC0", "D83CDFE6", "D83DDC00", "D83DDC0C", "D83DDC1B", "D83DDC1D", "D83DDC1F", "D83DDC2A", "D83DDC2C", "D83DDC2D", "D83DDC3A", "D83DDC3D", "D83DDC2F", "D83DDC5C", "D83DDC7B", "D83DDC14", "D83DDC23", "D83DDC24", "D83DDC40", "D83DDC42", "D83DDC43", "D83DDC46", "D83DDC47", "D83DDC48", "D83DDC51", "D83DDC60", "D83DDCA1", "D83DDCA3", "D83DDCAA", "D83DDCAC", "D83DDD14", "D83DDD25"];
      var stopCharCode = "d83d";
      var charCode;
      var codesArray = [];
      for (var i = 0; i < str.length; i++) {
        charCode = str.charCodeAt(i).toString(16);
        if (charCode === stopCharCode) {
          codesArray.push(stopCharCode);
          continue;
        }
        if (codesArray.length) {
          codesArray.push(charCode);
          charCode = codesArray.join("").toUpperCase();
        } else {
          charCode = charCode.toUpperCase();
        }
        if (vkSymbols.indexOf(charCode) !== -1) {
          output += replaceWithImages ? " <img class='emoji' src='' width='16' height='16' alt='" + charCode + "'/> " : " ";
          loadImagemes('http://vk.com/images/emoji/' + charCode + '.png', charCode, function(charCode, d) {
            $(".emoji[alt='" + charCode + "']").attr("src", d);
          })
        } else {
          output += str[i];
        }
        codesArray.length = 0;
      }
      return output;
    }
  //--------------------//
 //      messages      //
//--------------------//
  function repost_wall_mess(data) {
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
          text += "<div style='height:75px;padding-left: 3px;float: left;' data-lightbox='photo_news' id='mes_photo_href' t='" + data['attachments'][q]['photo']['id'] + "' href=''><img height='75px' src='images/image_loader.gif' id='mes_photo_img' t='" + data['attachments'][q]['photo']['id'] + "'></div>";
          loadImagemes(data['attachments'][q]['photo']['photo_604'], data['attachments'][q]['photo']['id'], function(id, d) {
            $("#mes_photo_href[t='" + id + "']").attr("href", d);
          })
          loadImagemes(data['attachments'][q]['photo']['photo_75'], data['attachments'][q]['photo']['id'], function(id, d) {
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

var messages_open = function(id) {
      if (id.substr(0, 5) == 'chat_') {
        var u_id = 0;
        var c_id = id.substring(5);
      } else {
        var u_id = id;
        var c_id = 0;
      }
      var offs = 0;
  sender('messages.getHistory', 'v=5.25&rev=0&offset=' + offs + '&user_id=' + u_id + '&chat_id=' + c_id, function(data) {
        var uid_user = [];
        for (var i = 0; i < data['response']['items'].length; i++) {
          if (data['response']['items'][i]['body'] != null) {
            if(uid_user.indexOf(data['response']['items'][i]['from_id']) == -1){ uid_user.push(data['response']['items'][i]['from_id']); }
            var news = $("#messages > table").html();
            $("#messages > table").html('');
            var messages = "<tr id_messages='" + data['response']['items'][i]['id'] + "' style='"+((data['response']['items'][i]['read_state'] == 0)? 'background: rgba(238, 238, 238, 1);':'')+"''>";
            if (data['response']['items'][i]['id'] == '67221342') {
              messages = messages + '<td class="im_log_author"><div class="im_log_author_chat_thumb"><img src="vk-128.png" class="im_log_author_chat_thumb" width="32" height="32"></div></td>';
              messages = messages + '<td class="im_log_body"><div class="wrapped"><div class="im_log_author_chat_name">Техподдержка</div>';
            } else {
              messages = messages + '<td class="im_log_author"><div class="im_log_author_chat_thumb"><img id="id_' + data['response']['items'][i]['from_id'] + '" src="images/image_loader.gif" class="im_log_author_chat_thumb" width="32" height="32"></div></td>';
              messages = messages + '<td class="im_log_body"><div class="wrapped"><div class="im_log_author_chat_name" uid="' + data['response']['items'][i]['from_id'] + '"></div>';
            }
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
            messages = messages + '<div class="im_msg_text">' + emoji(mess, true);
            messages += "<div class='lala'>";
            //Проверяем есть ли прикрепления
            if (data['response']['items'][i]['attachments'] != null) {
              for (var q = 0; q < data['response']['items'][i]['attachments'].length; q++) {
               // console.log(obj(data['response']['items'][i]['attachments'][q]));
                if (data['response']['items'][i]['attachments'][q]['type'] == 'photo') {
                 //console.log(obj(data['response']['items'][i]['attachments'][q]['photo']));
                  messages = messages + "<div style='height:75px;padding-left: 2px;' id='mes_photo_href' data-lightbox='photo_messages' kl='" + data['response']['items'][i]['attachments'][q]['photo']['id'] + "' href=''><img height='75px' src='images/image_loader.gif' id='mes_photo_img' t='" + data['response']['items'][i]['attachments'][q]['photo']['id'] + "'></div>";
                  loadImagemes(data['response']['items'][i]['attachments'][q]['photo']['photo_604'], data['response']['items'][i]['attachments'][q]['photo']['id'], function(id, d) {
                    $("#mes_photo_href[kl='" + id + "']").attr("href", d);
                  })
                  loadImagemes(data['response']['items'][i]['attachments'][q]['photo']['photo_130'], data['response']['items'][i]['attachments'][q]['photo']['id'], function(id, d) {
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
                  messages = messages + "<img height='75px' src='' id='sticker' t='" + data['response']['items'][i]['attachments'][q]['sticker']['id'] + "'>";
                  loadImagemes(data['response']['items'][i]['attachments'][q]['sticker']['photo_64'], data['response']['items'][i]['attachments'][q]['sticker']['id'], function(id, d) {
                    $("#sticker[t='" + id + "']").attr("src", d);
                  })
                } else if (data['response']['items'][i]['attachments'][q]['type'] == 'doc') {
                  messages = messages + "<a target='_blank' href='" + data['response']['items'][i]['attachments'][q]['doc']['url'] + "'>Документ " + data['response']['items'][i]['attachments'][q]['doc']['title'] + "</a>";
                } else if (data['response']['items'][i]['attachments'][q]['type'] == 'wall') {
                  messages += '<span style="color: #174CAA;font-size: 11px;">Прикреплена запись:</span>';                  
                  messages += '<div id="repost_wall_mess">';
                  messages += repost_wall_mess(data['response']['items'][i]['attachments'][q]['wall']);
                  messages += '</div>';
                }
              }
            }
                  if(data['response']['items'][i]['fwd_messages'] != undefined){
                    for(var r = 0;r<data['response']['items'][i]['fwd_messages'].length;r++){
                      if(uid_user.indexOf(data['response']['items'][i]['fwd_messages'][r]['user_id']) == -1){ uid_user.push(data['response']['items'][i]['fwd_messages'][r]['user_id']); }
                    }
                  messages = messages + '<span style="color: rgb(97, 97, 231);font-size: 10px;">Пересланные сообщения</span><br>';
                  messages = messages + '<div id="messages_attr">';
                  messages = messages + messages_attr(data['response']['items'][i]['fwd_messages']);
                  messages = messages + '</div>';
                  }
            messages += "</div>";
            messages = messages + "</div></div></td>";
           //messages = messages + '<td class="im_log_date" uptime="'+data['response']['items'][i]['date']+'">' + formatDate(new Date(data['response']['items'][i]['date'] * 1000)) + '</td>';
            messages = messages + "</tr>";
            $("#messages > table").append(messages);
            $("#messages > table").append(news);
            $("#messages").scrollTop($("#messages").prop('scrollHeight'));
          }
        }
        sender('users.get', 'v=5.25&fields=photo_50&user_ids='+uid_user.join(","), function(data) {
         for(var s=0;s<data['response'].length;s++){
          var photo_url = (data['response'][s]['photo_50'] == '/images/camera_c.gif') ? 'http://vk.com/images/camera_c.gif' : data['response'][s]['photo_50'];
          loadImagemes(photo_url, data['response'][s]['id'], function(id, d) {
            $(".im_log_author_chat_thumb > #id_" + id).attr("src", d);
          })
          $(".im_log_author_chat_name[uid='"+data['response'][s]['id']+"']").html(data['response'][s]['first_name']);
          $("#messages").scrollTop($("#messages").prop('scrollHeight'));
         }
        })
        $("#messages").scrollTop($("#messages").prop('scrollHeight'));
      })
    }
messages_open(user_id[1]);

  function send_messages(uid, messages) {
    if (uid.substr(0, 5) == 'chat_') {
      var c_id = 'chat_id=' + uid.substring(5);
    } else {
      var c_id = 'user_id=' + uid;
    }
    sender('messages.send', c_id + '&message=' + encodeURI(messages), function(data) {
      $(".send_messages").html("");
      $("#messages > table").html('');
      messages_open(user_id[1]);
    })
  }
  $(".send_messages").keydown(function(event) {
    if (event.keyCode == 13) {
      if ($(".send_messages").html() != '') {
        var str = $(".send_messages").html();
        var result = '';
        result += str.replace(/<img src=\"images\/smile\/(.+?).png\">/g, function(q, w) {
          return ' ' + smile[smile_code.indexOf(w)] + ' ';
        });
        result = result.replace(/<\/?[^>]+>/g,'');
        send_messages(user_id[1], result);
      }
    }
  });

  function update_new() {
    sender('execute.new_messages', '', function (data) {
      if (data['response'] != 0 && data['response']) {
        if (data['response'].length > 0) {
          for (var i = 0; i < data['response'].length; i++) {
            if (data['response'][i]['user_id'] == $("#uid_user").val() && data['response'][i]['id'] != $("#messages > table > tbody > tr").last().attr('id_messages')) {
              $("#messages > table").html('');
              messages_open($("#uid_user").val());
            }
          }
        }
      }
    })
     setTimeout(update_new, 3000);
  }
update_new();

  $('body').on('mouseover', '.send_messages', function(e) {
    if ($(".send_messages").html() == 'Введите текст сообщения и нажмите Enter для отправки.') {
      $(".send_messages").css("color", '#000').html('');
    }
  });

  $('body').on('mouseout', '.send_messages', function(e) {
    if ($(".send_messages").html() == '') {
      $(".send_messages").css("color", 'rgb(168,168,168)').html('Введите текст сообщения и нажмите Enter для отправки.');
    }
  });
});
