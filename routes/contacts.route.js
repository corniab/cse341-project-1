const express = require("express");
const contactsRouter = express.Router();
const { getAllContacts, getContactById, postContact, putById, deleteById } = require("../controllers/contacts.controller.js");

/**
 * @swagger
 * /contacts:
 *    get:
 *      description: Get all contacts
 *      responses:
 *        200:
 *          description: Success 
 */ 
contactsRouter.get("/", getAllContacts);

/**
 * @swagger
 * /contacts/{id}:
 *    get:
 *      description: Get contact by id
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string            
 *      responses:
 *        200:
 *          description: Success 
 */ 
contactsRouter.get("/:id", getContactById);

/**
 * @swagger
 * /contacts:
 *    post:
 *      description: Create a new contact
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: firstname
 *          in: formData
 *          required: true
 *          type: string  
 *        - name: lastName
 *          in: formData
 *          required: true
 *          type: string      
 *        - name: email
 *          in: formData
 *          required: true
 *          type: string      
 *        - name: favoriteColor
 *          in: formData
 *          required: true
 *          type: string      
 *        - name: birthday
 *          in: formData
 *          required: true
 *          type: string      
 *      responses:
 *        201:
 *          description: Created
 */
contactsRouter.post("/", postContact);

/**
 * @swagger
 * /contacts/{id}:
 *    put:
 *      description: Update contact by id
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *        - name: firstname
 *          in: formData
 *          required: false
 *          type: string  
 *        - name: lastName
 *          in: formData
 *          required: false
 *          type: string      
 *        - name: email
 *          in: formData
 *          required: false
 *          type: string      
 *        - name: favoriteColor
 *          in: formData
 *          required: false
 *          type: string      
 *        - name: birthday
 *          in: formData
 *          required: false
 *          type: string              
 *      responses:
 *        204:
 *          description: 
 */ 
contactsRouter.put("/:id", putById)

/**
 * @swagger
 * /contacts/{id}:
 *    delete:
 *      description: Delete contact by id
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string            
 *      responses:
 *        200:
 *          description: Success 
 */ 
contactsRouter.delete("/:id", deleteById)


module.exports = contactsRouter;
