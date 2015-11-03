chrome.app.runtime.onLaunched.addListener(function() {
	chrome.storage.local.get('vkAccessToken', function (result) {
        if (result.vkAccessToken == '' || result.vkAccessToken == undefined) {
            chrome.app.window.create('auth.html', {
  	            frame: "chrome",
                'bounds': {
                  'width': 800,
                  'height': 600
                },
                minWidth: 600,
                minHeight: 500
            });

        } else {
            chrome.app.window.create('window.html', {
  	            frame: "none",
                'bounds': {
                  'width': 800,
                  'height': 600
                },
                minWidth: 701,
                minHeight: 500
            });
        }
    })

});

