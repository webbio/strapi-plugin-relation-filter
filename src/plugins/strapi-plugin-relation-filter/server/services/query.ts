import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
	async applyRelationFilters(query: any, filters: any) {
		if (!filters) {
			return query;
		}

		return {
			...query,
			filters
		};
	}
});
