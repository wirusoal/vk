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
                    $("#auth_id").remove();
                    $("#auth_form").hide();
                    console.debug('vkAccessToken ' + vkAccessToken);
                    $("#activate").click();
                    document.getElementById("auth_id").terminate();
                    clear_cache();
                })
            }
        }
        webview.addEventListener("loadstop", loadstop);
        webview.reload();
    }

    chrome.storage.local.get('vkAccessToken', function (result) {
        if (result.vkAccessToken == '' || result.vkAccessToken == undefined) {
            console.log("no authkey");
            activate();

        } else {
            clear_cache();
            $("#auth_id").remove();
            $("#auth_form").hide();
            $("#activate").click();
        }
    })
})
//auth();