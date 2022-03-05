return fetch('https://api.logsnag.com/v1/log', {
	method: 'POST',
	body: JSON.stringify({
		project: process.env.INPUT_PROJECT,
		channel: process.env.INPUT_CHANNEL,
		event: process.env.INPUT_EVENT,
		description: process.env.INPUT_DESCRIPTION || '',
		icon: process.env.INPUT_ICON || '',
		notify: Boolean(process.env.INPUT_NOTIFY || ''),
	}),
	headers: {
		Authorization: `Bearer ${process.env.INPUT_TOKEN}`,
		'Content-Type': 'application/json'
	}
}).then(response => {
	if(response.status < 200 || response.status > 299) {
		return response.json().then(json => {
			console.error('Bad request:', json);
			throw new Error('Bad request');
		});
	}

	process.exit(0);
}).catch(e => {
	console.error(e);	
	process.exit(1);
});


