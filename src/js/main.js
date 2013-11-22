// main script
// Here we only handle the install/update events
// Browser-specific functionality for the main script, if needed, is added by browser/*.js
//
blog('starting');

Browser.init('main');

Util.events.addListener('browser.install', function() {
	// show FAQ on first install
	Browser.gui.showOptions('#faq');
});

Util.events.addListener('browser.update', function() {
	// upgrade options from previous versions
	Browser.storage.get(function(st) {
		if(st.fixedPosNoAPI == null)
			st.fixedPosNoAPI = true;

		Browser.storage.set(st);
	});
});
