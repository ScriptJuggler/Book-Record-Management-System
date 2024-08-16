const express = require("express");
const { getAllUsers, getSingleUserById, addNewUser, updateUserById } = require("../controllers/user-controller");


const router = express.Router();

/**
 * Route: /users
 * METHOD: GET
 * Description: Get all users
 * Access: Public
 * Parameters: None 
 * */ 

router.get("/",getAllUsers);

/**
 * Route: /users/:id
 * METHOD: GET
 * Description: Get user by their id
 * Access: Public
 * Parameters: Id
 * */ 
router.get("/:id",getSingleUserById);
/**
 * Route: /users
 * METHOD: POST
 * Description: Create a new user
 * Access: Public
 * Parameters: None
 * */ 
router.post("/" , addNewUser);
/**
 * Route: /users/:id
 * METHOD: PUT
 * Description: Updating user by their ID
 * Access: Public
 * Parameters: ID
 * */ 
router.put("/:id" , updateUserById);

/**
 * Route: /users/:id
 * METHOD: DELETE
 * Description: deleting a user by their ID
 * Access: Public
 * Parameters: ID
 * */ 

router.delete("/:id" , (req , res) => {
    const {id} = req.params;
    const user = users.find((each) => (each.id === id))
    if(!user){
        return res.status(404).json({
            success : false,
            message : "User not found"
        })
    }
    const index = users.indexOf(user);
    users.splice(index,1);

    return res.status(200).json({
        success : true,
        data : users
    })
})
//exporting back to index.js
module.exports = router;
