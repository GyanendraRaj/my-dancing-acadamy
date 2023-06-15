// inserting the data in db 
use gkKart
// to find objects matching reqiured field 
db.items.find({rating:3.7})
// ({rating:3.7}) is a filter 
// for filete ratings greater than
db.items.find({rating:{$gte:3.3}})
// lt is used for lower than 
now use AND operator
db.items.find({rating:{$gt:3.3}, prise:{$gt:20000 }})
// for or operator
db.items.find({ $or:[rating:{$gt:3.3}, prise:{$gt:20000 }]})