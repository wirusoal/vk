function obj(obj){var s="";for(prop in obj){if(typeof obj[prop]!="function"){s+="obj["+prop+"] = "+obj[prop]+"; "}}return s}
var sender=function(d,e,f){chrome.storage.local.get('vkAccessToken',function(c){$.ajax({url:'https://api.vk.com/method/'+d+'?'+e+'&access_token='+c.vkAccessToken,dataType:"json",success:function(a,b){f(a)}})})}
var loadImage=function(c,d){$.ajax({url:c,async:true,dataType:"blob",success:function(a,b){d(window.webkitURL.createObjectURL(a))}})}
function notification_messages(id){sender('users.get','user_ids='+id+'&fields=photo_100,sex',function(data){if(!data['error']){loadImage(data['response'][0]['photo_100'],function(d){var sex=(data['response'][0]['sex']==2)?'написал':'написала';notify('Оповешение VK inviz',data['response'][0]['first_name']+' '+data['response'][0]['last_name']+" "+sex+" сообщение.",d)})}}); var song=document.getElementById('beep');song.play()}
function notify(c,d,e){chrome.notifications.create('',{type:'basic',iconUrl:e,title:c,message:d,buttons:[{title:'Открыть диалоги',iconUrl:'images/message-xxl.png'}]},function(){});chrome.notifications.onClicked.addListener(function(a){chrome.notifications.clear(a,function(){})});chrome.notifications.onButtonClicked.addListener(function(a,b){chrome.app.window.current().restore();$(".messages_open_v2").click()})}
var longPong=function(e){chrome.storage.local.get('longPong',function(c){if($("#longpong").val()==''){var d=c['longPong']['ts']}else{var d=$("#longpong").val()}$.ajax({url:'http://'+c['longPong']['server']+'?act=a_check&key='+c['longPong']['key']+'&ts='+d+'&wait=25&mode=2',dataType:"json",async:true,success:function(a,b){$("#longpong").val(a['ts']);e(a)}})})}
function open_longPong(){sender('messages.getLongPollServer','v=5.25',function(a){var b={};b['ts']=a['response']['ts'];b['key']=a['response']['key'];b['server']=a['response']['server'];chrome.storage.local.set({'longPong':b},function(){})})}
function send_long_pong(){longPong(function(a){forLongPong(a['updates']);send_long_pong()})}
function formatDate(date,p){var diff=new Date()-date;var d=date;d=['0'+d.getDate(),'0'+(d.getMonth()+1),''+d.getFullYear(),'0'+d.getHours(),'0'+d.getMinutes()];for(var i=0;i<d.length;i++){d[i]=d[i].slice(-2)}var new_date=new Date();if(p==1){if(new_date.getDate()==date.getDate()){return d.slice(3).join(':')}else if(new_date.getDate()-1==date.getDate()){return'вчера'}else{return d[0]+' '+monthName[d[1]]}}else{if(diff<1000){return'только что'}var sec=Math.floor(diff/1000);if(sec<60){return sec+' сек. назад'}var min=Math.floor(diff/60000);if(min<60){return min+' мин. назад'}if(new_date.getDate()==date.getDate()){return'сегодня в '+d.slice(3).join(':')}else if(new_date.getDate()-1==date.getDate()){return'вчера в '+d.slice(3).join(':')}else{return d.slice(0,3).join('.')+' '+d.slice(3).join(':')}}}
function formatDates(date){var diff=new Date()-date;var d=date;d=['0'+d.getDate(),'0'+(d.getMonth()+1),''+d.getFullYear(),'0'+d.getHours(),'0'+d.getMinutes()];for(var i=0;i<d.length;i++){d[i]=d[i].slice(-2)}var new_date=new Date();if(new_date.getDate()==date.getDate()){return d.slice(3).join(':')}else if(new_date.getDate()-1==date.getDate()){return'вчера'}else{return d[0]+' '+monthName[d[1]]}}
//-------------------//
var mess_new = function(id,time,messages){
var text = '<div class="dialogs_msg_body old dialogs_msg_body_new_on"><div class="im_msg_text">'+((messages.length > 35) ? messages.substr(0, 35)+'...':messages)+'<img id="nabor" src="images/typing.gif"></div></div>';
$(".dialogs_row[uid='"+id+"'] .dialogs_row_t").find(".dialogs_msg_body").html(text);
$(".dialogs_row[uid='"+id+"'] .dialogs_row_t").find(".dialogs_date").html('<img src="images/time-check.png"> '+formatDates(new Date(time * 1000)));
}
//------------------//
function forLongPong(data){
if(data != undefined){
  for(var i = 0;i < data['length']; i++){
    //console.log(obj(data[i]));
    switch (data[i][0]) {
      case 8: //Появился в сети
         if(data[i][2] == 0){
           $(".dialogs_row[uid='"+(data[i][1]*-1)+"']").find(".dialogs_online").css("background-color",'#00cc35');
         }else{
           $(".dialogs_row[uid='"+(data[i][1]*-1)+"']").find(".dialogs_online").css("background-color",'#cc0043');
         }
        break
      case 9: //Пропал
         $(".dialogs_row[uid='"+(data[i][1]*-1)+"']").find(".dialogs_online").css("background-color",'#aeaeae');
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
          $(".dialogs_row[uid='"+updates_id+"']").css('background','#eef4fb'); 
            mess_new(updates_id,data[i][4],data[i][6]);
          $(".dialogs_row img[id^='id'][src='images/image_loader.gif']").parent().parent().parent().parent().parent().remove();
          if($(".dialogs_row[uid='"+updates_id+"']")[0]){
            $("#messages_form").prepend($(".dialogs_row[uid='"+updates_id+"']"));
          }else{
            $("#get_mess").click();
          }
           var song=document.getElementById('beep');song.play();
        if($("#messages").css("display")=="block" && updates_id == $("#uid_user").val()){ 
          $("#update_messages").click();
           var song=document.getElementById('beep');song.play()
        }
        break
      case 3: //Прочитал сообщение
        $(".dialogs_row[uid='"+data[i][3]+"']").removeClass('dialogs_new_msgs').css("background","");
        if(data[i][3] == $("#uid_user").val()){ $("*[id_messages]").css("background","");}
        break
      case 61:
        $(".dialogs_row[uid='"+data[i][1]+"']").find("#nabor").show();
        if(data[i][1] == $("#uid_user").val()){  $(".riso2").show(); }
        break
      default:
       // console.log(obj(data[i]));
    }
  }
 }else{ console.info('11111'); }
}


