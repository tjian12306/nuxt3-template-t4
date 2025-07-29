export const checksums = {
  "blog": "v3.5.0--zlmAXxge6K4DaaeV55nmoeC0cGSQKTD0ZJV0obJjqdA"
}
export const checksumsStructure = {
  "blog": "Y1etdP_gPJyLnAPA-R6OXTtYJcGa1HXFvcJtTz6twZI"
}

export const tables = {
  "blog": "_content_blog",
  "info": "_content_info"
}

export default {
  "blog": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
}