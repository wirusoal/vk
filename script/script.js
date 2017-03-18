$(document).ready(function() {
$('body').on('click', "#cache", function(){
  if($("#cache").prop("checked") == true){
     chrome.storage.local.set({ 'cache': '1' });
  }else if($("#cache").prop("checked") == false){
     chrome.storage.local.set({ 'cache': '0' });
  }
})

$('body').on('click', "#sound_m", function(){

  if($("#sound_m").prop("checked") == true){
     chrome.storage.local.set({ 'sound': '1' });
  }else if($("#sound_m").prop("checked") == false){
     chrome.storage.local.set({ 'sound': '0' });
  }
})

chrome.storage.local.get('sound', function (result) {
   if(result.sound == '1'){ $("#sound_m").prop("checked", true); }
})

$('body').on('click', "#start_stena", function(){
  if($("#start_stena").prop("checked") == true){
     chrome.storage.local.set({ 'start_stena': '1' });
  }else if($("#start_stena").prop("checked") == false){
     chrome.storage.local.set({ 'start_stena': '0' });
  }
})

$('body').on('click', "#scroll_show", function(){
  if($("#scroll_show").prop("checked") == true){
     $("body").addClass("show-scrollbar");
     chrome.storage.local.set({ 'scroll_show': '1' });
  }else if($("#scroll_show").prop("checked") == false){
     chrome.storage.local.set({ 'scroll_show': '0' });
     $("body").removeClass("show-scrollbar");
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
  var smile_code = {'D83DDC05': 128005, 'D83DDC03': 128003, 'D83DDC00': 128000, 'D83CDF53': 127827, 'D83DDE30': 128560, 'D83DDE33': 128563, 'D83CDF50': 127824, 'D83CDF57': 127831, 'D83CDF56': 127830, 'D83DDE37': 128567, 'D83CDF54': 127828, 'D83CDF52': 127826, 'D83CDF6D': 127853, 'D83CDF51': 127825, '270C': 9996, 'D83DDE32': 128562, 'D83CDF69': 127849, 'D83CDF55': 127829, 'D83DDD25': 128293, 'D83DDC0F': 128015, 'D83DDC0E': 128014, 'D83DDC0C': 128012, 'D83DDD14': 128276, '26BD': 9917, '26BE': 9918, 'D83DDC18': 128024, 'D83DDC11': 128017, 'D83DDC13': 128019, 'D83DDC14': 128020, 'D83CDFBE': 127934, 'D83CDFB8': 127928, 'D83DDC1B': 128027, '2600': 9728, 'D83CDFB2': 127922, 'D83DDC1C': 128028, 'D83CDFB1': 127921, 'D83CDFB7': 127927, '2764': 10084, 'D83DDC1F': 128031, 'D83CDFAA': 127914, 'D83CDF7A': 127866, 'D83CDF7B': 127867, 'D83DDC60': 128096, 'D83DDC4C': 128076, 'D83DDC4D': 128077, 'D83DDC4E': 128078, 'D83CDFC6': 127942, 'D83CDFC1': 127937, 'D83CDFC0': 127936, 'D83DDCAA': 128170, '26C5': 9925, '26C4': 9924, 'D83DDE0A': 128522, 'D83DDE0B': 128523, 'D83DDE0C': 128524, 'D83DDE0D': 128525, 'D83DDE0E': 128526, 'D83DDE0F': 128527, 'D83CDF84': 127876, 'D83CDF81': 127873, 'D83CDF82': 127874, 'D83CDF83': 127875, 'D83DDC7B': 128123, 'D83DDE03': 128515, 'D83DDE06': 128518, 'D83DDE07': 128519, 'D83DDE08': 128520, 'D83DDE09': 128521, 'D83DDC1D': 128029, 'D83DDC42': 128066, 'D83CDF1F': 127775, 'D83DDC40': 128064, '261D': 9757, 'D83DDC46': 128070, 'D83DDC47': 128071, 'D83DDC48': 128072, 'D83DDC23': 128035, 'D83DDC24': 128036, 'D83CDF3D': 127805, 'D83CDF3A': 127802, 'D83CDF3C': 127804, 'D83CDF3B': 127803, 'D83DDE12': 128530, 'D83DDE10': 128528, 'D83DDE14': 128532, 'D83DDC2D': 128045, 'D83CDFE6': 127974, 'D83DDE2D': 128557, 'D83DDCA1': 128161, 'D83DDCA3': 128163, 'D83DDC3C': 128060, 'D83DDC3B': 128059, 'D83DDC3A': 128058, 'D83DDC51': 128081, 'D83DDC3D': 128061, 'D83CDF4A': 127818, 'D83CDF4B': 127819, 'D83CDF4C': 127820, 'D83CDF4D': 127821, 'D83CDF4E': 127822, 'D83CDF4F': 127823, 'D83DDC2E': 128046, 'D83CDF49': 127817, 'D83DDC31': 128049, 'D83DDC37': 128055, 'D83DDC36': 128054, 'D83DDC5C': 128092, '23F3': 9203, 'D83CDF45': 127813, 'D83CDF46': 127814, 'D83DDE22': 128546, 'D83DDE20': 128544, 'D83DDE21': 128545, 'D83DDC43': 128067, 'D83DDCAC': 128172, 'D83DDCAD': 128173, 'D83DDE28': 128552, 'D83DDE29': 128553, 'D83DDE1C': 128540, 'D83DDE1A': 128538, 'D83DDC2A': 128042, 'D83DDC2B': 128043, 'D83DDC2C': 128044, 'D83CDF39': 127801, 'D83CDF38': 127800, 'D83DDC2F': 128047, 'D83CDF37': 127799, 'D83DDC94': 128148};
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
    var date = new Date(date * 1000);
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
      v = ''
      if(METHOD == 'friends.get'){
        v = "&v=3.0"
      }else if(METHOD == 'execute.friend_onlline'){
        v = ""
      }else{
        v = "&v=5.25"
      }
      aja()
      .url('https://api.vk.com/method/' + METHOD + '?' + PARAMETERS + v +'&access_token=' + result.vkAccessToken)
      .type('json')
      .on('200', function(data){ callback(data); })
      .on('40*', function(response){ console.error("Что-то не так с запросом."); })
      .on('500', function(response){ console.error("Ошибка на стороне сервера."); })
      .go()
    })
  }
  var offsett = 0;
sender("stats.trackVisitor", "", function(res){});

  var get_messages = function(w) {
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
emoji_load();
    }

  //наведение на сообщение
  $('body').on('mouseover', '.dialogs_row', function(e) {
    $(this).addClass("dialogs_row_over");
    $(this).find(".delete_dialog").show();
    $(this).find(".open_dialog_window").show();
  });
  //Убираем мышку с сообщения
  $('body').on('mouseout', '.dialogs_row', function(e) {
    $(this).removeClass("dialogs_row_over");
    $(this).find(".delete_dialog").hide();
    $(this).find(".open_dialog_window").hide();
  });

  $('body').on('click', '.delete_dialog', function(e) {
    var uid = $(this).attr("uid");
    notie.confirm('Удалить диалог с пользователем', 'Да', 'Отмена', function(){
      $("#content > #messages_form > .dialogs_row[uid='"+uid+"']").remove();
      sender('messages.deleteDialog','user_id='+uid,function(data){
          if(data['response'] == 1){
          $(".messages_open_v2").click();
          notie.alert(1, 'Диалог с пользователем удален!', 1); 
        }
      })
    })
  });
  //--------------------------------------------------
  //--------------------------------------------------
  //наведение на друзей_меню
  var friend_get_offset = 0;
  var rara = 0;
  var lsl = 0
  function friend_get_all(e) {
    lsl = e;
    if (rara == 0) {
      var gets = 'friends.get';
    } else if (rara == 1) {
      var gets = 'execute.friend_onlline';
    }
    sender(gets, ((e == 1)?'user_id='+$("#uid_wall").val()+'&':'')+'order=hints&count=20&fields=online,last_seen,photo_50,sex,has_mobile&offset=' + friend_get_offset, function(data) {

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
            } else if (data['response'][i]['deactivated'] == 'banned') {
              var sex = (data['response'][i]['sex'] == 2) ? 'Забанен' : 'Забанена';
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
                var time = sex + ' ' + formatDate(data['response'][i]['last_seen']['time']);
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
        friend_get_all(lsl);
      }
    })
    //--------------------------------------------------
    //--------------------------------------------------
  function emoji_load(){
      $("img[code][code!='']").each(function() {
        loa('https://vk.com/images/emoji/' + $(this).attr('code') + '.png', $(this).attr('code'), function(charCode, d) {
          $("img[code='" + charCode + "']").attr("src", d);
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
//-------------------------------------------------//
function smile_history_load(){
  $("#history_smile").html("");
  //chrome.storage.local.set({'smile_history': null})
  chrome.storage.local.get('smile_history', function (result) {
    if(result['smile_history'] == null){
      var smile_codes = ["D83DDE0A","D83DDE03","D83DDE09"];
       for (var i = 0; i <= 2; i++) {
            $("#history_smile").append('<img style="margin-right:2px;" code="'+smile_codes[i]+'" src="">');
              loa('http://vk.com/images/emoji/' + smile_codes[i] + '.png', smile_codes[i], function(charCode, d) {
               $("img[code='" + charCode + "']").attr("src", d)
              })
          };
    var smile = {0:"D83DDE0A",1:"D83DDE03",2:"D83DDE09"};
    chrome.storage.local.set({'smile_history': smile})
    }else{
  chrome.storage.local.get('smile_history', function (result) {
      for (var i = 0; i <= 2; i++) {
       $("#history_smile").append('<img style="margin-right:2px;" code="'+result['smile_history'][i]+'"  src="">');
         loa('http://vk.com/images/emoji/' + result['smile_history'][i] + '.png', result['smile_history'][i], function(charCode, d) {
          $("img[code='" + charCode + "']").attr("src", d)
         })
      };
  })
    }
  })
}
 var messages_open = function(id,offs) {
  console.log(id)
  smile_history_load();
      if (id.substr(0, 5) == 'chat_') {
        var u_id = 0;
        var c_id = id.substring(5);
      } else {
        var u_id = id;
        var c_id = 0;
      }
      if(offs == null){
        var offs = 0;
      }
  sender('messages.getHistory', 'rev=0&offset=' + offs + '&user_id=' + u_id + '&chat_id=' + c_id, function(data) {
        var uid_user = [];
         for (var i = 0; i < data['response']['items'].length; i++) {
            if(uid_user.indexOf(data['response']['items'][i]['from_id']) == -1){ uid_user.push(data['response']['items'][i]['from_id']); }
         }
        //---
dd_messages(data,1,offs);
        //---
        sender('users.get', 'fields=photo_50&user_ids='+uid_user.join(","), function(data) {
         for(var s=0;s<data['response'].length;s++){
          if($("#messages").find('.im_log_author_chat_thumb > #id_'+data['response'][s]['id']+'[id!=""][src^="blob:"]').length>0){
               $(".im_log_author_chat_thumb > #id_" + data['response'][s]['id']).attr("src", $("#messages").find('.im_log_author_chat_thumb > #id_'+data['response'][s]['id']+'[id!=""][src^="blob:"]').attr("src"));
          }else{
             var photo_url = (data['response'][s]['photo_50'] == '/images/camera_c.gif') ? 'http://vk.com/images/camera_c.gif' : data['response'][s]['photo_50'];
             loa(photo_url, data['response'][s]['id'], function(id, d) {
               $(".im_log_author_chat_thumb > #id_" + id).attr("src", d);
             })
          }
          $(".im_log_author_chat_name[uid='"+data['response'][s]['id']+"']").html(data['response'][s]['first_name']);
          //$("#messages").scrollTop($("#messages").prop('scrollHeight'));
         }
        })
        if(offs == 0){
        $("#messages").scrollTop($("#messages").prop('scrollHeight'));
        }
      })
emoji_load();
    }

    $("#content > #messages").scroll(function() {
      if($("#content > #messages").prop('scrollHeight')-$("#content > #messages").prop('clientHeight') > $("#content > #messages").prop('scrollTop')+300){
        $("#arrow").show();
      }else if($("#content > #messages").prop('scrollHeight')-$("#content > #messages").prop('clientHeight') == $("#content > #messages").prop('scrollTop')){
        $("#arrow").hide();
      }
      var scrolltop = $("#content > #messages").prop('scrollTop');
        if(scrolltop == 0 && $("#table").find("div[id^='id']").length > 0){
          messages_open($("#uid_user").val(), $("#table").find("div[id^='id']").length);
          $("#messages").scrollTop(50);
        }
    })

    $("#arrow").click(function(){
      var curPos=$("#content > #messages").prop('scrollTop')
      var height=$("#content > #messages").prop('scrollHeight');
      var scrollTime=(height-curPos)/3;
      $("#messages").animate({"scrollTop":height},scrollTime);
    })
    //нажатие на сообщение
  $('body').on('click', 'div[class^="im_msg_text"]', function(e) {
    if($(this).parents(".dialogs_row").find(".delete_dialog").attr('uid') != undefined){
    iddd($(this).parents(".dialogs_row").find(".delete_dialog").attr('uid'));
    }
  });

  var iddd = function(id){
    $("#news").hide();
    $("#wall").hide();
    if (open_video == 1) { $(".button_video").click(); }
    if (button_group == 1) { $(".button_group").click(); }
    $("#messages > #table").html('');
    $('#messages').show();
    $('#send_messages').show();
    messages_open(id);
    $("#uid_user").val(id);
  }
  //Отправка сообщений
  function send_messages(uid, messages) {
    if (uid.substr(0, 5) == 'chat_') {
      var c_id = 'chat_id=' + uid.substring(5);
    } else {
      var c_id = 'user_id=' + uid;
    }
    sender('messages.send', c_id + '&message=' + encodeURIComponent(messages), function(data) {
      $("#text_messages").html("");
    })
  }

  function sending(){
    if ($("#text_messages").html() != '') {
      var str = $("#text_messages").html();
      var result = '';
      result += str.replace(/<img src=\"blob\:chrome-extension\:\/\/[\w\/-]*\" code=\"([A-Z0-9]+)\">/g, function(q, w) {
        console.info(w)
        return ' &#' + smile_code[w] + '; ';
      });
      // result = result.replace(/<div>/g,'%0a');
      result = result.replace(/<\/?[^>]+>/g,'');
      result = result.replace(/&nbsp;/g,'');
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
      sender('messages.markAsRead', 'peer_id=' + $("#uid_user").val() + '&message_ids=' + $("#messages > #table > div").last().attr('id_messages'), function(data) {})
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
        var title = data['response']['items'][i]['title'].substring(0, 50);
        var artist =  data['response']['items'][i]['artist'].substring(0, 90);
        text += '<div id="track" mus="player" duration="' + data['response']['items'][i]['duration'] + '" uid="' + data['response']['items'][i]['id'] + '" url="' + data['response']['items'][i]['url'] + '"><div class="track_play"></div><div class="track_title">' + artist + ' <br><span>' + title + '</span></div>'
        if ($('.search_input_music').val().length < 2) {
          text += '<div id="' + data['response']['items'][i]['id'] + '" owner_id="' + data['response']['items'][i]['owner_id'] + '" class="track_delete"><img src="images/delete_audio.png"></div>';
          text += '<div class="track_download"><a href="' + data['response']['items'][i]['url'] + '" download><img src="images/download_audio.png"></a></div>';
        } else if ($('.search_input_music').val().length > 2) {
          text += '<div id="' + data['response']['items'][i]['id'] + '" owner_id="' + data['response']['items'][i]['owner_id'] + '" class="track_add"><img src="images/add_audio.png"></div>';
          text += '<div class="track_download"><a href="' + data['response']['items'][i]['url'] + '" download><img src="images/download_audio.png"></a></div>';
        }
        text += '</div>';
        $(".audio .dialog_content").append(text);
      }
    });
  }

  var open_video = 0;
  window.audio = new Audio();
  $('#menu').on('click', '.button_audio', function() {
      if($("#contente").css("bottom") == "42px"){
        $("#contente").animate({"bottom":"0px"});
        $(".audio").effect('drop',{'mode':'hide','direction':'down'})
      }else{ 
        $(".audio").effect('drop',{'mode':'show','direction':'down'})
        $("#contente").animate({"bottom": "42px"}); 
      }
      if($(".audio > .dialog_content > #track").index() == -1){
        player_load(0);
      }
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

  $('#button_player').on('click', '.list', function() {
    $("#find_music").toggle();
    $(".audio > .dialog_content").effect('drop',{'mode':'show','direction':'down'})
    if($(".audio > .dialog_content").is(':visible')){
      $(".audio > .dialog_content").effect('drop',{'mode':'hide','direction':'down'})
    }
  })

  $('.audio > .dialog_content').on('click', '.track_add', function() {
    sender('audio.add', 'audio_id=' + $(this).attr('id') + '&owner_id=' + $(this).attr('owner_id'), function(data) {
      if (data['response'] > 0) {
        notie.alert(1, 'Трек добавлен в Ваши аудиозаписи.', 2);
      } else {
        notie.alert(3, 'Произошла ошибка при добавлении трека.', 2);
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
        notie.alert(3, 'Произошла ошибка при удалении трека.', 2);
      }
    })
  })

  function play_music(id, url, duration) {
    audio.src=url;
    audio.play();
    $(".track_plays").css('background-image', 'url("images/track_stop.png")');
    $(".name_music").html($("#track[uid='" + id + "'] > .track_title").text().slice(0, 50).toLowerCase());
    $(".time_music").html(time(duration));
  }

  $('body').on('click', '#track', function() {
    if ($(this).find(".track_play").css('background-image').indexOf("images/pausa_mini.png") > 0) {
      $(this).find(".track_play").css('background-image', 'url("images/play_mini.png")');
      $(".track_plays").css('background-image', 'url("images/track_play.png")');
      audio.pause();
    } else {
      $(".audio > .dialog_content").find(".track_play").css('background-image', 'url("images/play_mini.png")');
      $("body").find(".track_play").css('background-image', 'url("images/play_mini.png")');
      $(this).find(".track_play").css('background-image', 'url("images/pausa_mini.png")');
      $("body").find("#track[play]").removeAttr('play');
      $(this).attr('play', 'on');
      play_music($(this).attr('uid'), $(this).attr('url'), $(this).attr('duration'));
    }
  })

  $('#button_player').on('click', '.track_w', function() {
  	var next = $("body").find('#track[play="on"]').next().next();
    if(next.length > 0){
      next.click();
    }
  })

  $('#button_player').on('click', '.track_n', function() {
  	var prev = $("body").find('#track[play="on"]').prev().prev();
    if(prev.length > 0){
      prev.click();
    }
  })

  $('#button_player').on('click', '.track_plays', function() {
    if ($(".track_plays").css('background-image').indexOf("images/track_play.png") > 0) {
      if(audio.src == ''){
        $("#dialog_audio > .dialog_content").find("#track:eq(0)").click();
      } else {
        audio.play();
      }
      $(".audio > .dialog_content > #track:eq('" + $(".audio > .dialog_content > #track[play='on']").index() + "') .track_play").css('background-image', 'url("images/pausa_mini.png")');;
      $(".track_plays").css('background-image', 'url("images/track_stop.png")');
    } else {
      audio.pause();
      $(".audio > .dialog_content > #track:eq('" + $(".audio > .dialog_content > #track[play='on']").index() + "') .track_play").css('background-image', 'url("images/play_mini.png")');;
      $(".track_plays").css('background-image', 'url("images/track_play.png")');
    }
  })

var repeat = false;
  $('#button_player').on('click', '.repeat', function() {
   if(repeat){
    $(".repeat").css('background-image','url("images/repeat.png")');
   	audio.loop = false;
   }else{
    $(".repeat").css('background-image','url("images/repeat_on.png")');
    audio.loop = true;
   	repeat = true;
   }
  })

  audio.addEventListener('ended', function() {
  	if(repeat){
  	 audio.currentTime = 0;
  	 audio.play();
    }else{
     $(".track_w").click();
    }
  });
 
  audio.addEventListener('timeupdate', function() {
    var time_track = $(".audio > .dialog_content > #track[play='on']").attr("duration");
    var times = audio.currentTime;
    var new_time = (time_track / times) * 100;

    var polosa = ($("#scroka_time_music").width() / new_time) * 100;
    $(".scroka_time_music").width(polosa + "px");

  });

  $('.audio').on('click', '#scroka_time_music', function(e) {
    var time_track = $(".audio > .dialog_content > #track[play='on']").attr("duration");
    var s = e.pageX - 170;
    var click = ($("#scroka_time_music").width() / s) * 100;
    var new_time = (time_track / click) * 100;
    audio.currentTime = Math.ceil(new_time);
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

  // $('body').on('click', '.audio_messages', function() {
  //   $("#contente").css('bottom', '50px');
  //   $("#player").show();
  // })

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
      audio.volume = value / 100;

    },

    stop: function(event, ui) {},
  });

    //video
  $('#menu').on('click', '.button_video', function() {
    $("#news").hide();
    if (open_video == 0) {
      $('.search_input_video').val("");
      //$(".search_video_list").html("");
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

  $('#search_video, #wall').on('click', '.video_row_cont', function() {
    $("#dialog_video").dialog({ minHeight: 200, minWidth: 300 });
    $("#dialog_video").dialog( "option", "title", " " );
    $("#dialog_video").html('<webview style="width: 100%;height: '+($("#dialog_video").height())+'px;" src="' + $(this).attr('player') + '"></webview>');
    $("#dialog_video").dialog({
      close: function( event, ui ) { $(".ui-dialog-content").html(""); },
      resize: function( event, ui ) { $("#dialog_video").find("webview").height($("#dialog_video").height()); }
    });
  });
  //!!video/end


  var button_group = 0;
  $('#menu').on('click', '.button_group', function() {
      $("#news").hide();
      if (button_group == 0) {
        $(".search_input_group").val("");
        if (open_video == 1) {
          $(".button_video").click();
        };
        $("#wall").hide();
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
    var re = /\[(id|club)(\d+)\|([^\]]+)\]/gim;
    mess = mess.replace(re,function(s,nam,id,text){
       return "<a href=\"#\" class=\""+((nam == 'club')?'href_club':'href_user')+"\" uid=\""+((nam == 'club')?'-':'')+id+"\">" + text + "</a>";
    });
    text += '<div class="wall_post_text">' + Emoji.emojiToHTML(mess.replace(/\n/g, "<br />")) + '</div>';
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
          text += '<div class="media_desc"><a target="_blank" class="lnk" href="' + data['attachments'][q]['link']['url'] + '"><b class="fl_l "></b><span class="a">'+((data['attachments'][q]['link']['url'].indexOf('://vk.com/') > -1)?'Ссылка может нарушить вашу невидимость -> ':'') + data['attachments'][q]['link']['title'] + '</span></a></div>';
        } else if (data['attachments'][q]['type'] == 'video') {
          text += '<webview t="' + data['attachments'][q]['video']['id'] + '" style="width: 100%;" src=""></webview>';
          sender('video.get', 'videos=' + data['attachments'][q]['video']['owner_id'] + '_' + data['attachments'][q]['video']['id'] + '_' + data['attachments'][q]['video']['access_key'], function(data) {
            $("webview[t='" + data['response']['items'][0]['id'] + "']").attr("src", data['response']['items'][0]['player']);
          })
        } else if (data['attachments'][q]['type'] == 'audio') {
          text += '<br><div id="track" mus="repost_wall" class="audio_messages" duration="' + data['attachments'][q]['audio']['duration'] + '" uid="' + data['attachments'][q]['audio']['id'] + '" url="' + data['attachments'][q]['audio']['url'] + '"><div class="track_play"></div><div class="track_title">' + data['attachments'][q]['audio']['artist'] + ' - ' + data['attachments'][q]['audio']['title'] + '</div></div>';
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
    var post = 'count=20&extended=1&offset=' + offset_wall + '&owner_id=' + $("#uid_wall").val()
    sender(method, post, function(data) {
      var text = '';
      if(data['response']['count'] == 0){ text +='<center style="font-size: 11px;color: #7FA0B9;left: 200px;right: 0px;position: inherit;'+((c == 1)?'margin-top: 82px;':'')+'">Нет записей</center>'; }
      for (var i = 0; i < data['response']['items'].length; i++) {
        $("#comment_wall_on").val(data['response']['items'][i]['comments']['can_post']);
        if (data['response']['items'][i]['post_type'] == 'post') {
          text += '<div id="post' + data['response']['items'][i]['from_id'] + '_' + data['response']['items'][i]['id'] + '" class="wall_post_over" style="'+((i==0 && c == 1)?'margin-top: 82px;':'')+'"><div class="post_table">';

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
                  text += '<img style="padding-right:6px" ids="' + data['response']['items'][i]['copy_history'][0]['owner_id'] + '" src="images/image_loader.gif" width="30" height="30">';
                  loa(data['response']['groups'][w]['photo_50'], data['response']['items'][i]['copy_history'][0]['owner_id'], function(id, d) {
                    $("img[ids='" + id + "']").attr("src", d);
                  })
                  text += '</td>';
                  text += '<td>';
                  text += '<div class="published_by_title">' + data['response']['groups'][w]['name'] + ' </div>';
                  text += '<div class="published_by_date sm">' + formatDate(data['response']['items'][i]['copy_history'][0]['date']) + '</div>';
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
                  text += '<img style="padding-right:6px" ids="' + data['response']['items'][i]['copy_history'][0]['owner_id'] + '" src="images/image_loader.gif" width="30" height="30">';
                  loa(data['response']['profiles'][w]['photo_50'], data['response']['items'][i]['copy_history'][0]['owner_id'], function(id, d) {
                    $("img[ids='" + id + "']").attr("src", d);
                  })
                  text += '</td>';
                  text += '<td>';
                  text += '<div class="published_by_title">' + data['response']['profiles'][w]['first_name'] + ' ' + data['response']['profiles'][w]['last_name'] + ' </div>';
                  text += '<div class="published_by_date sm">' + formatDate(data['response']['items'][i]['copy_history'][0]['date']) + '</div>';
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
          var re = /\[(id|club)(\d+)\|([^\]]+)\]/gim;
          mess = mess.replace(re,function(s,nam,id,text){
              return "<a href=\"#\" class=\""+((nam == 'club')?'href_club':'href_user')+"\" uid=\""+((nam == 'club')?'-':'')+id+"\">" + text + "</a>";
          });
          text += '<div class="wall_post_text">' + mess.replace(/\n/g, "<br />") + '</div>';
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
                text += '<div class="media_desc"><a target="_blank" class="lnk" href="' + data['response']['items'][i]['attachments'][q]['link']['url'] + '"><b class="fl_l "></b><span class="a">'+((data['response']['items'][i]['attachments'][q]['link']['url'].indexOf('://vk.com/') > -1)?'Ссылка может нарушить вашу невидимость -> ':'') + data['response']['items'][i]['attachments'][q]['link']['title'] + '</span></a></div>';
              } else if (data['response']['items'][i]['attachments'][q]['type'] == 'video') {
                text += '<webview t="' + data['response']['items'][i]['attachments'][q]['video']['id'] + '" style="width: 100%;" src=""></webview>';
                sender('video.get', 'videos=' + data['response']['items'][i]['attachments'][q]['video']['owner_id'] + '_' + data['response']['items'][i]['attachments'][q]['video']['id'] + '_' + data['response']['items'][i]['attachments'][q]['video']['access_key'], function(data) {
                  $("webview[t='" + data['response'][1]['vid'] + "']").attr("src", data['response'][1]['player']);
                })
              } else if (data['response']['items'][i]['attachments'][q]['type'] == 'audio') {
                text += '<br><div id="track" mus="wall" class="audio_messages" duration="' + data['response']['items'][i]['attachments'][q]['audio']['duration'] + '" uid="' + data['response']['items'][i]['attachments'][q]['audio']['aid'] + '" url="' + data['response']['items'][i]['attachments'][q]['audio']['url'] + '"><div class="track_play"></div><div class="track_title">' + data['response']['items'][i]['attachments'][q]['audio']['artist'] + ' - ' + data['response']['items'][i]['attachments'][q]['audio']['title'] + '</div></div>';
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
          text += '<div class="reply_link_wrap"><div class="likes">' + data['response']['items'][i]['likes']['count'] + ' лайк' + declOfNum(data['response']['items'][i]['likes']['count'], ['', 'а', 'ов']) + '</div><small style="color:#999">' + formatDate(data['response']['items'][i]['date']) + '</small>';
          if ($("#uid_wall").val() != $(".avatar_img").attr('uid')) {
            text += '<span class="divide">|</span><small style="color:#999" id="repost_button" wall_id="wall' + data['response']['items'][i]['from_id'] + '_' + data['response']['items'][i]['id'] + '">Отправить себе на стену</small>';
          }
          text += '<div id="comment" post_id="' + data['response']['items'][i]['id'] + '">';
          if (data['response']['items'][i]['comments']['count'] == 0) {
            if ($("#comment_wall_on").val() == 1) {
              text += '<div class="send_comment" post_id="' + data['response']['items'][i]['id'] + '"><textarea placeholder="Введите комментарий и нажмите Ctrд + Enter"></textarea></div>'
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
      if ($('#uid_wall').val() == '') { $("body").find("div[class='wall_post_over'][id^=post]:eq(0)").css("margin-top","75px"); }
      if(c == 1){ $("#wall").find('div[id^=post]').css("left","200px"); }else if(c == 0){ $("#wall").find('div[id^=post]').css("left","0px"); }
    })
  }

//Новости --------------------------------------------------------
  var newsfeeds = 0;

  function read_news() {
    var method = 'newsfeed.get';
    var post = 'return_banned=0&count=20&start_from=' + $('#next_from').val();
    sender(method, post, function(data) {
      $('#next_from').val(data['response']['next_from']);
      for (var i = 0; i < data['response']['items'].length; i++) {
        var text = '';
        if (data['response']['items'][i]['post_type'] == 'post' && $("#news").find("#post"+data['response']['items'][i]['source_id']+'_'+data['response']['items'][i]['post_id']).length == 0) {
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
                  text += '<img style="padding-right:6px" ids="' + data['response']['items'][i]['copy_history'][0]['owner_id'] + '" src="images/image_loader.gif" width="30" height="30">';
                  loa(data['response']['groups'][w]['photo_50'], data['response']['items'][i]['copy_history'][0]['owner_id'], function(id, d) {
                    $("img[ids='" + id + "']").attr("src", d);
                  })
                  text += '</td>';
                  text += '<td>';
                  text += '<div class="published_by_title" id="' + data['response']['items'][i]['copy_history'][0]['owner_id'] + '">' + data['response']['groups'][w]['name'] + ' </div>';
                  text += '<div class="published_by_date sm">' + formatDate(data['response']['items'][i]['copy_history'][0]['date']) + '</div>';
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
                  text += '<img style="padding-right:6px" ids="' + data['response']['items'][i]['copy_history'][0]['owner_id'] + '" src="images/image_loader.gif" width="30" height="30">';
                  loa(data['response']['profiles'][w]['photo_50'], data['response']['items'][i]['copy_history'][0]['owner_id'], function(id, d) {
                    $("img[ids='" + id + "']").attr("src", d);
                  })
                  text += '</td>';
                  text += '<td>';
                  text += '<div class="published_by_title">' + data['response']['profiles'][w]['first_name'] + ' ' + data['response']['profiles'][w]['last_name'] + ' </div>';
                  text += '<div class="published_by_date sm">' + formatDate(data['response']['items'][i]['copy_history'][0]['date']) + '</div>';
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
          var re = /\[(id|club)(\d+)\|([^\]]+)\]/gim;
          mess = mess.replace(re,function(s,nam,id,text){
              return "<a href=\"#\" class=\""+((nam == 'club')?'href_club':'href_user')+"\" uid=\""+((nam == 'club')?'-':'')+id+"\">" + text + "</a>";
          });
          text += '<div class="wall_post_text">' + Emoji.emojiToHTML(mess.replace(/\n/g, "<br />")) + '</div>';
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
                  text += '<div class="media_desc"><a target="_blank" class="lnk" href="' + data['response']['items'][i]['attachments'][q]['link']['url'] + '"><b class="fl_l "></b><span class="a">'+((data['response']['items'][i]['attachments'][q]['link']['url'].indexOf('://vk.com/') > -1)?'Ссылка может нарушить вашу невидимость -> ':'') + data['response']['items'][i]['attachments'][q]['link']['title'] + '</span></a></div>';
              } else if (data['response']['items'][i]['attachments'][q]['type'] == 'video') {
                console.info(data['response']['items'][i]['attachments'][q]['video'])
                text += '<webview t="' + data['response']['items'][i]['attachments'][q]['video']['id'] + '" style="width: 100%;" src=""></webview>';
                sender('video.get', 'videos=' + data['response']['items'][i]['attachments'][q]['video']['owner_id'] + '_' + data['response']['items'][i]['attachments'][q]['video']['id'] + '_' + data['response']['items'][i]['attachments'][q]['video']['access_key'], function(data) {
                  // console.log(obj(data['response']['items'][0])); 
                  $("webview[t='" + data['response']['items'][0]['id'] + "']").attr("src", data['response']['items'][0]['player']);
                })
              } else if (data['response']['items'][i]['attachments'][q]['type'] == 'audio') {
                text += '<br><div id="track" mus="news" class="audio_messages" duration="' + data['response']['items'][i]['attachments'][q]['audio']['duration'] + '" uid="' + data['response']['items'][i]['attachments'][q]['audio']['aid'] + '" url="' + data['response']['items'][i]['attachments'][q]['audio']['url'] + '"><div class="track_play"></div><div class="track_title">' + data['response']['items'][i]['attachments'][q]['audio']['artist'] + ' - ' + data['response']['items'][i]['attachments'][q]['audio']['title'] + '</div></div>';
              } else if (data['response']['items'][i]['attachments'][q]['type'] == 'doc') {
                text += "<a target='_blank' href='" + data['response']['items'][i]['attachments'][q]['doc']['url'] + "'>" + data['response']['items'][i]['attachments'][q]['doc']['title'] + "</a> ";
              }
            }
          }
          text += '</div>';
          text += '</div>';
          text += '<div class="reply_link_wrap"><small style="color:#999">' + formatDate(data['response']['items'][i]['date']) + '</small>';
          if ($("#uid_wall").val() != $(".avatar_img").attr('uid')) {
            text += '<span class="divide">|</span><small style="color:#999" id="repost_button" wall_id="wall' + data['response']['items'][i]['from_id'] + '_' + data['response']['items'][i]['id'] + '">Отправить себе на стену</small>';
          }
          text += '</div>';
          text += '</div></div>';
          text += '</div></div>';
        }
        $("#news").append(text);
      }
    })
 emoji_load();
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

  function user_info(id,op) {
    if(id == undefined){ var id = $("#my_id").val(); }
    sender('users.get', ((id == undefined)?'':'user_ids='+id) + '&fields=photo_max,friend_status,photo_400_orig,relation,sity,bdate,status,online,home_town,last_seen,sex,can_post,can_write_private_message,wall_comments,connections,universities,site,counters,contacts', function(data) {
      if (!data['error']) {
        console.info(data['response'][0])
        $("#comment_wall_on").val(data['response'][0]['wall_comments']);
        var html = '<div id="user_info">';
        html += '<div id="user_name">' + data['response'][0]['first_name'] + ' ' + data['response'][0]['last_name'] + '</div>';
        var time = '';
        if (data['response'][0]['online'] == 1) {
          if (data['response'][0]['online_mobile'] == 1) {
            var colors = '#cc0043';
          }else {
            var colors = '#00cc35';
          }
        } else if (data['response'][0]['online'] == 0) {
          var time = ((data['response'][0]['sex'] == 2) ? 'Был' : 'Была') + ' ' + formatDate(data['response'][0]['last_seen']['time']);
          var colors = 'rgb(174, 174, 174)';
        }
        html += '<div id="user_online" style="width: 7px;height: 7px;border-radius: 10px;background-color:'+colors+';" header="'+time+'"></div>';
        html +='<div style="position: initial;margin-top: -8px;text-align: center;margin-bottom: 4px;font-size: 10px;color: #C1C1C1;">'+time+'</div>';
        
        html += '<center><div id="user_avatar" idd="o_'+data['response'][0]['uid']+'"></div>';
          loa(data['response'][0]['photo_max'], "o_"+data['response'][0]['uid'], function(id, d) {
           $("#user_avatar[idd='" + id + "']").css("background-image","url('"+d+"')");
          })
//        html += '<div id="user_status">' + data['response'][0]['status'] + '</div>';
        if (data['response'][0]['can_write_private_message'] == 1 && data['response'][0]['uid'] != $('.avatar_img').attr("uid")) {
          html +="<div id='sending_messages' style='margin: 13px;'>Написать</div>";
        }
        if (data['response'][0]['friend_status'] == 3 && data['response'][0]['uid'] != $('.avatar_img').attr("uid")) {
          html +="<div id='remove_user_friend' style='margin: 13px;'>Удалить друга</div>";
        }
        if ((data['response'][0]['friend_status'] == 0 || data['response'][0]['friend_status'] == 2) && data['response'][0]['uid'] != $('.avatar_img').attr("uid")) {
          html +="<div id='add_user_friend' style='margin: 13px;'>"+((data['response'][0]['friend_status'] == 0)? 'Отправить заявку':'Принять заявку')+"</div>";
        }

        html += '<div id="user_info_all">';
        if (data['response'][0]['home_town'] != '' && data['response'][0]['home_town'] != undefined) {
          html += '<div>Город: <span style="float:right;color: #7FA0B9">' + data['response'][0]['home_town'] + '</span></div>';
          html += '<div class="span_wall"> </div>';
        }
        if (data['response'][0]['bdate'] != '' && data['response'][0]['bdate'] != undefined) {
          var mes = ['', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
          var bdate = data['response'][0]['bdate'].split('.');
          var god = (bdate[2] === undefined) ? '' : bdate[2];
          html += '<div>'+((data['response'][0]['sex'] == 2) ? 'Родился:' : 'Родилась:') + '<span style="float:right;color: #7FA0B9;">'+bdate[0] + ' ' + mes[bdate[1]] + ' ' + god + '</span></div>';
          html += '<div class="span_wall"> </div>';
        }
        var relation_m = ['', 'не женат', 'есть подруга', 'помолвлен', 'женат', 'всё сложно', 'в активном поиске', 'влюблен'];
        var relation_g = ['', 'не замужем', 'есть друг', 'помолвлена', 'замужем', 'всё сложно', 'в активном поиске', 'влюблена'];
        if (data['response'][0]['relation'] != '' && data['response'][0]['relation'] != undefined) {
          html += '<div>Статус: <span style="float:right;color: #7FA0B9;">';
          if (data['response'][0]['sex'] == 2) {
            html += relation_m[data['response'][0]['relation']];
          } else {
            html += relation_g[data['response'][0]['relation']];
          }
          html += '</span></div><div class="span_wall"> </div>';
        }
        if (data['response'][0]['home_phone'] != '' && data['response'][0]['home_phone'] != undefined) {
          html += '<div>Домашний: <span style="float: right;color: #7FA0B9;white-space: nowrap;overflow: hidden;max-width: 105px;">' + data['response'][0]['home_phone'] + '</span></div>';
          html += '<div class="span_wall"> </div>';
        }
        if (data['response'][0]['mobile_phone'] != '' && data['response'][0]['mobile_phone'] != undefined) {
          html += '<div>Сотовый: <span style="float: right;color: #7FA0B9;white-space: nowrap;overflow: hidden;max-width: 116px;">' + data['response'][0]['mobile_phone'] + '</span></div>';
          html += '<div class="span_wall"> </div>';
        }
        if (data['response'][0]['skype'] != '' && data['response'][0]['skype'] != undefined) {
          html += '<div>Skype: <span style="float:right;color: #7FA0B9;">' + data['response'][0]['skype'] + '</span></div>';
          html += '<div class="span_wall"> </div>';
        }
        if (data['response'][0]['site'] != '' && data['response'][0]['site'] != undefined) {
          html +='<div>Сайт: <span style="color: #7FA0B9;float: right;white-space: nowrap;overflow: hidden;max-width: 133px;text-align: right;">';
          for(var i=0;i<data['response'][0]['site'].split(' ').length;i++){ if(data['response'][0]['site'].split(' ')[i] !=''){ html +='<a target="_blank" href="'+data['response'][0]['site'].split(' ')[i]+'">'+data['response'][0]['site'].split(' ')[i]+'</a><br>'}}
        html += '</span></div><div class="span_wall"> </div>';
        }
        html += '</div></center>';

        if(data['response'][0]['counters']['friends'] != 0){
          html += '<div id="title_friend"><div style="padding-top: 3px;padding-left: 13px;padding-right: 13px;"><div style="float:left;font-weight: bold;">'+data['response'][0]['counters']['friends']+'</div>&nbsp;Дру'+declOfNum(data['response'][0]['counters']['friends'], ['г', 'га', 'зей'])+' <div style="float:right;color:#C1C1C1;">'+data['response'][0]['counters']['followers']+' подписчик'+declOfNum(data['response'][0]['counters']['followers'], ['', 'а', 'ов'])+'</div></div></div>';
          html += '<table><tr><th><img src="images/image_loader.gif" id="friendwall0"></th><th><img src="images/image_loader.gif" id="friendwall1"></th><th><img src="images/image_loader.gif" id="friendwall2"></th><th><img src="images/tri.png" id="friendwall3"></th></tr></table>';
        }
        if(data['response'][0]['counters']['pages'] != 0){
          html += '<div id="title_sub" style="margin-top: 0px;"><div style="padding-top: 3px;padding-left: 13px;padding-right: 13px;float:left;"><div style="float:left;font-weight: bold;">'+data['response'][0]['counters']['pages']+'</div>&nbsp;интересн'+declOfNum(data['response'][0]['counters']['pages'], ['ая', 'ые', 'ых'])+' страниц'+declOfNum(data['response'][0]['counters']['pages'], ['а', 'ы', ''])+'</div></div>';
          html += '<table style="margin: 3px;" id="table_sub_title"><tr><td rowspan="2"><img id="imageSubscriptions0" src="images/image_loader.gif"></td><td><div id="nameSubscriptions0"></div></td></tr>';
          if(data['response'][0]['counters']['pages'] != 1){
            html += '<tr><td><div id="statusSubscriptions0"></div></td></tr><tr><td rowspan="2"><img id="imageSubscriptions1" src="images/image_loader.gif"></td><td><div id="nameSubscriptions1"></div></td></tr><tr><td><div id="statusSubscriptions1"></div></td></tr>';
          }
          html += '</table>';
        }
        if(data['response'][0]['counters']['videos'] != 0){
          html += '<div id="title_videowall"><div style="padding-top: 3px;padding-left: 13px;padding-right: 13px;"><div style="float:left;font-weight: bold;">'+data['response'][0]['counters']['videos']+'</div>&nbsp;видеозапис'+declOfNum(data['response'][0]['counters']['videos'], ['ь', 'и', 'ей'])+'</div></div>';
          html += '<table style="margin: 3px;"><tr><td><img src="images/image_loader.gif" id="wallvideo0"></td>'+((data['response'][0]['counters']['videos'] != 1)? '<td><img src="images/image_loader.gif" id="wallvideo1"></td>':'')+'</tr><tr><td><div id="wallnamevideo0"></div></td>'+((data['response'][0]['counters']['videos'] != 1)? '<td><div id="wallnamevideo1"></div></td>':'')+'</tr></table>';
        }
        html += '<div id="menus"><div class="users clicks">Стена</div><div class="users">Видео</div><div class="users">Фото</div></div>';
        $("#wall").prepend(html);
        if (data['response'][0]['uid'] == $('.avatar_img').attr("uid")) {
          $("#user_info").css("height", "200px");
        }
        loa(data['response'][0]['photo_200_orig'], id, function(id, d) {
          $("img[idse='" + id + "']").attr("src", d);
        })
        //--друзья--//
        sender('friends.get', 'count=3&fields=photo_50&order=random&name_case=nom&user_id=' + id, function(data) {
         for (var i = 0; i < data['response'].length; i++) {
            $("img[id='" +('friendwall'+i)+ "']").attr("title", data['response'][i]['first_name']+" "+data['response'][i]['last_name']);
            loa(data['response'][i]['photo_50'], 'friendwall'+i, function(id, d) {
              $("img[id='" + id + "']").attr("src", d);
            })
         };
        })
        //--подсписки--//
        sender('users.getSubscriptions', 'count=2&fields=status&extended=1&user_id=' + id, function(data) {
         for (var i = 0; i < data['response']['items'].length; i++) {
            $("#nameSubscriptions"+i).html(data['response']['items'][i]['name']);
            $("#statusSubscriptions"+i).html((data['response']['items'][i]['status'] !='')? data['response']['items'][i]['status']: (data['response']['items'][i]['type'] == 'page')? 'страница':'');
            loa(data['response']['items'][i]['photo_50'], 'imageSubscriptions'+i, function(id, d) {
              $("img[id='" + id + "']").attr("src", d);
            })
         };
        })
        //---видео--//
        if(data['response'][0]['counters']['videos'] != 0){
        sender('video.get', 'count=2&owner_id=' + id, function(data) {
            for (var i = 0; i < data['response']['items'].length; i++) {
              $("#wallnamevideo"+i).html(data['response']['items'][i]['title']);
              loa(data['response']['items'][i]['photo_130'], 'wallvideo'+i, function(id, d) {
                $("img[id='" + id + "']").attr("src", d);
              })
            }
        })
        }

        if(data['response'][0]['counters']['photos'] == 0 && data['response'][0]['status'] == ""){
        op = 0;
        }else{
        var html = "<div id=\"status_photo\">"+
        "<table><tr><td><div style=\"width: 178px;height: 22px;color: #ADAEAF;font-size: 11px;\">"+data['response'][0]['status']+"</div></td><td rowspan=\"2\"><div id=\"user_photo_wall\"></div></td></tr><tr><td><div id='allphotouser' style='float:right;color: #ADAEAF;font-size: 11px;cursor: pointer;'>Все альбомы</div></td></tr></table>"+
        "</div>";
        $("#user_info").after(html);
        }

        if(data['response'][0]['counters']['photos'] != 0){
        sender('photos.get', 'album_id=wall&count=6&rew=1&extended=1&owner_id=' + id, function(data) {          
            for (var i = 0; i < data['response']['items'].length; i++) {
              $("#user_photo_wall").append("<img src=\"\" id=\"user_photo_wall_"+data['response']['items'][i]['id']+"\">");
              loa(data['response']['items'][i]['photo_130'], 'user_photo_wall_'+data['response']['items'][i]['id'], function(id, d) {
                $("img[id='" + id + "']").attr("src", d);
              })
            }
        })
        }

      }
    $("#uid_wall").val(id);
    read_wall(op);
    })
  }

  function panel_load(){
    $("#wall").append("");

 
    //$("#panel_load").show();
  }

  $('body').on('click', '#friendwall3',function(){
    rara = 0
    friend_get_all(1);
    $("#dialog.friend").find(".dialog_content").html('');
    $("#dialog.friend").toggle();
    $("#display").show();
  })

  $('body').on('click', '#add_user_friend',function(){
    sender('friends.add', 'v=5.42&user_id=' + $('#uid_wall').val(), function(data) {
      if(data['response'] == 1){
        notie.alert(1, 'Заявка на добавление в друзья успешно отправлена.', 2); 
      }else if(data['response'] == 2){
        notie.alert(1, 'Вы успешно добавили пользователя в друзья.', 2); 
        $("#add_user_friend").remove();
      }else{
        notie.alert(2, 'Заявку на добавление в друзья не возможно отправить.', 2); 
      }
    })
  }); 

  $('body').on('click', '#remove_user_friend',function(){
    sender('friends.delete', 'user_id=' + $('#uid_wall').val(), function(data) {
      if(data['response']['success'] == 1){
        notie.alert(1, 'Пользователь удален из списка друзей.', 2); 
        $("#remove_user_friend").remove();
      }
    })
  });

  $('body').on('click', '#allphotouser',function(){
    $("#wall").find("div[id^='post']").remove();
    $("#wallpost").remove();
    $("#wall").append("<div id='wallpost' style='"+(($("#wall").is("#status_photo"))?'':'padding-top: 80px;')+"'></div>");
    $(".users:eq(2)").click();
  })

  $('body').on('click', '#title_videowall',function(){
    $("#wall").find("div[id^='post']").remove();
    $("#wallpost").remove();
    $("#wall").append("<div id='wallpost' style='"+(($("#wall").is("#status_photo"))?'':'padding-top: 80px;')+"'></div>");
    $(".users:eq(1)").click();
  })

  $('body').on('click', '.feedback_row_group_names, .feedback_row_photo, .user_block_avatar, #user_block_name, .dialogs_user, .dialogs_photo, .avatar_img, .wall_text_name, .post_image, .my_wall, .href_user', function() {
    $("#news").hide().html("");
    if (open_video == 1) { $(".button_video").click(); }
    if (button_group == 1) { $(".button_group").click(); }
    offset_wall = 0;
    $("#wall").html("");
    user_info($(this).attr("uid"),1);
    panel_load();
    $("#wall").show();
    $("#wall").animate({ left: "64px" }, 100)
    $("#wall").find(".wall_post_over").width($(window).width() - $("#wall").position().left-260);
  });

  $('body').on('mouseover', '#messages_form', function(e) {
    if($("#wall").css("display") == 'block'){
      $("#wall").css("left","28%");
      $("#wall").find(".wall_post_over").width($(window).width() - $("#wall").position().left-(($(".wall_post_over").position().left == 0 && $("#wall").position().left != 64)? 60:($(".wall_post_over").position().left != 0 && $("#wall").position().left != 64)? 260:200));
    }
  });

  $('body').on('mouseover', '#wall', function(e) {
      $("#wall").css("left","64px");
      $("#wall").find(".wall_post_over").width($(window).width() - $("#wall").position().left-(($(".wall_post_over").position().left == 0)? 60:260));    
  });

$('body').on('click', '.group_list_row, .published_by_wrap, .href_club', function() {
    $("#news").hide().html("");
    if (open_video == 1) { $(".button_video").click(); }
    if (button_group == 1) { $(".button_group").click(); }
    offset_wall = 0;
    $("#wall").html("");
    $("#uid_wall").val($(this).attr("uid"));
    //user_info($(this).attr("uid"),0);//tempos
    read_wall(0)
    $("#wall").show();
  });

  $("#wall").scroll(function() {
    var scrolltopi = $('#wall').prop('scrollTop');
    var scrollheighti = $('#wall').prop('scrollHeight');
    var windowheighti = $('#wall').prop('clientHeight');
   // console.log("scrolltopi="+scrolltopi+" scrollheighti="+scrollheighti+" windowheighti="+windowheighti);
   if(parseInt($("#uid_wall").val()) > 0){
   if(scrolltopi > $("#user_info").height()){
    $("#panel_load").hide();
    $("#wall").find("div[id^='post']").css("left", "0px");
   }else if(scrolltopi < $("#user_info").height()){
    $("#panel_load").show();
    $("#wall").find("div[id^='post']").css("left", "200px");
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
    sender('wall.repost', 'object=' + $(this).attr("wall_id"), function(data) {
      if (data['response']['success'] == 1) {
        notie.alert(1, 'Запись опубликована на вашей стене.', 2); 
      } else {
        notie.alert(2, 'Репост записи не удался.', 2); 
      }
    })
  });

  $('body').on('click', '.delete_post', function() {
    $("#histori").val("post" + $(this).attr("owner_id") + "_" + $(this).attr("post_id"));
    sender('wall.delete', 'post_id=' + $(this).attr("post_id"), function(data) {
      if (data['response'] == 1) {
        $("#" + $("#histori").val()).remove();
      } else {
        notie.alert(2, 'Удаление записи не удалось произвести.', 2);
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
    var re = /\[(id|club)(\d+)\|([^\]]+)\]/gim;
    mess = mess.replace(re,function(s,nam,id,text){
       return "<a href=\"#\" class=\""+((nam == 'club')?'href_club':'href_user')+"\" uid=\""+((nam == 'club')?'-':'')+id+"\">" + text + "</a>";
    });
    text += '<div class="wall_post_text">' + mess.replace(/\n/g, "<br />") + '</div>';
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
            text += '<div class="media_desc"><a target="_blank" class="lnk" href="' + data['attachments'][q]['link']['url'] + '"><b class="fl_l "></b><span class="a">'+((data['attachments'][q]['link']['url'].indexOf('://vk.com/') > -1)?'Ссылка может нарушить вашу невидимость -> ':'') + data['attachments'][q]['link']['title'] + '</span></a></div>';
        } else if (data['attachments'][q]['type'] == 'video') {
          text += '<webview t="' + data['attachments'][q]['video']['id'] + '" style="width: 100%;" src=""></webview>';
          sender('video.get', 'videos=' + data['attachments'][q]['video']['owner_id'] + '_' + data['attachments'][q]['video']['id'] + '_' + data['attachments'][q]['video']['access_key'], function(data) {
            //   console.log(obj(data['response'][1])); 
            $("webview[t='" + data['response'][1]['vid'] + "']").attr("src", data['response'][1]['player']);
          })
        } else if (data['attachments'][q]['type'] == 'audio') {
          text += '<br><div id="track" mus="comment" class="audio_messages" duration="' + data['attachments'][q]['audio']['duration'] + '" uid="' + data['attachments'][q]['audio']['aid'] + '" url="' + data['attachments'][q]['audio']['url'] + '"><div class="track_play"></div><div class="track_title">' + data['attachments'][q]['audio']['artist'] + ' - ' + data['attachments'][q]['audio']['title'] + '</div></div>';

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
                text += '<div class="published_by_date sm"><div style="float: left;margin-right: 6px;">' + formatDate(data['response']['items'][i]['date']) + '</div>   ';
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
                text += '<div class="published_by_date sm"><div style="float: left;margin-right: 6px;">' + formatDate(data['response']['items'][i]['date']) + '</div>    ';
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
        var lalal = '<div class="send_comment" post_id="' + $("#post_id").val() + '"><textarea placeholder="Введите комментарий и нажмите ctrl+enter для его размещения"></textarea></div>'

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
    if($("#uid_wall").val() == ""){ $("#uid_wall").val("0"); }
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
    chrome.storage.local.remove('menu', function() {
      console.log("storage clear")
    })
  }

  $('#dialog.setting').on('click', '#new_user', function(e) {
    chrome.storage.local.remove('vkAccessToken', function(){
      chrome.app.window.current().close();
      chrome.app.window.create('auth.html', {
                frame: "chrome",
                'bounds': {
                  'width': 800,
                  'height': 600
                },
                minWidth: 600,
                minHeight: 500
      });
    })
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
      $("#wallpost").append(text);
    })
  }

  function album_user() {
    sender('photos.getAlbums', 'need_covers=1&offset=' + offset_wall + '&owner_id=' + $('#uid_wall').val(), function(data) {
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
      $("#wallpost").append(text);
    })
  }

  var load_album_users = 0;

  function load_album_user(id) {
    load_album_users = id;
    sender('photos.get', 'count=40&offset=' + offset_wall + '&owner_id=' + $('#uid_wall').val() + '&album_id=' + id + '&offset=' + offset_wall, function(data) {
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
      $("#wallpost").append(text);
    })
  }

  //открываем стену пользователя
  $('#wall').on('click', '.users:eq(0)', function() {
      if ("o_"+$('#uid_wall').val() == "o_"+$('.user_avatar').attr("idd")) {
        $("#post_wall").show();
        $("#user_info").css("height", "200px");
      }
      offset_wall = 0;
      $('.users:eq(0)').addClass('clicks');
      $('.users:eq(1)').removeClass('clicks');
      $('.users:eq(2)').removeClass('clicks');
      read_wall(1);
    })
    //открываем видео пользователя
  $('#wall').on('click', '.users:eq(1)', function() {
    if ("o_"+$('#uid_wall').val() == "o_"+$('.user_avatar').attr("idd")) {
      $("#post_wall").hide();
      $("#user_info").css("height", "135px");
    }
    offset_wall = 0;
    $('.users:eq(0)').removeClass('clicks');
    $('.users:eq(1)').addClass('clicks');
    $('.users:eq(2)').removeClass('clicks');
    video_user();
  })

  var album_users = 0;
  //открываем фото пользователя
  $('#wall').on('click', '.users:eq(2)', function() {
      if ("o_"+$('#uid_wall').val() == "o_"+$('.user_avatar').attr("idd")) {
        $("#post_wall").hide();
        $("#user_info").css("height", "135px");
      }
      offset_wall = 0;
      $('.users:eq(0)').removeClass('clicks');
      $('.users:eq(1)').removeClass('clicks');
      $('.users:eq(2)').addClass('clicks');
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
    offset_wall = 0;
    $("#wallpost").html("");
    load_album_user($(this).attr('t_album'));
    album_users = 1;
  })

  $('body').on('click', '#update_messages', function() {
    $("#messages > #table").html('');
    messages_open($("#uid_user").val());
  })

function new_friend() {
    //Смотрим есть ли новые друзья
  sender('friends.getRequests', 'out=0', function(data) {
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
   $("body").find("*[uptime]:eq("+i+")").html(formatDate($("body").find("*[uptime]:eq("+i+")").attr("uptime")))
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
$("#messages_form .dialogs_online:hidden").show();
if(timers){
 setTimeout(pis, 8000);
}
}

  function start() {
      chrome.storage.local.get('vkAccessToken', function(result) {
        if (result.vkAccessToken != '') {
          chrome.storage.local.get('scroll_show', function (result) {
           if (result.scroll_show == '' || result.scroll_show == undefined || result.scroll_show == '0') {
              document.getElementById("scroll_show").checked = false;
              $("body").removeClass("show-scrollbar");
            }else{
              document.getElementById("scroll_show").checked = true;
              $("body").addClass("show-scrollbar");
            }
          });

          new_friend();
          ti();
          pis();
          updates();
          open_longPong();
          send_long_pong();
          //update_new();
          timer = true;
          //notification_load();
          chrome.storage.local.get('start_stena', function (result) {
           if (result.start_stena == '' || result.start_stena == undefined || result.start_stena == '0') {
              document.getElementById("start_stena").checked = false;
              setTimeout(function(){
                iddd($("#messages_form").find(".dialogs_row:eq(0)").attr("uid"));
              }, 1000);
            }else{
            document.getElementById("start_stena").checked = true;
            $(".my_wall").click();
            //get_messages();
            }
          });
        }
      });
    }
    //start();
    start();

  //images load user
  $('#send_messages').on('click', '#send_doc', function() {
    alertify.set({ labels: { ok : "Закрыть"} });
    $.ajax({
      url: 'http://vkinviz.ru/',
      dataType: "html",
      success: function(data, textStatus) {
        chrome.storage.local.get('vkAccessToken', function(result) {
          alertify.alert('<webview style="width: 100%;height: 248px;" id="image_load" src="http://vkinviz.ru/api/post_photo.php?uid=' + $('#uid_user').val() + '&token=' + result.vkAccessToken + '"></webview>'); // HTML
          $(".alertify-dialog").css("padding", '0px');
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
    sender('wall.deleteComment', 'owner_id=' + $("#uid_wall").val() + "&comment_id=" + $(this).attr("comment_id"), function(data) {
      if (data['response'] == 1) {
        $(".reply_table[comment_id='" + $("#histori").val() + "']").remove();
      } else if (data['error']['error_code'] == 211) {
        notie.alert(2, 'Вы не можете удалить этот комментарий.', 2);
      }
    })
  })

  $('#wall').on('keydown', '#comment > div.send_comment > textarea', function(e) {
    if (e.ctrlKey && e.keyCode == 13) {
        //var from_group = 1;
        var from_group = 0;
      sender('wall.addComment', 'from_group=' + from_group + '&owner_id=' + $("#uid_wall").val() + "&post_id=" + $(this).parent().attr("post_id") + "&text=" + $(this).val(), function(data) {
        if (data['response']['cid'] > 0) {
          notie.alert(1, 'Комментарий добавлен.Обновите страничку.', 2);
        } else if (data['error']['error_code'] == 213) {
          notie.alert(2, 'Нет доступа к комментированию записи.', 2);
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
    top: "-185px",
    }, 300, function() {
    load_smile();
  })
  })

  $(".tools_sticker").click(function(){
    $(".smiles").html("");
    $( "#smile" ).animate({
    width: "400px",
    height: "300px",
    top: "-301px",
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
    var ss = Object.keys(smile_code);
    for (var i = 0; i < ss.length; i++) {
      $(".smiles").append('<img smile="" code="'+ss[i]+'" src="">');
      if(i == ss.length-1){ emoji_load(); }
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
    var ds = $(this).attr("code");
    pasteHtmlAtCaret(" <img src='" + $(this).attr("src") + "' code='"+$(this).attr("code")+"'> ");
    chrome.storage.local.get('smile_history', function (result) {
     var smile = {0:ds,1:result['smile_history'][0],2:result['smile_history'][1]};
    chrome.storage.local.set({'smile_history':smile},function(){ smile_history_load() });
    
    })
  })

  $('#history_smile').on('click', 'img', function(e) {
    document.getElementById('text_messages').focus();
    pasteHtmlAtCaret(" <img src='" + $(this).attr("src") + "' code='"+$(this).attr("code")+"'> ");
  })

  $('#menu').on('click', '.new_friend', function(e) {
    sender('friends.getRequests', 'out=0&sort=0', function(data) {
      sender('users.get', 'user_ids=' + data['response']['items'].join(",") + '&fields=online,last_seen,photo_50,sex,has_mobile', function(data) {
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
                  var time = sex + ' ' + formatDate(data['response'][i]['last_seen']['time']);
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
        notie.alert(1, 'Пользователь добавлен в друзья', 2);
        $("#user_block_new[uid='" + $("#histori").val() + "']").remove();
      } else {
        notie.alert(3, 'Ошибка.Невозможно добавить пользователя в друзья', 2);
      }
    })
  });

  $('body').on('click', '#user_block_del_friend', function(e) {
    $("#histori").val($(this).attr("user_id"));
    sender('friends.delete', 'v=5.24&user_id=' + $(this).attr("user_id"), function(data) {
      if (data['response'] != '') {
        notie.alert(1, 'Заявка в друзья отклонена', 2);
        $("#user_block_new[uid='" + $("#histori").val() + "']").remove();
      } else {
        notie.alert(3, 'Неизвестная ошибка при удалении пользователя', 2);
      }
    })
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
    user_info(id,0);
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
    notie.input('Вставьте ссылку на пользователя или группу', 'Продолжить', 'Отменить', 'ссылка', 'http://vk.com/vkinviz', function(str) {
    	var re = /http?[^\s]:\/\/vk.com\/(.*)/;
    	if(re.test(str)){
    	 str = re.exec(str);
    	  var re2 = /(club|public|id)(.*)/;
    	  if(re2.test(str[1])){
            str2 = re2.exec(str[1]);
            open_wall_url(str2[1],str2[2]);
          }else{
          	sender('utils.resolveScreenName', 'screen_name='+str[1] , function(data) {
             open_wall_url(data['response']['type'],data['response']['object_id']);
           })
          }
        }else{
         notie.alert(3, 'Проверьте правильность ссылки.', 2);
        }
      })
    }
})

//----размеры окна-----//

  $(window).resize(function() {
    var obj = {};
    obj['width'] = $(window).width();
    obj['height'] = $(window).height();
    chrome.storage.local.set({
      'resize': obj
    })
    $("#wall").find(".wall_post_over").width($(window).width() - $("#wall").position().left-260);
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
                var time = sex + ' ' + formatDate(data[i]['last_seen']['time']);
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
    sender('friends.get', 'order=hints&fields=online,last_seen,photo_50,sex,has_mobile', function(data) {
     var finded = new Array();
     for(var i in data['response']['items']){
      if(data['response']['items'][i].first_name.toLowerCase().indexOf($('#friend_search_pole input').val().toLowerCase()) != -1 || data['response']['items'][i].last_name.toLowerCase().indexOf($('#friend_search_pole input').val().toLowerCase()) != -1) finded.push(data['response']['items'][i]);
     }

     if(obj(finded) == ''){
      notie.alert(2, 'Пользователь не найден', 2);
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

$('#menu').on('click', '.settings', function() { 
  //$("#dialog.setting").toggle();
  $("#dialog.setting").toggle();
  $("#display").toggle(); 
})
$('#setup_key').on('click', 'input[name="keys"]', function() {
  chrome.storage.local.set({'key_send':  $(this).attr('value')}, function () { notie.alert(1, 'Выбор сделан.', 2); })
})

$('body').on('click', '#get_mess', function() {
 $("#content > #messages_form").html("");
 get_messages();
})

$('body').on('click', '#display', function() {
  $("#dialog.friend").hide();
  $("#dialog.setting").hide();
  $("#display").hide();
  // menu_hide(1);
})

$('body').on('click', '#send_photo', function() {
alertify.alert('<div style="height: 396px;position: relative;top: -16px;left: -7px;"><div id="info_camera">Тестовая функция. Не работает на некоторых камерах.</div><video id="vid" style="width: 555px;height: 413px;" autoplay></video><div id="click_cam"></div></div>')
});

function clear_friend(){
  sender('friends.getRequests', 'out=1', function(data) {
    if(data['response'].length > 0){
     sender('users.get', 'user_ids=' + data['response'].join(',') + '&name_case=acc', function(data) { 
       var text ='Удалить людей которые Вас удалили?<br>';
        for (var i = 0; i < data['response'].length; i++) {
          text +=data['response'][i]['first_name']+" "+data['response'][i]['last_name']+((i!=data['response'].length-1)?', ':'');
          if(i > 5){
            i = data['response'].length;
            text +=" и других."
          }
        }
        notie.confirm(text, 'Да', 'Нет', function() {
          for (var i = 0; i < data['response'].length; i++) {
            sender('friends.delete', 'user_id='+data['response'][i]['uid'], function(data) {})
          }
          notie.alert(1, 'Люди которые Вас удалили были удалены!', 2); 
        });
       })
    }else{
      notie.alert(4, 'Вас ни кто не удалил из друзей!', 2);
    }
  })
}

$('.setting').on('click', '#remove_no_user', function() {
   clear_friend();
})

});