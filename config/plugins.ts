export default ({ env }) => {
	return {
		'relation-filter': {
			enabled: true,
			resolve: './src/plugins/strapi-plugin-relation-filter'
		}
	};
};
