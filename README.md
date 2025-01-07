# Strapi plugin relation filter

Enables filtering for relations in the Strapi Content Manager

## Plugin Config

To enable this plugin. Add it to `plugins.ts`

```ts
'relation-filter': {
    enabled: true,
  },
```

### Configuration

To use custom filters in relational fields. Add the following code to your relation attribute in a `schema.json` file:

```json
{
  // ...
  "pluginOptions": {
    "relation-filter": {
      "filters": {
        // Your filters: https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication#filtering
      }
    }
  },
}
```

Example:

```json
{
	"kind": "collectionType",
	"collectionName": "pages",
	"info": {
		"singularName": "page",
		"pluralName": "pages",
		"displayName": "Page",
		"description": ""
	},
	"options": {
		"draftAndPublish": true
	},
	"pluginOptions": {},
	"attributes": {
		"developers": {
			"type": "relation",
			"relation": "oneToMany",
			"target": "api::team-member.team-member",
			"pluginOptions": {
				"relation-filter": {
					"filters": {
						"role": {
							"$eq": "developer"
						}
					}
				}
			}
		},
		"designers": {
			"type": "relation",
			"relation": "oneToMany",
			"target": "api::team-member.team-member",
			"pluginOptions": {
				"relation-filter": {
					"filters": {
						"role": {
							"$eq": "designer"
						}
					}
				}
			}
		},
		"overig": {
			"type": "relation",
			"relation": "oneToMany",
			"target": "api::team-member.team-member",
			"pluginOptions": {
				"relation-filter": {
					"filters": {
						"role": {
							"$null": true
						}
					}
				}
			}
		}
	}
}
```