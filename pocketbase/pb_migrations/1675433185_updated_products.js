migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ly19bh4pn2sgz0")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ly19bh4pn2sgz0")

  collection.listRule = null

  return dao.saveCollection(collection)
})
