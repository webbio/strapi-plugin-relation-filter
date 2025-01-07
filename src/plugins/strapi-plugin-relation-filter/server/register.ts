import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
	// @ts-expect-error - strapi type definitions are incorrect
	strapi.plugins['content-manager'].routes.admin.routes.map((route) => {
		if (route.handler === 'relations.findExisting') {
			route.config.middlewares = ['plugin::relation-filter.find-existing'];
		}

		if (route.handler === 'relations.findAvailable') {
			route.config.middlewares = ['plugin::relation-filter.find-available'];
		}

		return route;
	});
};
