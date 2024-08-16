const express = require("express");
const {UserModel,BookModel} = require("../models");
const { getAllBooks, getSingleBookById, addNewBook, updateBookById } = require("../controllers/book-controller");
const router = express.Router();

/**
 * Route: /books
 * METHOD: GET
 * Description: Get all books
 * Access: Public
 * Parameters: None 
 * */ 

router.get("/",getAllBooks)
/**
 * Route: /books/:id
 * METHOD: GET
 * Description: Get book by their id
 * Access: Public
 * Parameters: Id
 * */ 
router.get("/:id",getSingleBookById);

/**
 * Route: /books
 * METHOD: POST
 * Description: Create a new book
 * Access: Public
 * Parameters: None
 * */ 
router.post("/",addNewBook);

/**
 * Route: /books/:id
 * METHOD: PUT
 * Description: Updating book by their ID
 * Access: Public
 * Parameters: ID
 * */ 
router.put("/:id" , updateBookById);

/**
 * Route: /books/:id
 * METHOD: DELETE
 * Description: deleting a book by their ID
 * Access: Public
 * Parameters: ID
 * */ 
router.delete("/:id" , (req,res) => {
    const {id} = req.params;
    const book = books.find((each) => (each.id === id));
    if(!book){
        return res.status(404).json({
            success : false,
            message : "ID not found"
        })
    }
    const index = books.indexOf(book);
    books.splice(index,1);
    return res.status(200).json({
        success : true,
        data : books
    })
})
module.exports = router;