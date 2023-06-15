// inserting the data in db 
use gkKart
db.items.insertOne({
    name:"nokia 22", rating: 3.7, qty: 30
})
db.items.insertMany([
    {name:"nokia 22", rating: 3.7, qty: 30},
    {name:"nokia 212", rating: 3.7, qty: 30},
    {name:"samsung2", rating: 3.7, qty: 30},
    ])
