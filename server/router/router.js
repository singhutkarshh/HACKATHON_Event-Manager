const express = require("express");
const controller = require("../controllers/controller.js");

const postRouter = express.Router();

postRouter.post("/note", controller.createNote);
postRouter.delete("/note/:id", controller.deleteNote);
postRouter.get("/note", controller.getNotes);
postRouter.put("/note/update", controller.updateEvent);
module.exports = postRouter;
