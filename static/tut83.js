// for deleting the data from database 
use gkKart
db.items.deleteOne({ratings:3.7})
// if there is manymore items with same quary data the first one will bedeleted
db.items.deleteMany({quary})