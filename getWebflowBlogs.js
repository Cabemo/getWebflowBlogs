const getWebflowBlogs = async (event) => {
	const Webflow = require('webflow-api');

	try {
		const api = new Webflow({
			token: process.env.WEBFLOW_TOKEN,
			siteId: process.env.SITE_ID
		});

		await api.site({ siteId: process.env.SITE_ID });
		const collection = await api.collection({ collectionId: process.env.COLLECTION_ID });
		let items = await collection.items({
			limit: 3
		});
		items = items.items.map(i => {
			if (i['published-on'])
				return {
					name: i.name,
					summary: i['post-summary'],
					body: i['post-body'],
					date: i.fechacreacion,
					url: process.env.SITE_URL + i.slug
				};
		});
		return {
			statusCode: 200,
			body: JSON.stringify(items),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: {
				error: error.message
			}
		};
	}
};

exports.handler = getWebflowBlogs;
