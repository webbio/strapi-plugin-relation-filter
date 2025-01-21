import { Strapi } from '@strapi/strapi';
import { Context, Next } from 'koa';

export default (config: unknown, { strapi }: { strapi: Strapi }) => {
	return async (ctx: Context, next: Next) => {
		const { model, targetField } = ctx.params;

		const attributePluginConfig = await strapi
			.service('plugin::relation-filter.config')
			.getAttributePluginConfig(model, targetField);

		if (!attributePluginConfig) {
			return await next();
		}

		// Add the custom filters to the existing query
		ctx.query = strapi
			.service('plugin::relation-filter.query')
			.applyRelationFilters(ctx.query, attributePluginConfig?.filters);

		return await next();
	};
};
