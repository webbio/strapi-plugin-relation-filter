import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
	async getAttributePluginConfig(uid: string, attribute: string) {
		// @ts-expect-error
		const model = strapi.getModel(uid);

		return model?.attributes?.[attribute]?.pluginOptions?.['relation-filter'];
	}
});
