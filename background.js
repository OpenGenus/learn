const check_if_OpenGenus = () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		let og_url = "iq.opengenus.org"; // URL for OpenGenus IQ
		let current_url = tabs[0].url; // URL for current tab

		// Logic to check if current URL is part of OpenGenus IQ
		if (current_url.includes(og_url)) {
			console.log("This is an OpenGenus IQ site.");
		} else {
			console.log("This is NOT an OpenGenus IQ site.");
		}
	});
};

// Run function when URL of a tab changes
chrome.tabs.onUpdated.addListener(check_if_OpenGenus);

// Run function when tab is switched
chrome.tabs.onActivated.addListener(check_if_OpenGenus);
