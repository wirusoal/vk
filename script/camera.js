$(document).ready(function() {
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    var video;
    var localMediaStream = null;
$('body').on('click', '#send_photo', function() {
    video = document.querySelector("#vid");
  
    var onCameraFail = function (e) {
        console.log('Camera did not work.', e);
    };
  navigator.webkitGetUserMedia({audio: false, video: true}, function(stream) {
    video.src = window.webkitURL.createObjectURL(stream);
    localMediaStream = stream;
}, onCameraFail);  

$('body').on('click', '#alertify-ok', function() {
  video.pause();
  localMediaStream.stop();
})

})
$('body').on('click', '#click_cam', function() {
  $("#click_cam").hide();
  ctx.drawImage(video, 0, 0);
  var canvasData = canvas.toDataURL("image/png");
  chrome.storage.local.get('vkAccessToken', function(result) {
   $.post('http://vkinviz.ru/api/camera_load.php', { imgData:canvasData, uid:$('#uid_user').val(), token:result.vkAccessToken }).done(function() {  $("#click_cam").show(); });
  })
})

})