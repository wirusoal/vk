chrome.app.runtime.onLaunched.addListener(function() {
  //chrome.storage.local.set({ 'vkAccessToken': '' })
	//chrome.storage.local.set({ 'active': 1 })
  chrome.storage.local.get('vkAccessToken', function (result) {
        if (result.vkAccessToken == '' || result.vkAccessToken == undefined) {
            chrome.storage.local.set({ 'vkAccessToken': [] })
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
