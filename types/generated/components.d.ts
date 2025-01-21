import type { Attribute, Schema } from '@strapi/strapi';

export interface ComponentsLeads extends Schema.Component {
	collectionName: 'components_components_leads';
	info: {
		displayName: 'component';
	};
	attributes: {
		designers: Attribute.Relation<'components.leads', 'oneToOne', 'api::team-member.team-member'> &
			Attribute.SetPluginOptions<{
				'relation-filter': {
					filters: {
						role: {
							$eq: 'designer';
						};
					};
				};
			}>;
		developer: Attribute.Relation<'components.leads', 'oneToOne', 'api::team-member.team-member'> &
			Attribute.SetPluginOptions<{
				'relation-filter': {
					filters: {
						role: {
							$eq: 'developer';
						};
					};
				};
			}>;
	};
}

declare module '@strapi/types' {
	export module Shared {
		export interface Components {
			'components.leads': ComponentsLeads;
		}
	}
}
