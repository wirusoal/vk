$(document).ready(function () {
    
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
    function activate() {
        var webview = document.getElementById("auth_id");
        var loadstop = function () {
            var url = $("#auth_id").attr("src");
            if (url.indexOf('oauth.vk.com/blank.html#access_token=') > -1) {
                vkAccessToken = getUrlParameterValue(url, 'access_token');
                chrome.storage.local.set({
                    'vkAccessToken': vkAccessToken
                }, function () {
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
                })
            }
        }
        webview.addEventListener("loadstop", loadstop);
        webview.reload();
    }
    activate();
})
//auth();