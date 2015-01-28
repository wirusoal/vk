$(document).ready(function() {
//google-analytics
var service, tracker, out;
var service = analytics.getService('vkinviz');
var tracker = service.getTracker('UA-27455921-6');
tracker.sendAppView('MainView');
//Событие, Действие по событию, Ярлык события
//tracker.sendEvent('Flavor', 'Choose', 'Chocolate');
//google-analytics

$('body').on('click', "#cache", function(){
  if($("#cache").prop("checked") == true){
     chrome.storage.local.set({ 'cache': '1' }, function () {});
  }else if($("#cache").prop("checked") == false){
     chrome.storage.local.set({ 'cache': '0' }, function () {});
  }
})

$('body').on('click', "#start_stena", function(){
  if($("#start_stena").prop("checked") == true){
     chrome.storage.local.set({ 'start_stena': '1' }, function () {});
  }else if($("#start_stena").prop("checked") == false){
     chrome.storage.local.set({ 'start_stena': '0' }, function () {});
  }
})
  function pasteHtmlAtCaret(html) {
    var sel, range;
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents();
        var el = document.createElement("div");
        el.innerHTML = html;
        var frag = document.createDocumentFragment(),
          node, lastNode;
        while ((node = el.firstChild)) {
          lastNode = frag.appendChild(node);
        }
        range.insertNode(frag);

        if (lastNode) {
          range = range.cloneRange();
          range.setStartAfter(lastNode);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    } else if (document.selection && document.selection.type != "Control") {
      document.selection.createRange().pasteHTML(html);
    }
  }
  var smile = [':-)', ':-D', ';-)', 'xD', ';-P', ':-p', '8-)', 'B-)', ':-(', ';-]', '3(', ':\'(', ':_(', ':((', ':o', ':|', '3-)', '>(', '>((', 'O:)', ';o', '8|', '8o', ':X', ':-*', '}:)'];
  var smile_code = ["D83DDE0A","D83DDE03","D83DDE09","D83DDE06","D83DDE1C","D83DDE0B","D83DDE0D","D83DDE0E","D83DDE12","D83DDE0F","D83DDE14","D83DDE22","D83DDE2D","D83DDE29","D83DDE28","D83DDE10","D83DDE0C","D83DDE20","D83DDE21","D83DDE07","D83DDE30","D83DDE32","D83DDE33","D83DDE37","D83DDE1A","D83DDE08","2764","D83DDC4D","D83DDC4E","261D","270C","D83DDC4C","26BD","26C5","D83CDF1F","D83CDF4C","D83CDF7A","D83CDF7B","D83CDF39","D83CDF45","D83CDF52","D83CDF81","D83CDF82","D83CDF84","D83CDFC1","D83CDFC6","D83DDC0E","D83DDC0F","D83DDC1C","D83DDC2B","D83DDC2E","D83DDC03","D83DDC3B","D83DDC3C","D83DDC05","D83DDC13","D83DDC18","D83DDC94","D83DDCAD","D83DDC36","D83DDC31","D83DDC37","D83DDC11","23F3","26BE","26C4","2600","D83CDF3A","D83CDF3B","D83CDF3C","D83CDF3D","D83CDF4A","D83CDF4B","D83CDF4D","D83CDF4E","D83CDF4F","D83CDF6D","D83CDF37","D83CDF38","D83CDF46","D83CDF49","D83CDF50","D83CDF51","D83CDF53","D83CDF54","D83CDF55","D83CDF56","D83CDF57","D83CDF69","D83CDF83","D83CDFAA","D83CDFB1","D83CDFB2","D83CDFB7","D83CDFB8","D83CDFBE","D83CDFC0","D83CDFE6","D83DDC00","D83DDC0C","D83DDC1B","D83DDC1D","D83DDC1F","D83DDC2A","D83DDC2C","D83DDC2D","D83DDC3A","D83DDC3D","D83DDC2F","D83DDC5C","D83DDC7B","D83DDC14","D83DDC23","D83DDC24","D83DDC40","D83DDC42","D83DDC43","D83DDC46","D83DDC47","D83DDC48","D83DDC51","D83DDC60","D83DDCA1","D83DDCA3","D83DDCAA","D83DDCAC","D83DDD14","D83DDD25"];
  var monthName = { '01':"января", '02':"февраля", '03':"марта", '04':"апреля", '05':"мая", '06':"июня", '07':"июля", '08':"августа", '09':"сентября", '10':"октября", '11':"ноября", '12':"декабря"};
  function time(time) {
    var min = (Math.ceil(time / 60) < 10) ? '0' + Math.ceil(time / 60) : Math.ceil(time / 60);
    var sec = (time % 60 < 10) ? '0' + time % 60 : time % 60;
    return min + ":" + sec;
  }

  function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  function formatDate(date,p) {
    var diff = new Date() - date;
    var d = date;
    d = ['0' + d.getDate(), '0' + (d.getMonth() + 1), '' + d.getFullYear(), '0' + d.getHours(), '0' + d.getMinutes()];
    for (var i = 0; i < d.length; i++) {
      d[i] = d[i].slice(-2);
    }
     var new_date = new Date();
    if(p == 1){
    if (new_date.getDate() == date.getDate()) {
      return d.slice(3).join(':');
    } else if (new_date.getDate() - 1 == date.getDate()) {
      return 'вчера';
    } else {
      return d[0]+' '+monthName[d[1]];
    }
    }else{
    if (diff < 1000) {
      return 'только что';
    }
    var sec = Math.floor(diff / 1000);
    if (sec < 60) {
      return sec + ' сек. назад';
    }
    var min = Math.floor(diff / 60000);
    if (min < 60) {
      return min + ' мин. назад';
    }
    if (new_date.getDate() == date.getDate()) {
      return 'сегодня в ' + d.slice(3).join(':');
    } else if (new_date.getDate() - 1 == date.getDate()) {
      return 'вчера в ' + d.slice(3).join(':');
    } else {
      return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
    }
    }
  }

  function obj(obj) {
      var s = "";
      for (prop in obj) {
        if (typeof obj[prop] != "function") {
          s += "obj[" + prop + "] = " + obj[prop] + "; ";
        }
      }
      return s;
    }
    //image load
  var loadImage = function(uri, callback) {
    $.ajax({
      url: uri,
      async: true,
      dataType: "blob",
      beforeSend: function() {
      },
      success: function(data, textStatus) {
        callback(window.webkitURL.createObjectURL(data));
      }
    })
  }

  var sender = function(METHOD, PARAMETERS, callback) {
    chrome.storage.local.get('vkAccessToken', function(result) {
      aja()
      .url('https://api.vk.com/method/' + METHOD + '?' + PARAMETERS + '&access_token=' + result.vkAccessToken)
      .type('json')
      .on('200', function(data){ callback(data); })
      .on('40*', function(response){ console.error("Что-то не так с запросом."); })
      .on('500', function(response){ console.error("Ошибка на стороне сервера."); })
      .go()
    })
  }
  var offsett = 0;

  var get_messages = function(w) {
      //count_messages = count_messages+10;
      sender('execute.messages_get', 'offset=' + offsett, function(data) {
        if (data['response']) {
          for (var i = 0; i < data['response'].length; i++) {
            if (data['response'][i]['body'] != null) {
              var dialogs_row = (data['response'][i]['read_state'] == 0 && data['response'][i]['out'] == 0) ? 'dialogs_row dialogs_new_msgs' : 'dialogs_row';
              if (data['response'][i]['chat_id'] == 0) {
                var messages = '<div class="' + dialogs_row + '" uid="' + data['response'][i]['id'] + '">';
              } else {
                var messages = '<div class="' + dialogs_row + '"  uid="chat_' + data['response'][i]['chat_id'] + '">';
              }
              //messages = messages + '<div class="open_dialog_window" uid="' + data['response'][i]['id'] + '"><img title="Открыть диалог в новом окне" src="images/open_new_window.png"></div>';
               messages = messages + '<div class="delete_dialog" uid="' + data['response'][i]['id'] + '"><img title="Удалить диалог с пользователем" src="images/delete.png"></div>';
              messages = messages + '<table cellpadding="0" cellspacing="0" class="dialogs_row_t">';
              messages = messages + '<tbody><tr>';
              if (data['response'][i]['chat_id'] == 0) {
                messages = messages + '<td class="dialogs_photo" uid="' + data['response'][i]['id'] + '">';
                  if (data['response'][i]['online'] == 1) {
                    if (data['response'][i]['online_mobile'] == 1) {
                      messages = messages + '<div class="dialogs_online" style="background-color:#cc0043">';
                    }else{ 
                      messages = messages + '<div class="dialogs_online" style="background-color:#00cc35">';
                    }
                  } else {
                      messages = messages + '<div class="dialogs_online" style="background-color:#aeaeae">';
                  }
                  messages = messages + '</div>';

                if (data['response'][i]['id'] == '67221342') {
                  messages = messages + ' <img src="vk-128.png" width="50" height="50">';
                  messages = messages + '</td>';
                  messages = messages + '<td class="dialogs_info">';
                  messages = messages + '<div class="dialogs_user wrapped" uid="0">Техподдержка</div>';
                } else {
                  messages = messages + ' <img id="id_' + data['response'][i]['id'] + '" src="images/image_loader.gif" width="50" height="50">';
                  loa(data['response'][i]['photo'], data['response'][i]['id'], function(id, d) {
                    $("#id_" + id).attr("src", d);
                  })
                  messages = messages + '</td>';
                  messages = messages + '<td class="dialogs_info">';
                  messages = messages + '<div class="dialogs_user wrapped" uid="' + data['response'][i]['id'] + '">' + data['response'][i]['name'] + '</div>';
                  messages = messages + '<div class="dialogs_date">⌚ ' + formatDate(new Date(data['response'][i]['date'] * 1000),1) + '</div>';
                }
              } else {
                messages = messages + '<td class="dialogs_photo">';
                messages = messages + ' <img src="images/chat.png" width="50" height="50">';
                messages = messages + '</td>';
                messages = messages + '<td class="dialogs_info">';
                if (data['response'][i]['title'].length > 14) {
                  var c_title = data['response'][i]['title'].substr(0, 14) + "...";
                } else {
                  var c_title = data['response'][i]['title'];
                }
                messages = messages + '<div class="dialogs_user wrapped">' + c_title + '</div>';
              }
              messages = messages + '<div class="dialogs_msg_body">';
              if (data['response'][i]['body'].length > 35) {
                var c_body = data['response'][i]['body'].substr(0, 35) + "...";
              } else {
                var c_body = data['response'][i]['body'];
              }
              if (data['response'][i]['emoji'] == 1) {
                messages = messages + '<div class="im_msg_text">' + emoji(c_body, true) + '<img id="nabor" src="images/typing.gif">';
              } else if (data['response'][i]['emoji'] == 0) {
                messages = messages + '<div class="im_msg_text">' + c_body + '<img id="nabor" src="images/typing.gif">';
              }
              messages = messages + '</div>';
              messages = messages + '</div>';
              messages = messages + '</td>';
              messages = messages + '</tr>';
              messages = messages + '</tbody></table>';
              messages = messages + '</div>';
              $("#content > #messages_form").append(messages);
            }
          }
        }
       if(w == 1){ 
        messages_open(data['response'][0]['id'].toString());
        $("#uid_user").val(data['response'][0]['id'].toString());
        $("#news").hide();
        $("#wall").hide();
        $("#messages > #table").html('');
        $('#messages').show();
        $('#send_messages').show();
        if (open_video == 1) { $(".button_video").click(); }
        if (button_group == 1) { $(".button_group").click(); }
      }
      })
emoji_load();
    }
  //get messages
  $("#content > #messages_form").scroll(function() {
      var scrolltop = $("#content > #messages_form").prop('scrollTop');
      var scrollheight = $("#content > #messages_form").prop('scrollHeight');
      var windowheight = $("#content > #messages_form").prop('clientHeight');
      var scrolloffset = 20;
      if (scrolltop >= (scrollheight - (windowheight + scrolloffset))) {
        offsett = offsett + 15;
        get_messages();
      }
    })
  //наведение на сообщение
  $('#messages_form').on('mouseover', 'div.dialogs_row', function(e) {
    $(this).addClass("dialogs_row_over");
    $(this).find(".delete_dialog").show();
    $(this).find(".open_dialog_window").show();
  });
  //Убираем мышку с сообщения
  $('#messages_form').on('mouseout', 'div.dialogs_row', function(e) {
    $(this).removeClass("dialogs_row_over");
    $(this).find(".delete_dialog").hide();
    $(this).find(".open_dialog_window").hide();
  });

  $('#messages_form').on('click', '.delete_dialog', function(e) {
    alertify.set({ labels: {
    ok     : "Удалить",
    cancel : "Отменить"
    } });
    var uid = $(this).attr("uid");
alertify.confirm("Удалить сообщения с этим пользователем?", function (e) {
    if (e) {
      $("#content > #messages_form > .dialogs_row[uid='"+uid+"']").remove();
      sender('messages.deleteDialog','user_id='+uid,function(data){
          if(data['response'] == 1){
          $(".messages_open_v2").click();
          alertify.success('Диалог с пользователем удален. ');
        }
      })
    }
});
  });
  //--------------------------------------------------
  //--------------------------------------------------
  //наведение на друзей_меню
  var friend_get_offset = 0;
  var rara = 0;

  function friend_get_all() {
    if (rara == 0) {
      var gets = 'friends.get';
    } else if (rara == 1) {
      var gets = 'execute.friend_onlline';
    }
    sender(gets, 'order=hints&count=20&fields=online,last_seen,photo_50,sex,has_mobile&offset=' + friend_get_offset, function(data) {

      if (data['response'].length != 0) {
        for (var i = 0; i < data['response'].length; i++) {
          //console.debug(obj(data['response'][i]));
          var user_id = (rara == 0) ? data['response'][i]['user_id'] : data['response'][i]['uid'];
          if (data['response'][i]['first_name'] != '' && user_id != $('.avatar_img').attr('uid')) {
            var friend = '';
            var name_user = data['response'][i]['first_name'] + ' ' + data['response'][i]['last_name'];
            if (data['response'][i]['deactivated'] == 'deleted') {
              var sex = (data['response'][i]['sex'] == 2) ? 'Удален' : 'Удалена';
              var time = sex;
            } else {
              var sex = (data['response'][i]['sex'] == 2) ? 'Был' : 'Была';
              if (data['response'][i]['online'] == 1) {
                if (data['response'][i]['online_mobile'] == 1) {
                  var time = 'Онлайн <b class="mob_onl profile_mob_onl" style="position: absolute;"></b>';
                } else {
                  var time = 'Онлайн';
                }
              } else if (data['response'][i]['online'] == 0) {
                var time = sex + ' ' + formatDate(new Date(data['response'][i]['last_seen']['time'] * 1000));
              }
            }
            friend = friend + "<div id='user_block' uid='" + user_id + "'>";
            friend = friend + "<div class='user_block_avatar' uid='" + user_id + "'><img width='50px' id='user_block_avatar_" + user_id + "' src='images/image_loader.gif'></div>";
            loa(data['response'][i]['photo_50'], user_id, function(id, d) {
              $("#user_block_avatar_" + id).attr("src", d);
            })
            friend = friend + "<div id='user_block_name' uid='" + user_id + "'>" + name_user + "</div>";
            friend = friend + "<div id='user_block_time'>" + time + "</div>";
            friend = friend + "<div id='user_block_messages' uid='" + user_id + "'><img width='20px' src='images/message-xxl.png'></div>";
            friend = friend + "</div>";
            $("#dialog.friend > .dialog_content").append(friend);
          }
        }
      }
    })
  }

  $('#dialog.friend').on('click', '#button_all_friend', function(e) {
    rara = 0;
    scroll = 460;
    $("#dialog.friend > .dialog_content").html('');
    friend_get_offset = 0;
    friend_get_all();
  })

  $('#dialog.friend').on('click', '#button_all_friend_onlline', function(e) {
    rara = 1;
    scroll = 460;
    $("#dialog.friend > .dialog_content").html('');
    friend_get_offset = 0;
    friend_get_all();
  })

  $('body').on('click', '.my_friend', function(e) {
     friend_get_offset = 0;
     friend_get_all();
    $("#dialog.friend").find(".dialog_content").html('');
    $("#dialog.friend").toggle();
    $("#display").show();
  })

  $('body').on('click', '#user_block_messages', function(e) {
    $("#news").hide();
    $("#wall").hide();
    $("#messages > #table").html('');
    $('#messages').show();
    $('#send_messages').show();
    if (open_video == 1) {
      $(".button_video").click();
    }
    if (button_group == 1) {
      $(".button_group").click();
    }
    messages_open($(this).attr('uid'));
    $("#uid_user").val($(this).attr('uid'));
  })

  $("#dialog.friend > .dialog_content").scroll(function() {
      var scrolltopi = $('#dialog.friend > .dialog_content').prop('scrollTop');
      var scrollheighti = $('#dialog.friend > .dialog_content').prop('scrollHeight');
      var windowheighti = $('#dialog.friend > .dialog_content').prop('clientHeight');
      var scrolloffseti = 20;
      if (scrolltopi >= (scrollheighti - (windowheighti + scrolloffseti))) {
        friend_get_offset = friend_get_offset + 20;
        friend_get_all();
      }
    })
    //--------------------------------------------------
    //--------------------------------------------------
  function emoji_load(){
      $("img[alte][alte!='']").each(function() {
        loa('http://vk.com/images/emoji/' + $(this).attr('alte') + '.png', $(this).attr('alte'), function(charCode, d) {
          $("img[alte='" + charCode + "']").attr("src", d);
        })
      });
  }

  function codeToChr(code) {
  var len = code.length / 4;
  var chr = '';
  var i = 0;
  while(len--) {
    chr += String.fromCharCode(parseInt(code.substr(i, 4), 16))
    i += 4;
  }
  return chr;
}
    //--------------------------------------------------
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
            messages = messages + '<div class="im_msg_text">' + emoji(mess, true);
            messages += "<div class='lala'>";
            //Проверяем есть ли прикрепления
            if (data[i]['attachments'] != null) {
              for (var q = 0; q < data[i]['attachments'].length; q++) {
                if (data[i]['attachments'][q]['type'] == 'photo') {
                  messages = messages + "<div style='height:75px;padding-left: 2px;' id='mes_photo_href' data-lightbox='photo_messages' t='a_" + data[i]['attachments'][q]['photo']['id'] + "' href=''><img height='75px' src='images/image_loader.gif' id='mes_photo_img' t='i_" + data[i]['attachments'][q]['photo']['id'] + "'></div>";
                  loa(data[i]['attachments'][q]['photo']['photo_604'], 't_'+data[i]['attachments'][q]['photo']['id'], function(id, d) {
                    $("#mes_photo_href[t='" + id + "']").attr("href", d);
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
            var news = $("#messages > #table").html();
            $("#messages > #table").html('');
            var messages = "<div id='id_messagesss' id_messages='" + data['response']['items'][i]['id'] + "' style='"+((data['response']['items'][i]['read_state'] == 0)? 'background: rgba(238, 238, 238, 1);':'')+"'>";
           if(data['response']['items'][i]['out'] == 1){
              messages = messages + '<div class="im_log_author" style="float: left;margin-right: 16px;"><div class="im_log_author_chat_thumb"><img id="id_' + data['response']['items'][i]['from_id'] + '" src="images/image_loader.gif" class="im_log_author_chat_thumb" width="32" height="32"></div></div>';
            } 
              messages = messages + '<div class="im_log_body" style="'+((data['response']['items'][i]['out'] == 0)? 'float: right;margin-right: 55px;':'float:left;')+'"><div class="wrapped">';
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
                        messages = messages + '<div class="im_log_date" style="'+((data['response']['items'][i]['out'] == 0)? 'right: 32px;':'')+'" uptime="'+data['response']['items'][i]['date']+'">' + formatDate(new Date(data['response']['items'][i]['date'] * 1000)) + '</div>';
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
            messages = messages + "</div></div></div>";
            if(data['response']['items'][i]['out'] == 0){
            messages = messages + '<div class="im_log_author" style="float: right;margin-right: 3px;right:0px;position:absolute;"><div class="im_log_author_chat_thumb"><img id="id_' + data['response']['items'][i]['from_id'] + '" src="images/image_loader.gif" class="im_log_author_chat_thumb" width="32" height="32"></div></div>';
            }
            $("#messages > #table").append(messages);
            $("#messages > #table").append(news);
            $("#messages").scrollTop($("#messages").prop('scrollHeight'));
          }
        }
        sender('users.get', 'v=5.25&fields=photo_50&user_ids='+uid_user.join(","), function(data) {
         for(var s=0;s<data['response'].length;s++){
          var photo_url = (data['response'][s]['photo_50'] == '/images/camera_c.gif') ? 'http://vk.com/images/camera_c.gif' : data['response'][s]['photo_50'];
          loa(photo_url, data['response'][s]['id'], function(id, d) {
            $(".im_log_author_chat_thumb > #id_" + id).attr("src", d);
          })
          $(".im_log_author_chat_name[uid='"+data['response'][s]['id']+"']").html(data['response'][s]['first_name']);
          $("#messages").scrollTop($("#messages").prop('scrollHeight'));
         }
        })
        $("#messages").scrollTop($("#messages").prop('scrollHeight'));
      })
emoji_load();
    }
    //нажатие на сообщение
  $('#messages_form').on('click', 'div.dialogs_row', function(e) {
    $("#news").hide();
    $("#wall").hide();
    if (open_video == 1) { $(".button_video").click(); }
    if (button_group == 1) { $(".button_group").click(); }
    $("#messages > #table").html('');
    $('#messages').show();
    $('#send_messages').show();
    messages_open($(this).attr('uid'));
    $("#uid_user").val($(this).attr('uid'));
  });
  //Отправка сообщений
  function send_messages(uid, messages) {
    if (uid.substr(0, 5) == 'chat_') {
      var c_id = 'chat_id=' + uid.substring(5);
    } else {
      var c_id = 'user_id=' + uid;
    }
    sender('messages.send', c_id + '&message=' + messages, function(data) {
      $("#text_messages").html("");
    })
  }

  function sending(){
    if ($("#text_messages").html() != '') {
      var str = $("#text_messages").html();
      var result = '';
      result += str.replace(/<img src="blob:chrome-extension%3A\/\/[\w\/-]*" al="(.*)">/g, function(q, w) {
        return ' ' + codeToChr(w) + ' ';
      });
      result = result.replace(/<div>/g,'%0a');
      result = result.replace(/<\/?[^>]+>/g,'');
      send_messages($("#uid_user").val(), result);
    }
  }
   
  $("#send_messages").keydown(function(event) {
    chrome.storage.local.get('key_send', function (result) {
      if (result.key_send == '' || result.key_send == undefined || result.key_send == 1){
        if (event.keyCode == 13) {
          sending();
        }
      }else if(result.key_send == 2){
        if (event.ctrlKey && event.keyCode == 13) {
          sending();
        }
      }
    })
  });

  var song = document.getElementById('beep');
    //Проверка на новые сообщения....
    //...............................
    //Открыть диалоги
  $('#menu').on('click', '.messages_open_v2', function() {
    $("#news").hide();
    $("#wall").hide();
    $('#messages_form').show();
    $('#messages').hide();
    $('#send_messages').hide();
    $("#uid_user").val('');
    $("#content > #messages_form").html('');
    if (open_video != 0) {
      $('.button_video').click();
    }
    if (button_group != 0) {
      $('.button_group').click();
    }
    offsett = 0;
    get_messages(1);
  })
  $('#send_messages').on('click', '#text_messages', function() {
      sender('messages.markAsRead', 'user_id=' + $("#uid_user").val() + '&message_ids=' + $("#messages > #table > div").last().attr('id_messages'), function(data) {})
    })
    //Плеер...................................
    //........................................

  function player_load(offset) {
    if ($('.search_input_music').val().length < 2) {
      var method = 'audio.get';
    } else if ($('.search_input_music').val().length > 2) {
      var method = 'audio.search';
      offset = offset + '&q=' + $('.search_input_music').val();
    }
    sender(method, 'count=40&v=5.16&offset=' + offset, function(data) {
      //console.info(data);
      for (var i = 0; i < data['response']['items'].length; i++) {
        var text = '';
        var title = (data['response']['items'][i]['title'].length > 20) ? data['response']['items'][i]['title'].slice(0, 20) : data['response']['items'][i]['title'];
        var artist = (data['response']['items'][i]['artist'].length > 40) ? data['response']['items'][i]['artist'].slice(0, 20) : data['response']['items'][i]['artist'];
        text += '<div id="track" mus="player" duration="' + data['response']['items'][i]['duration'] + '" uid="' + data['response']['items'][i]['id'] + '" url="' + data['response']['items'][i]['url'] + '"><div class="track_play"></div><div class="track_title">' + artist + ' - ' + title + '</div>'
        if ($('.search_input_music').val().length < 2) {
          text += '<div id="' + data['response']['items'][i]['id'] + '" owner_id="' + data['response']['items'][i]['owner_id'] + '" class="track_delete">удалить</div>';
          text += '<div class="track_download"><a href="' + data['response']['items'][i]['url'] + '" download>скачать\/</a></div>';
        } else if ($('.search_input_music').val().length > 2) {
          text += '<div id="' + data['response']['items'][i]['id'] + '" owner_id="' + data['response']['items'][i]['owner_id'] + '" class="track_add" style="cursor: copy;right: 2px;">добавить</div>';
          text += '<div class="track_download"><a href="' + data['response']['items'][i]['url'] + '" download>скачать\/</a></div>';
        }
        text += '</div>';
        $(".audio .dialog_content").append(text);
      }
    });
  }

  var open_video = 0;
  $('#header').on('click', '.header_audio', function() {
      $(".audio").toggle();
      if($(".audio > .dialog_content > #track").index() == -1){
        player_load(0);
      }
      $("#display").show();
  })

  $('.audio > .dialog_content').on('mouseover', '#track', function(e) {
    $(this).find(".track_add").show();
    $(this).find(".track_download").show();
    $(this).find(".track_delete").show();
  });

  $('.audio > .dialog_content').on('mouseout', '#track', function(e) {
    $(this).find(".track_add").hide();
    $(this).find(".track_download").hide();
    $(this).find(".track_delete").hide();
  });

  $('.audio > .dialog_content').on('click', '.track_add', function() {
    sender('audio.add', 'audio_id=' + $(this).attr('id') + '&owner_id=' + $(this).attr('owner_id'), function(data) {
      if (data['response'] > 0) {
        alertify.success("Трек добавлен в Ваши аудиозаписи.");
      } else {
        alertify.error("Произошла ошибка при добавлении трека");
      }
    })
  })

  $('.audio > .dialog_content').on('click', '.track_delete', function() {
    $("#histori").val($(this).attr('id'));
    sender('audio.delete', 'audio_id=' + $(this).attr('id') + '&owner_id=' + $(this).attr('owner_id'), function(data) {
      if (data['response'] == 1) {
        $("#track[uid='" + $("#histori").val() + "']").remove();
        $(".track_plays").click();
      } else {
        alertify.error("Произошла ошибка при удалении трека");
      }
    })
  })

  function play_music(id, url, duration) {
    $("#player_player").attr("src", url);
    $("#player_player")[0].play();
    $(".track_plays").css('background-image', 'url("images/track_stop.png")');
    $(".name_music").html($("#track[uid='" + id + "'] > .track_title").html().slice(0, 50).toLowerCase());
    $(".time_music").html(time(duration));
  }

  $('body').on('click', '#track', function() {
  	   var mus = $(this).attr("mus");
       var index = $(this).index();
    if ($(".track_play:eq(" + index + ")").css('background-image').indexOf("images/pausa_mini.png") > 0) {
      $(".track_play:eq(" + index + ")").css('background-image', 'url("images/play_mini.png")');
      //$("#music_list > #track:eq("+$(this).index()+")").removeAttr('play');
      $(".track_plays").css('background-image', 'url("images/track_play.png")');
      $("#player_player")[0].pause();
    } else {
      $(".audio > .dialog_content").find(".track_play").css('background-image', 'url("images/play_mini.png")');
      $(".track_play:eq(" + index + ")").css('background-image', 'url("images/pausa_mini.png")');
      $(".audio > .dialog_content > #track").removeAttr('play');
      $(".audio > .dialog_content > #track:eq(" + index + ")").attr('play', 'on');
      play_music($(this).attr('uid'), $(this).attr('url'), $(this).attr('duration'));
    }
  })

  $('#button_player').on('click', '.track_w', function() {
  	var mus = $('.audio > .dialog_content > #track[play="on"]').attr("mus");
    var next = $('.audio > .dialog_content > #track[play="on"][mus="'+mus+'"]').index();
    if ($('.audio > .dialog_content > #track[mus="'+mus+'"]').length - 1 > next) {
      next = next * 1 + 1;
      $(".audio > .dialog_content > #track[mus='"+mus+"']:eq('" + next + "')").click();
    } else if ($('.audio > .dialog_content > #track[mus="'+mus+'"]').length - 1 == next) {
      // $("#music_list > #track:eq('0')").click();
      var all = $('.audio > .dialog_content > #track[mus="'+mus+'"]').length;
      player_load(all);
      next = next * 1 + 1;
      $(".audio > .dialog_content > #track[mus='"+mus+"']:eq('" + next + "')").click();
    }

  })

  $('#button_player').on('click', '.track_n', function() {
  	var mus = $('.audio > .dialog_content > #track[play="on"]').attr("mus");
    var next = $('.audio > .dialog_content > #track[play="on"][mus="'+mus+'"]').index();
    if (next == 0) {
      var all = $(".audio > .dialog_content > #track[mus='"+mus+"']").length * 1 - 1;
      $(".audio > .dialog_content > #track[mus='"+mus+"']:eq('" + all + "')").click();
    } else {
      next = next - 1;
      $(".audio > .dialog_content > #track[mus='"+mus+"']:eq('" + next + "')").click();
    }
  })

  $('#button_player').on('click', '.track_plays', function() {
    if ($(".track_plays").css('background-image').indexOf("images/track_play.png") > 0) {
      $("#player_player")[0].play();
      $(".audio > .dialog_content > #track:eq('" + $(".audio > .dialog_content > #track[play='on']").index() + "') .track_play").css('background-image', 'url("images/pausa_mini.png")');;
      $(".track_plays").css('background-image', 'url("images/track_stop.png")');
    } else {
      $("#player_player")[0].pause();
      $(".audio > .dialog_content > #track:eq('" + $(".audio > .dialog_content > #track[play='on']").index() + "') .track_play").css('background-image', 'url("images/play_mini.png")');;
      $(".track_plays").css('background-image', 'url("images/track_play.png")');
    }
  })

var repeat = false;
  $('#button_player').on('click', '.repeat', function() {
   if(repeat){
    $(".repeat").css('background-image','url("images/repeat.png")');
    $("#player_player").removeAttr('loop');
   	repeat = false;
   }else{
    $(".repeat").css('background-image','url("images/repeat_on.png")');
    $("#player_player").attr('loop');
   	repeat = true;
   }
  })

  $("#player_player").bind('ended', function() {
  	if(repeat){
  	 this.currentTime = 0;
  	 this.play();
    }else{
     $(".track_w").click();
    }
  });
 
  $("#player_player").bind('timeupdate', function() {
    var time_track = $(".audio > .dialog_content > #track[play='on']").attr("duration");
    var times = this.currentTime;
    var new_time = (time_track / times) * 100;

    var polosa = ($("#scroka_time_music").width() / new_time) * 100;
    $(".scroka_time_music").width(polosa + "px");
  });

  $('#player').on('click', '#scroka_time_music', function(e) {
    var time_track = $(".audio > .dialog_content > #track[play='on']").attr("duration");
    var s = e.pageX - 144;
    var click = ($("#scroka_time_music").width() / s) * 100;
    var new_time = (time_track / click) * 100;
    $("#player_player")[0].currentTime = Math.ceil(new_time);
  })

  $(".search_input_music").keydown(function(event) {
    if (event.keyCode == 13) {
      if ($("#search_input_music").val() != '') {
        $(".audio > .dialog_content").html("");
        player_load(0);
      }
    }
  });

  $(".audio > .dialog_content").scroll(function() {
    var scrolltopi = $('.audio > .dialog_content').prop('scrollTop');
    var scrollheighti = $('.audio > .dialog_content').prop('scrollHeight');
    var windowheighti = $('.audio > .dialog_content').prop('clientHeight');
    var scrolloffseti = 20;
    if (scrolltopi >= (scrollheighti - (windowheighti + scrolloffseti))) {
      var all = $(".audio > .dialog_content > #track").length;
      player_load(all);
    }
  })

  $('body').on('click', '.audio_messages', function() {
    $("#contente").css('bottom', '50px');
    $("#player").show();
  })

  var slider = $('#slider');
  slider.slider({
    //Конфигурация
    range: "min",
    min: 0,
    max: 100,
    value: 100,

    start: function(event, ui) {},

    //Событие слайдреа
    slide: function(event, ui) { //При пермещении слайдера
      var value = slider.slider('value');
      $("#player_player")[0].volume = value / 100;

    },

    stop: function(event, ui) {},
  });
    //video
  $('#menu').on('click', '.button_video', function() {
    $("#news").hide();
    if (open_video == 0) {
      $('.search_input_video').val("");
      $(".search_video_list").html("");
      $("#search_video").show();
      if (button_group == 1) {
        $('.button_group').click();
      };
      $("#wall").hide();
      open_video = open_video + 1;
    } else {
      $("#search_video").hide();
      open_video = open_video - 1;
    }
  })
  var video_offset = 0;

  function search_video() {
    if ($('.search_input_video').val().length > 1) {
      var filters = ($(".video_filters").prop("checked")) ? 'long' : 'short';
      sender('video.search', 'count=20&filters=' + filters + '&q=' + $('.search_input_video').val() + '&offset=' + video_offset, function(data) {
        var text = '';
        for (var i = 0; i < data['response'].length; i++) {
          var title = (data['response'][i]['title'].length > 30) ? data['response'][i]['title'].slice(0, 30) + "..." : data['response'][i]['title'];
          text = text + '<div class="video_row_cont" player="' + data['response'][i]['player'] + '"><div class="video_row_inner_cont">';
          if (data['response'][i]['duration'] > 60) {
            var second = ((data['response'][i]['duration'] % 60) > 9) ? data['response'][i]['duration'] % 60 : '0' + data['response'][i]['duration'] % 60;
            var duration = Math.floor(data['response'][i]['duration'] / 60) + ':' + second;
          } else {
            var duration = '00:' + data['response'][i]['duration'];
          }
          text = text + '<div class="video_row_info_line"><div class="video_raw_info_name">' + title + '</div><div class="video_row_duration">' + duration + '</div></div>';
          text = text + '<div class="video_row_info_play"></div>';
          text = text + '<div class="video_image_div" t_video="' + data['response'][i]['id'] + '" style="background-image: url();"></div>';
          loa(data['response'][i]['image_medium'], data['response'][i]['id'], function(id, d) {
            $(".video_image_div[t_video='" + id + "']").css('background-image', 'url(' + d + ')');
          })
          text = text + '</div></div>';
        }
        $(".search_video_list").append(text);
      })
    }
  }
  $('#search_video').on('click', '.search_button_video', function() {
    $(".search_video_list").html("");
    search_video();
  });
  $('.search_input_video').keyup(function(eventObject) {
    if (eventObject.which == 13) {
      $(".search_video_list").html("");
      search_video();
    }
  });
  $(".search_video_list").scroll(function() {
    var scrolltopi = $('.search_video_list').prop('scrollTop');
    var scrollheighti = $('.search_video_list').prop('scrollHeight');
    var windowheighti = $('.search_video_list').prop('clientHeight');
    var scrolloffseti = 20;
    if (scrolltopi >= (scrollheighti - (windowheighti + scrolloffseti))) {
      video_offset = video_offset + 20;
      search_video();
    }
  })
  $('#search_video, #wall').on('click', '.video_row_cont', function() {
    $("#player_player")[0].pause();
    $("#dialog_video").dialog({ minHeight: 200, minWidth: 300 });
    $("#dialog_video").dialog( "option", "title", " " );
    $("#dialog_video").html('<webview style="width: 100%;height: '+($("#dialog_video").height())+'px;" src="' + $(this).attr('player') + '"></webview>');
    $("#dialog_video").dialog({
      close: function( event, ui ) { $(".ui-dialog-content").html(""); },
      resize: function( event, ui ) { $("#dialog_video").find("webview").height($("#dialog_video").height()); }
    });
  });
  //!!video/end

  //group
  var offset_group = 0;

  function open_group() {
    if ($('.search_input_group').val().length < 2) {
      var method = 'groups.get';
      offset_group = offset_group;
    } else if ($('.search_input_group').val().length > 2) {
      var method = 'groups.search';
      offset_group = offset_group + '&q=' + $('.search_input_group').val();
    }
    sender(method, 'count=20&v=5.21&extended=1&offset=' + offset_group, function(data) {
      //console.log(obj(data['response']));
      var text = '';
      for (var i = 0; i < data['response']['items'].length; i++) {
        text = text + '<div uid="-' + data['response']['items'][i]['id'] + '" class="group_list_row">';
        text = text + '<div class="group_row_photo">';
        text = text + '<img id_group="' + data['response']['items'][i]['id'] + '" src="images/image_loader.gif">';
        text = text + '</div>';
        text = text + '<div class="group_row_info">';
        text = text + '<div class="group_row_labeled">' + data['response']['items'][i]['name'] + '</div>';
        var type = (data['response']['items'][i]['type'] == 'page') ? 'Публичная страница' : (data['response']['items'][i]['type'] == 'group') ? 'Группа' : 'Мероприятие';
        text = text + '<div class="group_row_labeled">' + type + '</div>';
        text = text + '</div>';
        text = text + '</div>';
        loa(data['response']['items'][i]['photo_100'], data['response']['items'][i]['id'], function(id, d) {
          $("img[id_group='" + id + "']").attr("src", d);
        })
      }
      $(".group_list").append(text);
    })
  }

  $('#search_group').on('click', '.search_button_group', function() {
    offset_group = 0;
    $(".group_list").html("");
    open_group();
  })
  $('.search_input_group').keyup(function(eventObject) {
    if (eventObject.which == 13) {
      offset_group = 0;
      $(".group_list").html("");
      open_group();
    }
  });

  $(".group_list").scroll(function() {
    var scrolltopi = $('.group_list').prop('scrollTop');
    var scrollheighti = $('.group_list').prop('scrollHeight');
    var windowheighti = $('.group_list').prop('clientHeight');
    var scrolloffseti = 20;
    if (scrolltopi >= (scrollheighti - (windowheighti + scrolloffseti))) {
      offset_group = offset_group + 20;
      open_group();
    }
  })
  var button_group = 0;
  $('#menu').on('click', '.button_group', function() {
      $("#news").hide();
      if (button_group == 0) {
        $(".group_list").html("");
        $(".search_input_group").val("");
        if (open_video == 1) {
          $(".button_video").click();
        };
        $("#wall").hide();
        open_group();
        $("#search_group").show();
        button_group = button_group + 1;
      } else {
        $("#search_group").hide();
        button_group = button_group - 1;
      }
    })
    //group/end

  //Открытие стены

  function repost_wall(data) {
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
          text += "<div style='height:75px;padding-left: 3px;float: left;' data-lightbox='photo_news' id='mes_photo_href' t='m" + data['attachments'][q]['photo']['id'] + "' href=''><img height='75px' src='images/image_loader.gif' id='mes_photo_img' t='" + data['attachments'][q]['photo']['id'] + "'></div>";
          loa(data['attachments'][q]['photo']['photo_604'], "m"+data['attachments'][q]['photo']['id'], function(id, d) {
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
          sender('video.get', 'v=5.21&videos=' + data['attachments'][q]['video']['owner_id'] + '_' + data['attachments'][q]['video']['id'] + '_' + data['attachments'][q]['video']['access_key'], function(data) {
            $("webview[t='" + data['response']['items'][0]['id'] + "']").attr("src", data['response']['items'][0]['player']);
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

  var offset_wall = 0;

  function read_wall(c) {
    var method = 'wall.get';
    var post = 'count=20&v=5.21&extended=1&offset=' + offset_wall + '&owner_id=' + $("#uid_wall").val()
    sender(method, post, function(data) {
      var text = '';
      for (var i = 0; i < data['response']['items'].length; i++) {
        $("#comment_wall_on").val(data['response']['items'][i]['comments']['can_post']);
        if (data['response']['items'][i]['post_type'] == 'post') {
          text += '<div id="post' + data['response']['items'][i]['from_id'] + '_' + data['response']['items'][i]['id'] + '" class="wall_post_over"><div class="post_table">';

          if (data['response']['items'][i]['from_id'] < 0) {
            text += '<div class="post_image" uid="' + data['response']['items'][i]['from_id'] + '"><img width="50px" height="50px" src="images/image_loader.gif"></div>';
            loa(data['response']['groups'][0]['photo_50'], data['response']['items'][i]['from_id'] + '_' + data['response']['items'][i]['id'], function(id, d) {
              $("div[id='post" + id + "'] > .post_table > .post_image > img").attr("src", d);
            })
            text += '<div class="post_info"><div class="wall_text">';
            text += '<div class="wall_text_name" uid="' + data['response']['items'][i]['from_id'] + '">' + data['response']['groups'][0]['name'] + '</div>';
          } else {
            for (var w = 0; w < data['response']['profiles'].length; w++) {
              if (data['response']['profiles'][w]['id'] == data['response']['items'][i]['from_id']) {
                text += '<div class="post_image" uid="' + data['response']['profiles'][w]['id'] + '"><img width="50px" height="50px" src="images/image_loader.gif"></div>';
                loa(data['response']['profiles'][w]['photo_50'], data['response']['items'][i]['from_id'] + '_' + data['response']['items'][i]['id'], function(id, d) {
                  $("div[id='post" + id + "'] > .post_table > .post_image > img").attr("src", d);
                })
                text += '<div class="post_info">';
                  text += '<div class="delete_post" owner_id="' + data['response']['items'][i]['from_id'] + '" post_id="' + data['response']['items'][i]['id'] + '"></div>';
                text += '<div class="wall_text">';
                text += '<div class="wall_text_name" uid="' + data['response']['profiles'][w]['id'] + '">' + data['response']['profiles'][w]['first_name'] + ' ' + data['response']['profiles'][w]['last_name'] + '</div>';
                break;
              }
            }
          }

          if (data['response']['items'][i]['copy_history'] != null) {
            if (data['response']['items'][i]['copy_history'][0]['owner_id'] < 0) {
              for (var w = 0; w < data['response']['groups'].length; w++) {
                if (data['response']['groups'][w]['id'] == Math.abs(data['response']['items'][i]['copy_history'][0]['owner_id'])) {
                  text += '<table cellpadding="0" cellspacing="0" class="published_by_wrap" uid="' + data['response']['items'][i]['copy_history'][0]['owner_id'] + '">';
                  text += '<tbody><tr>';
                  text += '<td>';
                  text += '<img ids="' + data['response']['items'][i]['copy_history'][0]['owner_id'] + '" src="images/image_loader.gif" width="30" height="30">';
                  loa(data['response']['groups'][w]['photo_50'], data['response']['items'][i]['copy_history'][0]['owner_id'], function(id, d) {
                    $("img[ids='" + id + "']").attr("src", d);
                  })
                  text += '</td>';
                  text += '<td>';
                  text += '<div class="published_by_title">' + data['response']['groups'][w]['name'] + ' </div>';
                  text += '<div class="published_by_date sm">' + formatDate(new Date(data['response']['items'][i]['copy_history'][0]['date'] * 1000)) + '</div>';
                  text += '</td>';
                  text += '</tr>';
                  text += '</tbody></table>';
                  break;
                }
              }
            } else {
              //user
              for (var w = 0; w < data['response']['profiles'].length; w++) {
                if (data['response']['profiles'][w]['id'] == data['response']['items'][i]['copy_history'][0]['owner_id']) {
                  text += '<table cellpadding="0" cellspacing="0" class="published_by_wrap" uid="'+data['response']['items'][i]['copy_history'][0]['owner_id']+'">';
                  text += '<tbody><tr>';
                  text += '<td>';
                  text += '<img ids="' + data['response']['items'][i]['copy_history'][0]['owner_id'] + '" src="images/image_loader.gif" width="30" height="30">';
                  loa(data['response']['profiles'][w]['photo_50'], data['response']['items'][i]['copy_history'][0]['owner_id'], function(id, d) {
                    $("img[ids='" + id + "']").attr("src", d);
                  })
                  text += '</td>';
                  text += '<td>';
                  text += '<div class="published_by_title">' + data['response']['profiles'][w]['first_name'] + ' ' + data['response']['profiles'][w]['last_name'] + ' </div>';
                  text += '<div class="published_by_date sm">' + formatDate(new Date(data['response']['items'][i]['copy_history'][0]['date'] * 1000)) + '</div>';
                  text += '</td>';
                  text += '</tr>';
                  text += '</tbody></table>';
                  break;
                }
              }
              //user
            }
            text += repost_wall(data['response']['items'][i]['copy_history'][0]);
          }
          text += '<div>';
          var reg = /(?:^|[\s]+)((http(s)?:\/\/)|(www\.))([^\.]+)\.(?:[^\s,]+)/ig;
          var mess = data['response']['items'][i]['text'].replace(reg, function(s) {
            var str = (/:\/\//.exec(s) === null ? "http://" + s : s);
            return "<a target=\"_blank\" href=\"" + str + "\">" + str /*s*/ + "</a>";
          });

          mess = mess.replace(/\n/ig, '<br>');
          text += '<div class="wall_post_text">' + mess + '</div>';
          text += '<div class="wall_attachments">';
          if (data['response']['items'][i]['attachments'] != null) {
            for (var q = 0; q < data['response']['items'][i]['attachments'].length; q++) {
              if (data['response']['items'][i]['attachments'][q]['type'] == 'photo') {
                text += "<div style='height:75px;padding-left: 3px;float:left;' id='mes_photo_href' data-lightbox='photo_wall' t='k" + data['response']['items'][i]['attachments'][q]['photo']['id'] + "' href=''><img height='75px' src='images/image_loader.gif' id='mes_photo_img' t='" + data['response']['items'][i]['attachments'][q]['photo']['id'] + "'></div>";
                loa(data['response']['items'][i]['attachments'][q]['photo']['photo_604'], "k"+data['response']['items'][i]['attachments'][q]['photo']['id'], function(id, d) {
                  $("#mes_photo_href[t='" + id + "']").attr("href", d);
                })
                loa(data['response']['items'][i]['attachments'][q]['photo']['photo_75'], data['response']['items'][i]['attachments'][q]['photo']['id'], function(id, d) {
                  $("#mes_photo_img[t='" + id + "']").attr("src", d);
                })
              } else if (data['response']['items'][i]['attachments'][q]['type'] == 'link') {
                if (data['response']['items'][i]['attachments'][q]['link']['url'].indexOf('://vk.com/') > -1) {
                  text += '<div class="media_desc"><a target="_blank" class="lnk" href="' + data['response']['items'][i]['attachments'][q]['link']['url'] + '"><b class="fl_l "></b><span class="a">Ссылка может нарушить вашу невидимость -> ' + data['response']['items'][i]['attachments'][q]['link']['title'] + '</span></a></div>';
                } else {
                  text += '<div class="media_desc"><a target="_blank" class="lnk" href="' + data['response']['items'][i]['attachments'][q]['link']['url'] + '"><b class="fl_l "></b><span class="a">' + data['response']['items'][i]['attachments'][q]['link']['title'] + '</span></a></div>';
                }
              } else if (data['response']['items'][i]['attachments'][q]['type'] == 'video') {
                text += '<webview t="' + data['response']['items'][i]['attachments'][q]['video']['id'] + '" style="width: 100%;" src=""></webview>';
                sender('video.get', 'videos=' + data['response']['items'][i]['attachments'][q]['video']['owner_id'] + '_' + data['response']['items'][i]['attachments'][q]['video']['id'] + '_' + data['response']['items'][i]['attachments'][q]['video']['access_key'], function(data) {
                  $("webview[t='" + data['response'][1]['vid'] + "']").attr("src", data['response'][1]['player']);
                })
              } else if (data['response']['items'][i]['attachments'][q]['type'] == 'audio') {
                text += '<div id="track" mus="wall" class="audio_messages" duration="' + data['response']['items'][i]['attachments'][q]['audio']['duration'] + '" uid="' + data['response']['items'][i]['attachments'][q]['audio']['aid'] + '" url="' + data['response']['items'][i]['attachments'][q]['audio']['url'] + '"><div class="track_play"></div><div class="track_title">' + data['response']['items'][i]['attachments'][q]['audio']['artist'] + ' - ' + data['response']['items'][i]['attachments'][q]['audio']['title'] + '</div></div>';
              } else if (data['response']['items'][i]['attachments'][q]['type'] == 'doc') {
                text += "<a target='_blank' href='" + data['response']['items'][i]['attachments'][q]['doc']['url'] + "'>" + data['response']['items'][i]['attachments'][q]['doc']['title'] + "</a> ";
              } else if (data['response']['items'][i]['attachments'][q]['type'] == 'poll') {
                text += '<div id="votes" votes_id="' + data['response']['items'][i]['attachments'][q]['poll']['id'] + '">';
                sender('polls.getById', 'owner_id=' + $("#uid_wall").val() + '&poll_id=' + data['response']['items'][i]['attachments'][q]['poll']['id'], function(data) {
                  var text = '<span id="question">' + data['response']['question'] + '</span>';
                  for (var r = 0; r < data['response']['answers'].length; r++) {
                    text += '<div  style="width:' + (data['response']['answers'][r]['rate'] + 12) + '%;" id_votes="' + data['response']['answers'][r]['id'] + '"><span>' + data['response']['answers'][r]['votes'] + '</span>   ' + data['response']['answers'][r]['text'] + '</div>';
                  }
                  $("#votes[votes_id='" + data['response']['poll_id'] + "']").html(text);
                })
                text += '</div>';
              }
            }
          }
          text += '</div>';
          text += '</div>';
          text += '<div class="reply_link_wrap"><div class="likes">' + data['response']['items'][i]['likes']['count'] + ' лайк' + declOfNum(data['response']['items'][i]['likes']['count'], ['', 'а', 'ов']) + '</div><small style="color:#999">' + formatDate(new Date(data['response']['items'][i]['date'] * 1000)) + '</small>';
          if ($("#uid_wall").val() != $(".avatar_img").attr('uid')) {
            text += '<span class="divide">|</span><small style="color:#999" id="repost_button" wall_id="wall' + data['response']['items'][i]['from_id'] + '_' + data['response']['items'][i]['id'] + '">Отправить себе на стену</small>';
          }
          text += '<div id="comment" post_id="' + data['response']['items'][i]['id'] + '">';
          if (data['response']['items'][i]['comments']['count'] == 0) {
            if ($("#comment_wall_on").val() == 1) {
              text += '<div class="send_comment" post_id="' + data['response']['items'][i]['id'] + '"><div class="button_open_send_comment">Оставить комментарий</div><textarea placeholder="Ваш комментарий будет первый. Введите комментарий и нажмите ctrl+enter для его размещения"></textarea></div>'
            }
          } else {
            text += '<div class="open_comment" offset="0" all_comment="' + data['response']['items'][i]['comments']['count'] + '" wall_id="wall' + data['response']['items'][i]['from_id'] + '" post_id="' + data['response']['items'][i]['id'] + '">Посмотреть комментарии(' + data['response']['items'][i]['comments']['count'] + ')'
            text += '</div>';
          }
          text += '</div>';
          text += '</div>';
          text += '</div></div>';
          text += '</div></div>';
        }
      }
      $("#wall").append(text);
      if(c == 1){ $("#wall").find('div[id^=post]').css("margin-left","135px"); }else if(c == 0){ $("#wall").find('div[id^=post]').css("margin-left","0px"); }
    })
  }

  //Новости
  //новости --------------------------------------------------------
  //новости
  var newsfeeds = 0;

  function read_news() {
    var method = 'newsfeed.get';
    var post = 'v=5.21&return_banned=0&count=20&start_from=' + $('#next_from').val();
    sender(method, post, function(data) {
      var text = '';
      $('#next_from').val(data['response']['next_from']);
      for (var i = 0; i < data['response']['items'].length; i++) {
        if (data['response']['items'][i]['post_type'] == 'post') {
          text += '<div id="post' + data['response']['items'][i]['source_id'] + '_' + data['response']['items'][i]['post_id'] + '" class="wall_post_over"><div class="post_table">';
          //console.log(obj(data['response']['items'][i]));
          if (data['response']['items'][i]['source_id'] < 0) {
            for (var w = 0; w < data['response']['groups'].length; w++) {
              if (data['response']['groups'][w]['id'] == data['response']['items'][i]['source_id'] * -1) {
                text += '<div class="post_image" uid="' + data['response']['items'][i]['source_id'] + '"><img width="50px" height="50px" src="images/image_loader.gif"></div>';
                loa(data['response']['groups'][w]['photo_50'], data['response']['items'][i]['source_id'] + '_' + data['response']['items'][i]['post_id'], function(id, d) {
                  $("div[id='post" + id + "'] > .post_table > .post_image > img").attr("src", d);
                })
                text += '<div class="post_info"><div class="wall_text">';
                text += '<div class="wall_text_name" uid="' + data['response']['items'][i]['source_id'] + '">' + data['response']['groups'][w]['name'] + '</div>';
              }
            }
          } else {
            for (var w = 0; w < data['response']['profiles'].length; w++) {
              if (data['response']['profiles'][w]['id'] == data['response']['items'][i]['source_id']) {
                text += '<div class="post_image" uid="' + data['response']['profiles'][w]['id'] + '"><img width="50px" height="50px" src="images/image_loader.gif"></div>';
                loa(data['response']['profiles'][w]['photo_50'], data['response']['items'][i]['source_id'] + '_' + data['response']['items'][i]['post_id'], function(id, d) {
                  $("div[id='post" + id + "'] > .post_table > .post_image > img").attr("src", d);
                })
                text += '<div class="post_info">';
                text += '<div class="wall_text">';
                text += '<div class="wall_text_name" uid="' + data['response']['profiles'][w]['id'] + '">' + data['response']['profiles'][w]['first_name'] + ' ' + data['response']['profiles'][w]['last_name'] + '</div>';
                break;
              }
            }
          }

          if (data['response']['items'][i]['copy_history'] != null) {
            if (data['response']['items'][i]['copy_history'][0]['owner_id'] < 0) {
              for (var w = 0; w < data['response']['groups'].length; w++) {
                if (data['response']['groups'][w]['id'] == Math.abs(data['response']['items'][i]['copy_history'][0]['owner_id'])) {
                  text += '<table cellpadding="0" cellspacing="0" class="published_by_wrap" uid="' + data['response']['items'][i]['copy_history'][0]['owner_id'] + '">';
                  text += '<tbody><tr>';
                  text += '<td>';
                  text += '<img ids="' + data['response']['items'][i]['copy_history'][0]['owner_id'] + '" src="images/image_loader.gif" width="30" height="30">';
                  loa(data['response']['groups'][w]['photo_50'], data['response']['items'][i]['copy_history'][0]['owner_id'], function(id, d) {
                    $("img[ids='" + id + "']").attr("src", d);
                  })
                  text += '</td>';
                  text += '<td>';
                  text += '<div class="published_by_title" id="' + data['response']['items'][i]['copy_history'][0]['owner_id'] + '">' + data['response']['groups'][w]['name'] + ' </div>';
                  text += '<div class="published_by_date sm">' + formatDate(new Date(data['response']['items'][i]['copy_history'][0]['date'] * 1000)) + '</div>';
                  text += '</td>';
                  text += '</tr>';
                  text += '</tbody></table>';
                  break;
                }
              }
            } else {
              //user
              for (var w = 0; w < data['response']['profiles'].length; w++) {
                if (data['response']['profiles'][w]['id'] == data['response']['items'][i]['copy_history'][0]['owner_id']) {
                  text += '<table cellpadding="0" cellspacing="0" class="published_by_wrap" uid="'+data['response']['items'][i]['copy_history'][0]['owner_id']+'">';
                  text += '<tbody><tr>';
                  text += '<td>';
                  text += '<img ids="' + data['response']['items'][i]['copy_history'][0]['owner_id'] + '" src="images/image_loader.gif" width="30" height="30">';
                  loa(data['response']['profiles'][w]['photo_50'], data['response']['items'][i]['copy_history'][0]['owner_id'], function(id, d) {
                    $("img[ids='" + id + "']").attr("src", d);
                  })
                  text += '</td>';
                  text += '<td>';
                  text += '<div class="published_by_title">' + data['response']['profiles'][w]['first_name'] + ' ' + data['response']['profiles'][w]['last_name'] + ' </div>';
                  text += '<div class="published_by_date sm">' + formatDate(new Date(data['response']['items'][i]['copy_history'][0]['date'] * 1000)) + '</div>';
                  text += '</td>';
                  text += '</tr>';
                  text += '</tbody></table>';
                  break;
                }
              }
              //user
            }
            text += repost_wall(data['response']['items'][i]['copy_history'][0]);
          }
          text += '<div>';
          var reg = /(?:^|[\s]+)((http(s)?:\/\/)|(www\.))([^\.]+)\.(?:[^\s,]+)/ig;
          var mess = data['response']['items'][i]['text'].replace(reg, function(s) {
            var str = (/:\/\//.exec(s) === null ? "http://" + s : s);
            return "<a target=\"_blank\" href=\"" + str + "\">" + str /*s*/ + "</a>";
          });
          text += '<div class="wall_post_text">' + mess + '</div>';
          text += '<div class="wall_attachments">';
          if (data['response']['items'][i]['attachments'] != null) {
            for (var q = 0; q < data['response']['items'][i]['attachments'].length; q++) {
              if (data['response']['items'][i]['attachments'][q]['type'] == 'photo') {
                text += "<div style='height:75px;padding-left: 3px;' id='mes_photo_href' data-lightbox='photo_news' t='n" + data['response']['items'][i]['attachments'][q]['photo']['id'] + "' href=''><img height='75px' src='images/image_loader.gif' id='mes_photo_img' t='" + data['response']['items'][i]['attachments'][q]['photo']['id'] + "'></div>";
                loa(data['response']['items'][i]['attachments'][q]['photo']['photo_604'], "n"+data['response']['items'][i]['attachments'][q]['photo']['id'], function(id, d) {
                  $("#mes_photo_href[t='" + id + "']").attr("href", d);
                })
                loa(data['response']['items'][i]['attachments'][q]['photo']['photo_75'], data['response']['items'][i]['attachments'][q]['photo']['id'], function(id, d) {
                  $("#mes_photo_img[t='" + id + "']").attr("src", d);
                })
              } else if (data['response']['items'][i]['attachments'][q]['type'] == 'link') {
                if (data['response']['items'][i]['attachments'][q]['link']['url'].indexOf('://vk.com/') > -1) {
                  text += '<div class="media_desc"><a target="_blank" class="lnk" href="' + data['response']['items'][i]['attachments'][q]['link']['url'] + '"><b class="fl_l "></b><span class="a">Ссылка может нарушить вашу невидимость -> ' + data['response']['items'][i]['attachments'][q]['link']['title'] + '</span></a></div>';
                } else {
                  text += '<div class="media_desc"><a target="_blank" class="lnk" href="' + data['response']['items'][i]['attachments'][q]['link']['url'] + '"><b class="fl_l "></b><span class="a">' + data['response']['items'][i]['attachments'][q]['link']['title'] + '</span></a></div>';
                }
              } else if (data['response']['items'][i]['attachments'][q]['type'] == 'video') {
                text += '<webview t="' + data['response']['items'][i]['attachments'][q]['video']['id'] + '" style="width: 100%;" src=""></webview>';
                sender('video.get', 'videos=' + data['response']['items'][i]['attachments'][q]['video']['owner_id'] + '_' + data['response']['items'][i]['attachments'][q]['video']['id'] + '_' + data['response']['items'][i]['attachments'][q]['video']['access_key'], function(data) {
                  //   console.log(obj(data['response'][1])); 
                  $("webview[t='" + data['response'][1]['vid'] + "']").attr("src", data['response'][1]['player']);
                })
              } else if (data['response']['items'][i]['attachments'][q]['type'] == 'audio') {
                text += '<div id="track" mus="news" class="audio_messages" duration="' + data['response']['items'][i]['attachments'][q]['audio']['duration'] + '" uid="' + data['response']['items'][i]['attachments'][q]['audio']['aid'] + '" url="' + data['response']['items'][i]['attachments'][q]['audio']['url'] + '"><div class="track_play"></div><div class="track_title">' + data['response']['items'][i]['attachments'][q]['audio']['artist'] + ' - ' + data['response']['items'][i]['attachments'][q]['audio']['title'] + '</div></div>';
              } else if (data['response']['items'][i]['attachments'][q]['type'] == 'doc') {
                text += "<a target='_blank' href='" + data['response']['items'][i]['attachments'][q]['doc']['url'] + "'>" + data['response']['items'][i]['attachments'][q]['doc']['title'] + "</a> ";
              }
            }
          }
          text += '</div>';
          text += '</div>';
          text += '<div class="reply_link_wrap"><small style="color:#999">' + formatDate(new Date(data['response']['items'][i]['date'] * 1000)) + '</small>';
          if ($("#uid_wall").val() != $(".avatar_img").attr('uid')) {
            text += '<span class="divide">|</span><small style="color:#999" id="repost_button" wall_id="wall' + data['response']['items'][i]['from_id'] + '_' + data['response']['items'][i]['id'] + '">Отправить себе на стену</small>';
          }
          text += '</div>';
          text += '</div></div>';
          text += '</div></div>';
        }
      }
      $("#news").append(text);

    })
  }

  $('#menu').on('click', '.button_news', function() {
    offset_wall = 0;
    newsfeeds = 1;
    if (open_video == 1) { $(".button_video").click(); }
    $('#next_from').val('');
    $("#news").html("");
    read_news();
    $("#news").show();
  })

  $("#news").scroll(function() {
    var scrolltopi = $('#news').prop('scrollTop');
    var scrollheighti = $('#news').prop('scrollHeight');
    var windowheighti = $('#news').prop('clientHeight');
    var scrolloffseti = 20;
    if (scrolltopi >= (scrollheighti - (windowheighti + scrolloffseti))) {
      if ($('#next_from').val() != '' && newsfeeds == 1) {
        read_news();
      }
    }
  })

  function user_info(id) {
    if(id == undefined){
      id = 0;
    }
    sender('users.get', 'user_ids=' + id + '&fields=photo_200_orig,relation,sity,bdate,status,online,home_town,last_seen,sex,can_post,can_write_private_message,wall_comments', function(data) {
      if (!data['error']) {
        $("#comment_wall_on").val(data['response'][0]['wall_comments']);
        var html = '<div id="user_info">';
        html += '<div id="user_avatar" idd="o_'+data['response'][0]['uid']+'"></div>';
          loa(data['response'][0]['photo_200_orig'], "o_"+data['response'][0]['uid'], function(id, d) {
           $("#user_avatar[idd='" + id + "']").css("background-image","url('"+d+"')");
          })
        html += '<div id="user_name">' + data['response'][0]['first_name'] + ' ' + data['response'][0]['last_name'] + '</div>';
        html += '<div id="user_status">' + data['response'][0]['status'] + '</div>';
        var sex = (data['response'][0]['sex'] == 2) ? 'Был' : 'Была';
        if (data['response'][0]['online'] == 1) {
          var time = 'Онлайн';
          if (data['response'][0]['online_mobile'] == 1) {
            time += '<b class="mob_onl profile_mob_onl"></b>';
          };
        } else if (data['response'][0]['online'] == 0) {
          var time = sex + ' ' + formatDate(new Date(data['response'][0]['last_seen']['time'] * 1000));
        }
        html += '<div id="user_online">' + time + '</div>';
        html += '<div id="user_info_all">';
        if (data['response'][0]['home_town'] != '' && data['response'][0]['home_town'] != undefined) {
          html += 'Родной город: ' + data['response'][0]['home_town'] + '<br>';
        }
        if (data['response'][0]['bdate'] != '' && data['response'][0]['bdate'] != undefined) {
          var mes = ['', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
          var bdate = data['response'][0]['bdate'].split('.');
          var god = (bdate[2] === undefined) ? '' : bdate[2];
          html += 'День рождения: ' + bdate[0] + ' ' + mes[bdate[1]] + ' ' + god + '<br>';
        }
        var relation_m = ['', 'не женат', 'есть подруга', 'помолвлен', 'женат', 'всё сложно', 'в активном поиске', 'влюблен'];
        var relation_g = ['', 'не замужем', 'есть друг', 'помолвлена', 'замужем', 'всё сложно', 'в активном поиске', 'влюблена'];
        if (data['response'][0]['relation'] != '' && data['response'][0]['relation'] != undefined) {
          html += 'Семейное положение: ';
          if (data['response'][0]['sex'] == 2) {
            html += relation_m[data['response'][0]['relation']];
          } else {
            html += relation_g[data['response'][0]['relation']];
          }
          html += '<br>';
        }
        html += '</div>';
        html += '<div id="menus"><div class="users clicks">Стена</div><div class="users">Видео</div><div class="users">Фото</div>';
        if (data['response'][0]['can_write_private_message'] == 1 && data['response'][0]['uid'] != $('.avatar_img').attr("uid")) {
          $(".module_header:eq(0)").before("<div id='sending_messages'>Написать</div>");
        }
        html += '</div>';
        if (data['response'][0]['uid'] == $('.avatar_img').attr("uid")) {
          html += '<div id="post_wall">';
          html += '<div id="post_wall_loader"><img src="images/720.gif"><br><font color="#fff">Подождите...Выполняется размещение записи...Это может занять некоторое время...</font></div>';
          html += '<div id="text_post_wall" contenteditable="true">Введите сообщение и нажмите сочетание клавиш Ctrl+Enter,что-бы опубликовать запись на своей стене. Запись будет опубликованна в течении пары минут.</div>';
          html += '<div class="smile_post_wall">';
          for (var i = 0; i < smile_code.length; i++) {
            html += '<img style="margin-right:2px;" src="" alte="'+smile_code[i]+'">';
              loa('http://vk.com/images/emoji/' + smile_code[i] + '.png', smile_code[i], function(charCode, d) {
               $("img[alte='" + charCode + "']").attr("src", d).attr("alte","");
              })
          };
          html += '</div>';
          html += '<div id="attachments_list"></div><div id="attachments_load"></div>';
          html += '</div>';
        }
        $("#wall").append(html);
        if (data['response'][0]['uid'] == $('.avatar_img').attr("uid")) {
          $("#user_info").css("height", "200px");
        }
        loa(data['response'][0]['photo_200_orig'], id, function(id, d) {
          $("img[idse='" + id + "']").attr("src", d);
        })
      }
    })
  }

  function panel_load(){
    $("#wall").append("<div id='panel_load'>"+
      "<div class='module_header'><div class='header_top'>Фотоальбомы</div><div class='p_header_bottom' id='two_album_count'></div></div><div id='two_album'></div>"+

      "<div class='module_header'><div class='header_top'>Видеозаписи</div><div class='p_header_bottom' id='two_video_count'></div></div><div id='two_video'></div>"+
      "</div>");

      sender('photos.getAlbums', 'v=5.21&need_covers=1&count=2&owner_id=' + $('#uid_wall').val(), function(data) {
        if(data['response']['count'] != 0){
      $("#two_album_count").html(data['response']['count']+' альбом'+declOfNum(data['response']['count'],['','а','ов']));
      var text = '';
      for (var i = 0; i < data['response']['items'].length; i++) {
        text += '<div id="user_album" t_album="' + data['response']['items'][i]['id'] + '" style="background-image: url();">';
        loa(data['response']['items'][i]['thumb_src'], data['response']['items'][i]['id'], function(id, d) {
          $("#user_album[t_album='" + id + "']").css('background-image', 'url(' + d + ')');
        })
        text += '<div class="user_album">';
        text += '<div class="user_album_name">' + data['response']['items'][i]['title'] + '</div>';
        text += '</div>';
        text += '</div>';
      }
      $("#two_album").append(text);
        }else{
          $("#two_album_count").parent(".module_header").remove();
        }
      })

      sender('video.get', 'v=5.21&count=2&owner_id=' + $('#uid_wall').val(), function(data) {
      $("#two_video_count").html(data['response']['count']+' видеозапис'+declOfNum(data['response']['count'],['ь','и','ей']));
      if(data['response']['count'] != 0){
      var text = '';
      for (var i = 0; i < data['response']['items'].length; i++) {
        var title = (data['response']['items'][i]['title'].length > 30) ? data['response']['items'][i]['title'].slice(0, 10) + "..." : data['response']['items'][i]['title'];
        text = text + '<div class="video_row_cont" player="' + data['response']['items'][i]['player'] + '"><div class="video_row_inner_cont">';
        if (data['response']['items'][i]['duration'] > 60) {
          var second = ((data['response']['items'][i]['duration'] % 60) > 9) ? data['response']['items'][i]['duration'] % 60 : '0' + data['response']['items'][i]['duration'] % 60;
          var duration = Math.floor(data['response']['items'][i]['duration'] / 60) + ':' + second;
        } else {
          var duration = '00:' + data['response']['items'][i]['duration'];
        }
        text = text + '<div class="video_row_info_line"><div class="video_raw_info_name">' + title + '</div><div class="video_row_duration">' + duration + '</div></div>';
        text = text + '<div class="video_row_info_play"></div>';
        text = text + '<div class="video_image_div" t_video="' + data['response']['items'][i]['id'] + '" style="background-image: url();"></div>';
        loa(data['response']['items'][i]['photo_130'], data['response']['items'][i]['id'], function(id, d) {
          $(".video_image_div[t_video='" + id + "']").css('background-image', 'url(' + d + ')');
        })
        text = text + '</div></div>';
      }
      $("#two_video").append(text);
      }else{
        $("#two_video_count").parent(".module_header").remove();
      }
      })
    $("#panel_load").show();
  }
  
  $('body').on('click', '.header_top:eq(0)',function(){
    $("#panel_load").remove();
    $(".users:eq(2)").click();
  })

  $('body').on('click', '.header_top:eq(1)',function(){
    $("#panel_load").remove();
    $(".users:eq(1)").click();
  })

  $('body').on('click', '.feedback_row_group_names, .feedback_row_photo, .user_block_avatar, #user_block_name, .dialogs_user, .dialogs_photo, .avatar_img, .wall_text_name, .post_image, .my_wall', function() {
    $("#news").hide();
    if (open_video == 1) { $(".button_video").click(); }
    if (button_group == 1) { $(".button_group").click(); }
    offset_wall = 0;
    $("#wall").html("");
    user_info($(this).attr("uid"));
    $("#uid_wall").val($(this).attr("uid"));
    read_wall(1);
    panel_load();
    $("#wall").show();
  });

$('body').on('click', '.group_list_row, .published_by_wrap', function() {
    $("#news").hide();
    if (open_video == 1) { $(".button_video").click(); }
    if (button_group == 1) { $(".button_group").click(); }
    offset_wall = 0;
    $("#wall").html("");
    user_info($(this).attr("uid"));
    $("#uid_wall").val($(this).attr("uid"));
    read_wall(0);
    $("#wall").show();
  });

  $("#wall").scroll(function() {
    var scrolltopi = $('#wall').prop('scrollTop');
    var scrollheighti = $('#wall').prop('scrollHeight');
    var windowheighti = $('#wall').prop('clientHeight');
   // console.log("scrolltopi="+scrolltopi+" scrollheighti="+scrollheighti+" windowheighti="+windowheighti);
   if(parseInt($("#uid_wall").val()) > 0){
   if(scrolltopi > 556){
    $("#panel_load").hide();
    $("#wall").find("div[id^='post']").css("margin-left", "0px");
   }else if(scrolltopi < 555){
    $("#panel_load").show();
    $("#wall").find("div[id^='post']").css("margin-left", "135px");
   }
   }
    var scrolloffseti = 20;
    if (scrolltopi >= (scrollheighti - (windowheighti + scrolloffseti))) {
      offset_wall = offset_wall + 20;
      if ($("#wall").find("#menus").find(".users:eq(0)").hasClass("clicks")) {
        read_wall();
      } else if ($("#wall").find("#menus").find(".users:eq(1)").hasClass("clicks")) {
        video_user();
      } else if ($("#wall").find("#menus").find(".users:eq(2)").hasClass("clicks")) {
        if (album_users == 0) {
          album_user();
        } else if (album_users == 1) {
          offset_wall = offset_wall + 20;
          load_album_user(load_album_users);
        }
      } else {
        read_wall();
      }
    }
  })

  $('body').on('click', '#repost_button', function() {
    sender('wall.repost', 'v=5.21&object=' + $(this).attr("wall_id"), function(data) {
      if (data['response']['success'] == 1) {
        alertify.success('Запись опубликована на вашей стене.');
      } else {
        alertify.error('Репост записи не удался.');
      }
    })
  });

  $('body').on('click', '.delete_post', function() {
    $("#histori").val("post" + $(this).attr("owner_id") + "_" + $(this).attr("post_id"));
    sender('wall.delete', 'v=5.21&post_id=' + $(this).attr("post_id"), function(data) {
      if (data['response'] == 1) {
        $("#" + $("#histori").val()).remove();
      } else {
        alertify.error('Удаление записи не удалось произвести.');
      }
    })
  });

  $('#wall').on('mouseover', '.wall_post_over', function(e) {
    $(this).find(".delete_post").css("opacity", 0.8);
  });
  $('#wall').on('mouseout', '.wall_post_over', function(e) {
    $(this).find(".delete_post").css("opacity", 0);
  });
  //ОТкрытие стены конец....

  //open comment

  function open_comment(data) {
    // console.log(obj(data));
    var text = '';
    var reg = /(?:^|[\s]+)((http(s)?:\/\/)|(www\.))([^\.]+)\.(?:[^\s,]+)/ig;
    var mess = data['text'].replace(reg, function(s) {
      var str = (/:\/\//.exec(s) === null ? "http://" + s : s);
      return "<a target=\"_blank\" href=\"" + str + "\">" + str /*s*/ + "</a>";
    });

    var reg = /\[([^\.]+)\|([^\.]+)\]/;
    mess = mess.replace(reg, function(s, d, n) {
      return n;
    });
    text += '<div class="wall_post_text">' + mess + '</div>';
    text += '<div class="wall_attachments">';
    if (data['attachments'] != null) {
      for (var q = 0; q < data['attachments'].length; q++) {
        if (data['attachments'][q]['type'] == 'photo') {
          text += "<div style='height:75px;padding-left: 3px;float: left;' data-lightbox='photo_comment' id='mes_photo_href' t='a" + data['attachments'][q]['photo']['id'] + "' href=''><img height='75px' src='images/image_loader.gif' id='mes_photo_img' t='" + data['attachments'][q]['photo']['id'] + "'></div>";
          loa(data['attachments'][q]['photo']['photo_604'], 'a'+data['attachments'][q]['photo']['id'], function(id, d) {
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
            //   console.log(obj(data['response'][1])); 
            $("webview[t='" + data['response'][1]['vid'] + "']").attr("src", data['response'][1]['player']);
          })
        } else if (data['attachments'][q]['type'] == 'audio') {
          text += '<div id="track" mus="comment" class="audio_messages" duration="' + data['attachments'][q]['audio']['duration'] + '" uid="' + data['attachments'][q]['audio']['aid'] + '" url="' + data['attachments'][q]['audio']['url'] + '"><div class="track_play"></div><div class="track_title">' + data['attachments'][q]['audio']['artist'] + ' - ' + data['attachments'][q]['audio']['title'] + '</div></div>';

        } else if (data['attachments'][q]['type'] == 'doc') {
          text += "<a target='_blank' href='" + data['attachments'][q]['doc']['url'] + "'>" + data['attachments'][q]['doc']['title'] + "</a> ";
        }
      }
    }
    text += '</div>';
    return text;
  }

  function load_comment(wall_id, post_id, offset) {
    sender('wall.getComments', 'sort=asc&owner_id=' + wall_id + '&post_id=' + post_id + '&extended=1&v=5.7&count=10&offset=' + offset, function(data) {
      var offsets = $('.open_comment[post_id="' + $("#post_id").val() + '"]').attr('offset');
      var offset = offsets * 1 + 10;
      var text = '';
      var ss = $('#comment[post_id="' + $("#post_id").val() + '"]').html();
      //console.log(obj(data['response']))
      for (var i = 0; i < data['response']['items'].length * 1; i++) {
        //console.log(obj(data['response']['items'][i]));
        if (obj(data['response']['items'][i]) != '') {
          text += '<div class="reply_table" comment_id="' + data['response']['items'][i]['id'] + '">';
          text += '<div class="delete_comment_button" comment_id="' + data['response']['items'][i]['id'] + '"><img src="images/del.gif"></div>';
          // console.log(data['response']);
          if (data['response']['items'][i]['from_id'] > 0) {
            for (var q = 0; q < data['response']['profiles'].length; q++) {
              if (data['response']['items'][i]['from_id'] == data['response']['profiles'][q]['id']) {
                text += '<div class="reply_image"><img reply_avatar_user="' + data['response']['profiles'][q]['id'] + '" width="50px" height="50px" src="images/image_loader.gif"></div>';
                loa(data['response']['profiles'][q]['photo_50'], data['response']['profiles'][q]['id'], function(id, d) {
                  $("img[reply_avatar_user='" + id + "']").attr("src", d);
                })
                text += '<div class="reply_info">';
                text += '<div class="wall_text_name" uid="' + data['response']['profiles'][q]['id'] + '">' + data['response']['profiles'][q]['first_name'] + ' ' + data['response']['profiles'][q]['last_name'] + '</div>';
                text += open_comment(data['response']['items'][i]);
                text += '<div class="published_by_date sm"><div style="float: left;margin-right: 6px;">' + formatDate(new Date(data['response']['items'][i]['date'] * 1000)) + '</div>   ';
                 text += '<div class="otvet_comment" post_id="'+$("#post_id").val()+'" datas="[id'+data['response']['profiles'][q]['id']+'|'+data['response']['profiles'][q]['first_name']+']">Ответить</div>';
                text += '</div></div>';
              }
            }
          } else {
            //groups
            for (var q = 0; q < data['response']['groups'].length; q++) {
              // console.log(Math.abs(data['response']['items'][i]['from_id']) +" == "+data['response']['groups'][q]['id']);
              if (Math.abs(data['response']['items'][i]['from_id']) == data['response']['groups'][q]['id']) {
                text += '<div class="reply_image"><img reply_avatar_user="' + data['response']['groups'][q]['id'] + '" width="50px" height="50px" src="images/image_loader.gif"></div>';
                loa(data['response']['groups'][q]['photo_50'], data['response']['groups'][q]['id'], function(id, d) {
                  $("img[reply_avatar_user='" + id + "']").attr("src", d);
                })
                text += '<div class="reply_info">';
                text += '<div class="wall_text_name" uid="' + data['response']['groups'][q]['id'] + '">' + data['response']['groups'][q]['name'] + '</div>';
                text += open_comment(data['response']['items'][i]);
                text += '<div class="published_by_date sm"><div style="float: left;margin-right: 6px;">' + formatDate(new Date(data['response']['items'][i]['date'] * 1000)) + '</div>    ';
                text += '<div class="otvet_comment" post_id="'+$("#post_id").val()+'" datas="[id'+data['response']['groups'][q]['id']+'|'+data['response']['groups'][q]['name']+']">Ответить</div>';
                text += '</div></div>';
              }
            }
            //groups
          }
          text += '</div>';
        }
      }

      $('#comment[post_id="' + $("#post_id").val() + '"]').append(text);
      $('.open_comment[post_id="' + $("#post_id").val() + '"]').appendTo('#comment[post_id="' + $("#post_id").val() + '"]');

      $('.open_comment[post_id="' + $("#post_id").val() + '"]').attr('offset', offset);
      if (offset >= $('.open_comment[post_id="' + $("#post_id").val() + '"]').attr('all_comment')) {
        var lalal = '<div class="send_comment" post_id="' + $("#post_id").val() + '"><div class="button_open_send_comment">Оставить комментарий</div><textarea placeholder="Введите комментарий и нажмите ctrl+enter для его размещения"></textarea></div>'

        $('.open_comment[post_id="' + $("#post_id").val() + '"]').remove();
        if ($("#comment_wall_on").val() == 1) {
          $('#comment[post_id="' + $("#post_id").val() + '"]').append(lalal);
        }
      } else {
        $('.open_comment[post_id="' + $("#post_id").val() + '"]').html("Показанно " + $('#comment[post_id="' + $("#post_id").val() + '"]').find("div[class='reply_table']").length + " комментариев из " + $('.open_comment[post_id="' + $("#post_id").val() + '"]').attr('all_comment'));
      }
    })
  }

  $('#wall').on('click', '.open_comment', function() {
    $("#post_id").val($(this).attr("post_id"));
    load_comment($("#uid_wall").val(), $(this).attr("post_id"), $(this).attr("offset"));
    //console.log("click "+$("#uid_wall").val()+' '+$(this).attr("post_id")+' '+$(this).attr("offset"));
  })

  //about

  //button_exit
  function exit() {
    timer = false;
    chrome.storage.local.set({
      'vkAccessToken': ''
    }, function() {
      console.log("storage edit");
    })

    chrome.storage.local.remove('vkAccessToken', function() {
      console.log("storage clear")
    })
  }

  $('#dialog.setting').on('click', '#new_user', function(e) {
       var loadstop = function() {
        console.log("loadstop");
        var url = $("#auth_id").attr("src");
        if (url.indexOf('oauth.vk.com/blank.html#access_token=') > -1) { //remixsid              
          document.getElementById("auth_id").executeScript({ code: " document.cookie = 'remixsid='" });
          $("#auth_id").attr("src", "https://oauth.vk.com/authorize?client_id=3915697&scope=friends,messages,offline,photos,audio,video,docs,wall,groups&redirect_uri=http://oauth.vk.com/blank.html&display=popup&response_type=token");      
        } 
      }

      var web = document.createElement("webview");
      web.id = "auth_id";
      web.src = "https://oauth.vk.com/authorize?client_id=3915697&scope=friends,messages,offline,photos,audio,video,docs,wall,groups&redirect_uri=http://oauth.vk.com/blank.html&display=popup&response_type=token";
      web.style.width = '100%';
      web.style.height = '100%';
      web.addEventListener("loadstop", loadstop);
      var auth_form = document.getElementById("auth_form");
      auth_form.appendChild(web);
      $("#auth_form").show();
      timers = false;
      exit();
      webview.reload();
    })
    //button_exit.End
  //video user
  function video_user() {
    sender('video.get', 'count=20&offset=' + offset_wall + '&owner_id=' + $('#uid_wall').val(), function(data) {
      var text = '';
      for (var i = 1; i < data['response'].length; i++) {
        var title = (data['response'][i]['title'].length > 30) ? data['response'][i]['title'].slice(0, 30) + "..." : data['response'][i]['title'];
        text = text + '<div class="video_row_cont" player="' + data['response'][i]['player'] + '"><div class="video_row_inner_cont">';
        if (data['response'][i]['duration'] > 60) {
          var second = ((data['response'][i]['duration'] % 60) > 9) ? data['response'][i]['duration'] % 60 : '0' + data['response'][i]['duration'] % 60;
          var duration = Math.floor(data['response'][i]['duration'] / 60) + ':' + second;
        } else {
          var duration = '00:' + data['response'][i]['duration'];
        }
        text = text + '<div class="video_row_info_line"><div class="video_raw_info_name">' + title + '</div><div class="video_row_duration">' + duration + '</div></div>';
        text = text + '<div class="video_row_info_play"></div>';
        text = text + '<div class="video_image_div" t_video="' + data['response'][i]['vid'] + '" style="background-image: url();"></div>';
        loa(data['response'][i]['image_medium'], data['response'][i]['vid'], function(id, d) {
          $(".video_image_div[t_video='" + id + "']").css('background-image', 'url(' + d + ')');
        })
        text = text + '</div></div>';
      }
      $("#wall").append(text);
    })
  }

  function album_user() {
    sender('photos.getAlbums', 'v=5.21&need_covers=1&offset=' + offset_wall + '&owner_id=' + $('#uid_wall').val(), function(data) {
      var text = '';
      for (var i = 0; i < data['response']['items'].length; i++) {
        text += '<div id="user_album" t_album="' + data['response']['items'][i]['id'] + '" style="background-image: url();">';
        loa(data['response']['items'][i]['thumb_src'], data['response']['items'][i]['id'], function(id, d) {
          $("#user_album[t_album='" + id + "']").css('background-image', 'url(' + d + ')');
        })
        text += '<div class="user_album">';
        text += '<div class="user_album_name">' + data['response']['items'][i]['title'] + '</div>';
        text += '</div>';
        text += '</div>';
      }
      $("#wall").append(text);
    })
  }

  var load_album_users = 0;

  function load_album_user(id) {
    load_album_users = id;
    sender('photos.get', 'count=40&v=5.21&offset=' + offset_wall + '&owner_id=' + $('#uid_wall').val() + '&album_id=' + id + '&offset=' + offset_wall, function(data) {
      var text = '';
      for (var i = 0; i < data['response']['items'].length; i++) {
        text += '<div id="mes_photo_href" ss="' + data['response']['items'][i]['id'] + '" data-lightbox="album_user" href="' + data['response']['items'][i]['photo_130'] + '"><img id="photo_user_album" photo_album="' + data['response']['items'][i]['id'] + '" src="images/image_loader.gif"></div>';
        loa(data['response']['items'][i]['photo_130'], data['response']['items'][i]['id'], function(id, d) {
          $("#photo_user_album[photo_album='" + id + "']").attr('src', d);
        })

        loa(data['response']['items'][i]['photo_604'], data['response']['items'][i]['id'], function(id, d) {
          $("#mes_photo_href[ss='" + id + "']").attr('href', d);
        })
      }
      $("#wall").append(text);
    })
  }

  //открываем стену пользователя
  $('#wall').on('click', '.users:eq(0)', function() {
      if ($('#uid_wall').val() == $('.avatar_img').attr("uid")) {
        $("#post_wall").show();
        $("#user_info").css("height", "200px");
      }
      offset_wall = 0;
      $('.users:eq(0)').addClass('clicks');
      $('.users:eq(1)').removeClass('clicks');
      $('.users:eq(2)').removeClass('clicks');
      $("#wall > div:not(:first)").remove();
      $("#wall > img").remove();
      read_wall(1);
    })
    //открываем видео пользователя
  $('#wall').on('click', '.users:eq(1)', function() {
    if ($('#uid_wall').val() == $('.avatar_img').attr("uid")) {
      $("#post_wall").hide();
      $("#user_info").css("height", "135px");
    }
    offset_wall = 0;
    $('.users:eq(0)').removeClass('clicks');
    $('.users:eq(1)').addClass('clicks');
    $('.users:eq(2)').removeClass('clicks');
    $("#wall > div:not(:first)").remove();
    $("#wall > img").remove();
    video_user();
  })

  var album_users = 0;
  //открываем фото пользователя
  $('#wall').on('click', '.users:eq(2)', function() {
      if ($('#uid_wall').val() == $('.avatar_img').attr("uid")) {
        $("#post_wall").hide();
        $("#user_info").css("height", "135px");
      }
      offset_wall = 0;
      $('.users:eq(0)').removeClass('clicks');
      $('.users:eq(1)').removeClass('clicks');
      $('.users:eq(2)').addClass('clicks');
      $("#wall > div:not(:first)").remove();
      $("#wall > img").remove();
      album_user();
      album_users = 0;
    })
    //пишем этому пользователю
  $('#wall').on('click', '#sending_messages', function() {
    $("#news").hide();
    $("#wall").hide();
    $("#messages > #table").html('');
    $('#messages_form').show();
    $('#messages').show();
    $('#send_messages').show();
    if (open_video == 1) { $(".button_video").click(); }
    if (button_group == 1) { $(".button_group").click(); }
    messages_open($("#uid_wall").val());
    $("#uid_user").val($("#uid_wall").val());
  })

  $('#wall').on('click', '#user_album', function() {
    $('.users:eq(0)').removeClass('clicks');
    $('.users:eq(1)').removeClass('clicks');
    $('.users:eq(2)').addClass('clicks');
    $("#panel_load").remove();
    offset_wall = 0;
    $("#wall > div:not(:first)").remove();
    $("#wall > img").remove();
    load_album_user($(this).attr('t_album'));
    album_users = 1;
  })

  $('body').on('click', '#update_messages', function() {
    $("#messages > #table").html('');
    messages_open($("#uid_user").val());
  })

function new_friend() {
    //Смотрим есть ли новые друзья
  sender('friends.getRequests', 'v=5.21&out=0', function(data) {
    if (data['response']['count'] != '0') {
      $(".new_friend").html('+' + data['response']['count']);
      $(".new_friend").show();
    }
  })
}

var timers = false;
function ti(){
	timers = true;
}

function updates(){
for(var i=0;i<$("body").find("*[uptime]").length;i++){
  if($("body").find("*[uptime]:eq("+i+")").attr('class') != 'dialogs_date'){
   $("body").find("*[uptime]:eq("+i+")").html(formatDate(new Date($("body").find("*[uptime]:eq("+i+")").attr("uptime") * 1000)))
}
}
if(timers){
 setTimeout(updates, 60000);
}
}
//pis
function pis(){
$(".riso2").hide();
$("#messages_form #nabor:visible").hide();
if(timers){
 setTimeout(pis, 8000);
}
}

  function start() {
      chrome.storage.local.get('vkAccessToken', function(result) {
        if (result.vkAccessToken != '') {
          chrome.storage.local.get('start_stena', function (result) {
           if (result.start_stena == '' || result.start_stena == undefined || result.start_stena == '0') {
              document.getElementById("start_stena").checked = false;
              get_messages(1);
            }else{
            document.getElementById("start_stena").checked = true;
            $(".my_wall").click();
            get_messages();
            }
          });
          new_friend();
          ti();
          pis();
          updates();
          open_longPong();
          send_long_pong();
          update_new();
          timer = true;
          //notification_load();
        }
      });
    }
    //start();
  $('#auth_form').on('click', '#activate', function() {
    start();
  })

  //images load user
  $('#send_messages').on('click', '#send_photo', function() {
    alertify.set({ labels: { ok : "Закрыть"} });
    $.ajax({
      url: 'http://vkinviz.ru/',
      dataType: "html",
      success: function(data, textStatus) {
        chrome.storage.local.get('vkAccessToken', function(result) {
          alertify.alert('<webview style="width: 100%;height: 248px;" id="image_load" src="http://vkinviz.ru/api/post_photo.php?uid=' + $('#uid_user').val() + '&token=' + result.vkAccessToken + '"></webview>'); // HTML
          $(".alertify-dialog").css("padding", '0px');
          var webview = document.getElementById("image_load");
          var loadstop = function() {
            var url = $("#image_load").attr("src");
            if (url.indexOf('http://vkinviz.ru/api/post_photo.php?ok=1') > -1) {
              $("#alertify-ok").click();
              $("#messages > #table").html('');
              messages_open($('#uid_user').val());

            }
          }
          webview.addEventListener("loadstop", loadstop);

        })
      },
      error: function(jqXHR, exception) {
        if (jqXHR.status === 0) {
          alertify.error("Нет соединения. Сервер не доступен.");
        } else if (jqXHR.status == 404) {
          alertify.error("Запрашиваемая страница не найдена. [404]");
        } else if (jqXHR.status == 500) {
          alertify.error("Внутренняя ошибка сервера. [500]");
        } else if (exception === 'parsererror') {
          alertify.error("Не удалось разобрать JSON ответ.");
        } else if (exception === 'timeout') {
          alertify.error("Время запроса вышло.");
        } else if (exception === 'abort') {
          alertify.error("Аякс запрос прерывается.");
        } else {
          alertify.error("Ошибка запроса: " + jqXHR.responseText);
        }
      }
    })
  })

  $('#wall').on('mouseover', '.reply_table', function(e) {
    $(this).find(".delete_comment_button").css("opacity", 0.8);
  });
  $('#wall').on('mouseout', '.reply_table', function(e) {
    $(this).find(".delete_comment_button").css("opacity", 0);
  });

  $('#wall').on('click', '.delete_comment_button', function() {
    $("#histori").val($(this).attr("comment_id"));
    sender('wall.deleteComment', 'v=5.21&owner_id=' + $("#uid_wall").val() + "&comment_id=" + $(this).attr("comment_id"), function(data) {
      if (data['response'] == 1) {
        $(".reply_table[comment_id='" + $("#histori").val() + "']").remove();
      } else if (data['error']['error_code'] == 211) {
        alertify.error('Вы не можете удалить этот комментарий.');
      }
    })
  })

  $('#wall').on('keydown', '#comment > div.send_comment > textarea', function(e) {
    if (e.ctrlKey && e.keyCode == 13) {
        //var from_group = 1;
        var from_group = 0;
      sender('wall.addComment', 'v=5.21&from_group=' + from_group + '&owner_id=' + $("#uid_wall").val() + "&post_id=" + $(this).parent().attr("post_id") + "&text=" + $(this).val(), function(data) {
        if (data['response']['comment_id'] > 0) {
          alertify.success('Комментарий добавлен.Обновите страничку.');
        } else if (data['error']['error_code'] == 213) {
          alertify.error('Нет доступа к комментированию записи.');
        }
      })
    }
  })
  var smiless = 0;
  $('#send_messages').on('click', '#open_smile', function(e) {
    if(smiless == 0){
      load_smile();
      smiless = 1;
    }
    $("#smile").toggle()
    $("#smiles_fon").show();
  })

  $('body').on('click', '#smiles_fon', function(e) {
    $("#smile").toggle()
    $("#smiles_fon").hide();
  })
  
  $(".tools_smile").click(function(){
    $(".smiles").html("");
    $(".smiles").css("overflow-y","hidden");
    $( "#smile" ).animate({
    width: "330px",
    height: "184px",
    top: "-181px",
    }, 300, function() {
    load_smile();
  })
  })

  $(".tools_sticker").click(function(){
    $(".smiles").html("");
    $( "#smile" ).animate({
    width: "400px",
    height: "300px",
    top: "-298px",
    }, 300, function() {
    $(".smiles").css("overflow-y","scroll");
    load_sticker();
  });
  })
  var sticker = [102,103,101,105,126,107,112,113,110,108,111,109,114,115,116,100,119,98,122,117,118,99,125,121,128,104,127,106,120,123,124,97];
  function load_sticker(){
     for (var i = 0; i < sticker.length; i++) {
        $(".smiles").append('<img sticker_code="'+sticker[i]+'" src="">');
        loa('https://vk.com/images/stickers/'+sticker[i]+'/64.png', sticker[i], function(id, d) {
          $("img[sticker_code='" + id + "']").attr('src', d);
        })
     }
  }

  function load_smile(){
    for (var i = 0; i < smile_code.length; i++) {
      $(".smiles").append('<img smile="" src="" alte="'+smile_code[i]+'">');
      if(i == smile_code.length-1){ emoji_load(); }
    };
  }

  $('body').on('click', 'img[sticker_code]', function(e) {
    if ($("#uid_user").val().substr(0, 5) == 'chat_') {
      var c_id = 'chat_id=' + $("#uid_user").val().substring(5);
    } else {
      var c_id = 'user_id=' + $("#uid_user").val();
    }
    sender('messages.send', c_id + '&sticker_id='+$(this).attr("sticker_code"), function(data) {
      $("#sticker_id").click();
    })
  })

  $('#send_messages').on('click', '.smiles img[smile]', function(e) {
    document.getElementById('text_messages').focus();
    pasteHtmlAtCaret(" <img src='" + $(this).attr("src") + "' al='"+$(this).attr("alte")+"'> ");
  })

  $('#menu').on('click', '.new_friend', function(e) {
    sender('friends.getRequests', 'v=5.21&out=0&sort=0', function(data) {
      sender('users.get', 'v=5.21&user_ids=' + data['response']['items'].join(",") + '&fields=online,last_seen,photo_50,sex,has_mobile', function(data) {
        $("#wall").html('');
        if (data['response'].length != 0) {
          for (var i = 0; i < data['response'].length; i++) {
            //console.debug(obj(data['response'][i]));
            if (data['response'][i]['first_name'] != '') {
              var friend = '';
              var name_user = data['response'][i]['first_name'] + ' ' + data['response'][i]['last_name'];
              if (data['response'][i]['deactivated'] == 'deleted') {
                var sex = (data['response'][i]['sex'] == 2) ? 'Удален' : 'Удалена';
                var time = sex;
              } else {
                var sex = (data['response'][i]['sex'] == 2) ? 'Был' : 'Была';
                if (data['response'][i]['online'] == 1) {
                  if (data['response'][i]['online_mobile'] == 1) {
                    var time = 'Онлайн <b class="mob_onl profile_mob_onl" style="position: absolute;"></b>';
                  } else {
                    var time = 'Онлайн';
                  }
                } else if (data['response'][i]['online'] == 0) {
                  var time = sex + ' ' + formatDate(new Date(data['response'][i]['last_seen']['time'] * 1000));
                }
              }
              var user_id = data['response'][i]['id'];
              friend = friend + "<div id='user_block_new' uid='" + user_id + "' style='float:left;width: 173px;'>";
              friend = friend + "<div class='user_block_avatar_new'><img width='50px' id='user_block_avatar_" + user_id + "' src='images/image_loader.gif'></div>";
              loa(data['response'][i]['photo_50'], user_id, function(id, d) {
                $("#user_block_avatar_" + id).attr("src", d);
              })
              friend = friend + "<div id='user_block_name'>" + name_user + "</div>";
              friend = friend + "<div id='user_block_time'>" + time + "</div>";
              friend = friend + "<div id='user_block_messages' uid='" + user_id + "'><img width='20px' src='images/message-xxl.png'></div>";
              friend = friend + "<div id='user_block_add_friend' user_id='" + user_id + "'>+</div>";
              friend = friend + "<div id='user_block_del_friend' user_id='" + user_id + "'>-</div>";
              friend = friend + "</div>";
              $("#wall").append(friend);
            }
          }
        }
        $("#wall").show();
      })
    })
  });

  $('body').on('click', '#user_block_add_friend', function(e) {
    $("#histori").val($(this).attr("user_id"));
    sender('friends.add', 'v=5.24&user_id=' + $(this).attr("user_id"), function(data) {
      if (data['response'] != '') {
        alertify.success('Пользователь добавлен в друзья');
        $("#user_block_new[uid='" + $("#histori").val() + "']").remove();
      } else {
        alertify.error('Ошибка.Невозможно добавить пользователя в друзья');
      }
    })
  });

  $('body').on('click', '#user_block_del_friend', function(e) {
    $("#histori").val($(this).attr("user_id"));
    sender('friends.delete', 'v=5.24&user_id=' + $(this).attr("user_id"), function(data) {
      if (data['response'] != '') {
        alertify.success('Заявка в друзья отклонена');
        $("#user_block_new[uid='" + $("#histori").val() + "']").remove();
      } else {
        alertify.error('Неизвестная ошибка при удалении пользователя');
      }
    })
  });

  //Окно обновлений


  //Создание записей на стене
  $('#wall').on('click', '.smile_post_wall img', function(e) {
    if ($("#text_post_wall").html() == 'Введите сообщение и нажмите сочетание клавиш Ctrl+Enter,что-бы опубликовать запись на своей стене. Запись будет опубликованна в течении пары минут.') {
      $("#text_post_wall").html('')
    }
    document.getElementById('text_post_wall').focus();
    pasteHtmlAtCaret(" <img src='" + $(this).attr("src") + "'> ");
  })

  $('#wall').on('mouseover', '#text_post_wall', function(e) {
    if ($("#text_post_wall").html() == 'Введите сообщение и нажмите сочетание клавиш Ctrl+Enter,что-бы опубликовать запись на своей стене. Запись будет опубликованна в течении пары минут.') {
      $("#text_post_wall").css("color", '#000').html('');
    }
  });

  $('#wall').on('mouseout', '#text_post_wall', function(e) {
    if ($("#text_post_wall").html() == '') {
      $("#text_post_wall").css("color", 'rgb(168,168,168)').html('Введите сообщение и нажмите сочетание клавиш Ctrl+Enter,что-бы опубликовать запись на своей стене. Запись будет опубликованна в течении пары минут.');
    }
  });

  function send_post_wall() {
    var str = $("#text_post_wall").html();
    var result = '';
    result += str.replace(/<img src=\"images\/smile\/(.+?).png\">/g, function(q, w) {
      return ' ' + smile[smile_code.indexOf(w)] + ' ';
    });
    results = result.replace(/<div>(.+?)<\/div>/g, function(q, w) {
      return ' ' + w + ' ';
    });
    var time = (parseInt(new Date().getTime() / 1000) + Math.floor(Math.random() * (180 - 40 + 1)) + 40);
    if($('#attachments').val() != ''){
      var attachments = '&attachments='+$('#attachments').val();
    }else{
      var attachments = '';
    }
    sender('wall.post', 'message=' + results + attachments +'&publish_date=' + time, function(data) {
      if (obj(data['response']) != '') {
        if (data['response']['post_id'] > 0) {
          alertify.alert("Ваша запись будет опубликована в течении пары минут.Обычно это занимает от 1 до 5 минут.");
          $('#attachments').val('');
          $("#text_post_wall").html('');
          $("#post_wall_loader").hide();
        }
      } else {
        if (data['error']['error_code'] == 214) {
          alertify.alert("Возможно Вы пару минут назад опубликовали запись, но пока она не опубликована Вы не можете опубликовать ещё одну,попробуйте ещё раз после того как Ваша запись опубликуется, обычно это занимает некоторое время, но за то Вы не окажитесь в онлайне.");
          $("#post_wall_loader").hide();
        } else if (data['error']['error_code'] == 100) {
          send_post_wall();
        } else if (data['error']['error_code'] == 6) {
          alertify.error('Превышен интервал. Попробуйте позже. Минут через 5. Нам очень жаль,что так вышло. Правда-правда=(');
          $("#post_wall_loader").hide();
        } else {
          alertify.error(obj(data['error']));
          $("#post_wall_loader").hide();
        }
      }
    })
  }

  $('#wall').on('keydown', '#text_post_wall', function(e) {
    if (e.ctrlKey && e.keyCode == 13) {
      $("#post_wall_loader").show();
      send_post_wall();
    }
  })

  //-------------//
 //wall load img//
//-------------//
  $('#wall').on('click', '#attachments_load', function(e) {
    if($('#attachments').val().split(',').length > 1){ $("#attachments_load_view").show(); }
    chrome.storage.local.get('vkAccessToken', function(result) {
    alertify.alert('<webview style="width: 100%;height: 190px;" id="image_load" src="http://vkinviz.ru/api/attachments/post_photo.php?token=' + result.vkAccessToken + '"></webview><div id="attachments_load_view"></div>'); // HTML
    $(".alertify-dialog").css("padding", '0px');
    var webview = document.getElementById("image_load");
    var loadstop = function() {
      var url = $("#image_load").attr("src");
      if (url.indexOf('vkinviz.ru/api/attachments/post_photo.php?ok=1&attachments=') > -1) {
        var attachments = url.replace(/(.*)attachments=(.*);(.*)/, function(q, w, e, s) {
          return e;
        });

        if(attachments != ''){
          $('#attachments').val($('#attachments').val()+attachments+',')
          var array_attachments = $('#attachments').val().split(','); 
          if(array_attachments.length > 1){ $("#attachments_load_view").show(); }
          $('#attachments_list').html((array_attachments.length-1)+' Приклеплени'+declOfNum(array_attachments.length-1, ['е', 'я', 'й']));
          var src_big = url.replace(/(.*)attachments=(.*);(.*)/, function(q, w, e, s) {
            return s;
          });
          $("#attachments_load_view").append("<div photos='"+attachments+"'><img src='images/delete.png' style='opacity: 0;'></div>");
            loa(src_big,attachments, function(id, d) {
            $("div[photos='" + id + "']").css("background-image", "url("+d+")");
            })
          $("#image_load").attr("src","http://vkinviz.ru/api/attachments/post_photo.php?token=" + result.vkAccessToken)
       }
      }
    } 
    webview.addEventListener("loadstop", loadstop);
    })
  })

  $("body").on('mouseover', "div[photos^='photo']", function(e) {
    $(this).find("img").css("opacity", 0.6);
  });
  $("body").on('mouseout', "div[photos^='photo']", function(e) {
    $(this).find("img").css("opacity", 0);
  });
  $("body").on('click', "div[photos^='photo']", function(e) {
    var attr = $(this).attr("photos");
    var array_attachments = $('#attachments').val().split(','); 
    for (var i = 0; i < array_attachments.length - 1; i++) {
      if(array_attachments[i] == attr){
        array_attachments.splice(i,1);
        $('#attachments').val(array_attachments.join(","));
        $(this).remove();
        if(array_attachments.length-1 == 0){ $("#attachments_load_view").hide(); }
      }
    };
  });

  //---------------------//
 //----Открыть URL------//
//---------------------//
function open_wall_open(id){
    $("#news").hide();
    if (open_video == 1) { $(".button_video").click(); }
    if (button_group == 1) { $(".button_group").click(); }
    offset_wall = 0;
    $("#wall").html("");
    user_info(id);
    $("#uid_wall").val(id);
    read_wall(0);
    $("#panel_load").remove();
    $("#wall").show();
}

function open_wall_url(type,id){
    if(type == 'id' || type == 'user'){
       open_wall_open(id);
    }else if(type == 'club' || type == 'public' || type == 'group'){
       open_wall_open('-'+id);
    }
}

  $("*").keydown(function(event) {
    if (event.ctrlKey && event.keyCode == 81) {
alertify.prompt("Вставьте ссылку на пользователя или группу.", function (e, str) {
    if (e) {
    	var re = /http?[^\s]:\/\/vk.com\/(.*)/;
    	if(re.test(str)){
    	 str = re.exec(str);
    	  var re2 = /(club|public|id)(.*)/;
    	  if(re2.test(str[1])){
            str2 = re2.exec(str[1]);
            open_wall_url(str2[1],str2[2]);
          }else{
          	sender('utils.resolveScreenName', 'v=5.25&screen_name='+str[1] , function(data) {
             open_wall_url(data['response']['type'],data['response']['object_id']);
           })
          }
        }else{
         alertify.error("Проверьте правильность ссылки");
        }
    }
}, "http://vk.com/*********");
    }
})

  //---------------------//
 //----размеры окна-----//
//---------------------//



  $(window).resize(function() {
    var obj = {};
    obj['width'] = $(window).width();
    obj['height'] = $(window).height();
    chrome.storage.local.set({
      'resize': obj
    }, function() {})
  })

  chrome.storage.local.get('resize', function(result) {
    if (result['resize']['width'] != '' || result['resize']['width'] != undefined) {
      chrome.app.window.current().resizeTo(result['resize']['width'], result['resize']['height']);
    }
  })

$("body").on('mouseover', "#sending_messages, .header_top, .otvet_comment", function(e) {
    $(this).css("opacity", 0.6);
});
$("body").on('mouseout', "#sending_messages, .header_top, .otvet_comment", function(e) {
    $(this).css("opacity", 1);
});

function friend_load(data){
for (var i = 0; i < data.length; i++) {
          var user_id = data[i]['id'];
          if (data[i]['first_name'] != '' && user_id != $('.avatar_img').attr('uid')) {
            var friend = '';
            var name_user = data[i]['first_name'] + ' ' + data[i]['last_name'];
            if (data[i]['deactivated'] == 'deleted') {
              var sex = (data[i]['sex'] == 2) ? 'Удален' : 'Удалена';
              var time = sex;
            } else {
              var sex = (data[i]['sex'] == 2) ? 'Был' : 'Была';
              if (data[i]['online'] == 1) {
                if (data[i]['online_mobile'] == 1) {
                  var time = 'Онлайн <b class="mob_onl profile_mob_onl" style="position: absolute;"></b>';
                } else {
                  var time = 'Онлайн';
                }
              } else if (data[i]['online'] == 0) {
                var time = sex + ' ' + formatDate(new Date(data[i]['last_seen']['time'] * 1000));
              }
            }
            friend = friend + "<div id='user_block' uid='" + user_id + "'>";
            friend = friend + "<div class='user_block_avatar' uid='" + user_id + "'><img width='50px' id='user_block_avatar_" + user_id + "' src='images/image_loader.gif'></div>";
            loa(data[i]['photo_50'], user_id, function(id, d) {
              $("#user_block_avatar_" + id).attr("src", d);
            })
            friend = friend + "<div id='user_block_name' uid='" + user_id + "'>" + name_user + "</div>";
            friend = friend + "<div id='user_block_time'>" + time + "</div>";
            friend = friend + "<div id='user_block_messages' uid='" + user_id + "'><img width='20px' src='images/message-xxl.png'></div>";
            friend = friend + "</div>";
            $("#dialog.friend > .dialog_content").append(friend);
          }
        }
}

 $('#friend_search_pole input').keyup(function(e) {
  if (e.keyCode == 13) {
    sender('friends.get', 'v=5.25&order=hints&fields=online,last_seen,photo_50,sex,has_mobile', function(data) {
     var finded = new Array();
     for(var i in data['response']['items']){
      if(data['response']['items'][i].first_name.toLowerCase().indexOf($('#friend_search_pole input').val().toLowerCase()) != -1 || data['response']['items'][i].last_name.toLowerCase().indexOf($('#friend_search_pole input').val().toLowerCase()) != -1) finded.push(data['response']['items'][i]);
     }

     if(obj(finded) == ''){
      alertify.success("Пользователь не найден");
     }else{
      $("#dialog.friend > .dialog_content").html('');
      friend_load(finded);
     }     
    })
  }
  })

$('#menu').on('click', '.notification', function() {
notification();
$("#news").html("");
$("#news").show();
})

$('body').on('click', '.otvet_comment', function() {
$(".send_comment[post_id='"+$(this).attr("post_id")+"'] > textarea").val($(this).attr('datas')+","+$(".send_comment[post_id='"+$(this).attr("post_id")+"'] > textarea").val())
})

$('body').on('click', '.send_comment > textarea', function() {
$("#post_id").val($(this).parent().attr("post_id"));
})

var timer=true;
  function update_new() {
    //--------
    //\\\\\\\\\\\\\\\
    sender('execute.new_messages', '', function (data) {
      if (data['response'] != 0 && data['response']) {
        if (data['response'].length > 0) {
          for (var i = 0; i < data['response'].length; i++) {
            if (data['response'][i]['user_id'] == $("#uid_user").val() && data['response'][i]['id'] != $("#messages > #table > div").last().attr('id_messages')) {
              $("#messages > #table").html('');
              messages_open($("#uid_user").val());
            }
          }
        }
      }
    })
    //\\\\\\\\\\\\\\\
    //------
    if(timer){
     setTimeout(update_new, 5000);
    }
  }

if (chrome.runtime.lastError) { alertify.error(chrome.runtime.lastError.message); }
$('body').on('click', '.open_dialog_window', function(e) {
chrome.app.window.create("new_window.html",
    {  frame: "none",
       id: "ID_"+$(this).attr("uid"),
       innerBounds: {
         width: 360,
         height: 300,
         minWidth: 250,
         minHeight: 300
      }
    });
$(".messages_open_v2").click();
});

$('body').on('click', '.header_exit', function() {
 chrome.app.window.current().close();
})


$('body').on('click', '.header_setting', function() { $("#dialog.setting").toggle(); $("#display").show(); })
$('#setup_key').on('click', 'input[name="keys"]', function() {
  chrome.storage.local.set({'key_send':  $(this).attr('value')}, function () { alertify.log('Выбор сделан.');})
})

$('body').on('click', '.header_help', function() {
s = function(){/*
  <div>
<div id='accordion'>
  <h3>Как стать оффлайн?</h3>
  <div>
    <p>
    Для того,что-бы Вам стать оффлайн ВКонтакте выполните следующие шаги:
    <ul style="list-style-type: decimal;text-align: -webkit-left;">
      <li>Убедитесь,что у Вас не установленно других приложений для работы с ВКонтакте. Они могут нарушить работу нашего приложения;</li>
      <li>Выйти с сайта ВКонтакте:<ul slyle="list-style-type: asterisks;"><li>Если Вы просто закрыли страничку с сайтов ВКонтакте,то оффлайн станете через 15 минут;</li><li>Если Вы нажали на кнопку выход на сайте ВКонтакте, то оффлайн станете оффлайн через минуты 2-3.</li></ul></li>
      <li>Зайти на сайт ВКонтакте через приложение VKinviz</li>
    </ul>
    </p>
  </div>
  <h3>В каких случаях я стану онлайн?</h3>
  <div>
    <p>
    В данном приложении функций которые могут засветить Вашу страничку в онлайн отсутствуют. Любые действия в этом приложении к онлайн не приводят. Если такое произошло, то возможно из-за мобильного приложения на Вашем телефоне или установленных дополнительных расширений,приложений для работы с ВКонтакте.
    </p>
  </div>
  <h3>Как установить ярлык на рабочий стол?</h3>
  <div>
    <p>
    Переходим сюда <span style="-webkit-user-select: text;">chrome://apps/</span> наводим мышкой на иконку приложения,жмем правой кнопкой и выбираем "Создать ярлык..."
    </p>
  </div>
  <h3>Как удалить приложение?</h3>
  <div>
    <p>
    Переходим сюда <span style="-webkit-user-select: text;">chrome://apps/</span> наводим мышкой на иконку приложения,жмем правой кнопкой и выбираем "Удалить"
    </p>
  </div>
  <h3>Не грузятся картинки.</h3>
  <div>
    <p>
     Попробуйте отключить или включить кеширование.
    </p>
  </div>
  <h3>Не полный функционал.</h3>
  <div>
    <p>
    На данный момент в приложение добавляются новые функции постепенно проходя проверку для того,что-бы не засветить страничку пользователя онлайн. Но большинство функиций добавленны не будут т.к Мы не хотим создавать полную копию сайта и с некоторым функционалом смысл приложения теряется.
    </p>
  </div>
  </div>
*/}.toString().replace(/function \(\)\{\/\*/g, '').replace(/\*\/\}/g, '');
alertify.alert(s);
$("#accordion").accordion();
})

$('body').on('click', '#get_mess', function() {
 $("#content > #messages_form").html("");
 get_messages();
})

$('body').on('click', '#display', function() {
  $("#dialog.friend").hide();
  $("#dialog.setting").hide();
  $(".audio").hide();
  $("#display").hide();
})

$('body').on('click', '#resize', function() {
 chrome.app.window.current().minimize();
})
});