$(document).ready(function () {
var url_token = 'https://oauth.vk.com/authorize?client_id=3915697&scope=friends,messages,offline,photos,audio,video,docs,wall,groups,notifications&redirect_uri=http://oauth.vk.com/blank.html&display=popup&response_type=token';
var webview = document.getElementById("auth_id");
webview.src = url_token;

function obj(obj){var s="";for(prop in obj){if(typeof obj[prop]!="function"){s+="obj["+prop+"] = "+obj[prop]+"; "}}return s}

    var vkAccessToken;

    function getUrlParameterValue(url, parameterName) {

        var urlParameters = url.substr(url.indexOf("#") + 1),
            parameterValue = "",
            index,
            temp;

        urlParameters = urlParameters.split("&");

        for (index = 0; index < urlParameters.length; index += 1) {
            temp = urlParameters[index].split("=");

            if (temp[0] === parameterName) {
                return temp[1];
            }
        }

        return parameterValue;
    }


//exit();
    var loadstop = function () {
            var url = $("#auth_id").attr("src");
            if (url.indexOf('oauth.vk.com/blank.html#access_token=') > -1) {
                vkAccessToken = getUrlParameterValue(url, 'access_token');
                chrome.storage.local.get('vkAccessToken', function (result) {
                    console.info(vkAccessToken);
                result['vkAccessToken'][result['vkAccessToken'].length] = vkAccessToken;
                chrome.storage.local.set({ 'active': result['vkAccessToken'].length })
                chrome.storage.local.set({//1
                    'vkAccessToken': result['vkAccessToken']
                }, function () {
                    if(window.location['hash'] != '#add'){
                      chrome.storage.local.set({'menu': [1,1,0,1,1,1,0,1] })
                      chrome.app.window.current().close();
                      chrome.app.window.create('window.html', {
                        frame: "none",
                        'bounds': {
                          'width': 800,
                          'height': 600
                        },
                        minWidth: 600,
                        minHeight: 500
                      });
                    }
                    
                })//1
                                })
            }
    }
        //webview.addEventListener("loadstop", loadstop);
        //webview.reload();

//activate();
var temps = true;
function scr(){

    if(webview.src.indexOf('oauth.vk.com/authorize') > -1 && temps == true){
        //activate();
        webview.addEventListener("loadstop", loadstop);
        console.log("info");
        temps = false;
    }else if(webview.src.indexOf('oauth.vk.com/authorize') == -1 && temps == true){
        console.log("del");
        webview.executeScript({code: 'var date = new Date(0); document.cookie = "remixsid=; path=/; domain=.vk.com; expires=" + date.toUTCString();'},function(){
        webview.src = url_token;
        webview.removeEventListener("loadstop", scr);
        webview.back();
        webview.addEventListener("loadstop", loadstop);
        temps = false;
      });
    }
}
function start_in(){
        webview.executeScript({code: 'var date = new Date(0); document.cookie = "remixsid=; path=/; domain=.vk.com; expires=" + date.toUTCString(); document.cookie = "remixlhk=; path=/; domain=.vk.com; expires=" + date.toUTCString();'},function(){
        webview.src = url_token;
        webview.back();
        webview.removeEventListener("loadstop", start_in);
        webview.addEventListener("loadstop", loadstop);
   })
}
if(window.location['hash'] == '#add'){
    webview.executeScript({code: 'var date = new Date(0); document.cookie = "remixsid=; path=/; domain=.vk.com; expires=" + date.toUTCString(); document.cookie = "remixlhk=; path=/; domain=.vk.com; expires=" + date.toUTCString();'});
    webview.addEventListener("loadstop", scr);
}else{
    webview.addEventListener("loadstop", start_in);
}
})
//auth();