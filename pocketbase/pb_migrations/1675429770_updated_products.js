migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ly19bh4pn2sgz0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "00ykyi6a",
    "name": "userId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ly19bh4pn2sgz0")

  // remove
  collection.schema.removeField("00ykyi6a")

  return dao.saveCollection(collection)
})
