db = db.getSiblingDB('mernapp')

db.createCollection('goals');

db.createCollection('users');

db.createUser( 
    { 
        user: "admin",
        pwd: "password",
        roles: [ 
            "dbOwner"
        ]
    } 
)
