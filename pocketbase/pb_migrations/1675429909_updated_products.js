migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ly19bh4pn2sgz0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "naic8i1g",
    "name": "isActive",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ly19bh4pn2sgz0")

  // remove
  collection.schema.removeField("naic8i1g")

  return dao.saveCollection(collection)
})
