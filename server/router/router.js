const express = require("express");
const controller = require("../controllers/controller.js");

const postRouter = express.Router();

postRouter.post("/note", controller.createNote);
postRouter.delete("/note/:id", controller.deleteNote);
postRouter.get("/note", controller.getNotes);

module.exports = postRouter;
