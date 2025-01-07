import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
	async getAttributePluginConfig(uid: string, attribute: string) {
		return strapi?.contentTypes?.[uid]?.attributes?.[attribute]?.pluginOptions?.['relation-filter'];
	}
});
