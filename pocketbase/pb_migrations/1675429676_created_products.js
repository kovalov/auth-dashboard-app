migrate((db) => {
  const collection = new Collection({
    "id": "0ly19bh4pn2sgz0",
    "created": "2023-02-03 13:07:56.203Z",
    "updated": "2023-02-03 13:07:56.203Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r210vdmb",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pnvq7zjd",
        "name": "price",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": null
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0ly19bh4pn2sgz0");

  return dao.deleteCollection(collection);
})
