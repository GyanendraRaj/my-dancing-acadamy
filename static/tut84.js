show dbs 
use gkKart
// update the mango data base 
db.items.updateOne({name:"nokia 212"},{$set:{rating:5}})
db.items.updateMany({name:"nokia 212"},{$set:{price:0  , rating:5}})
