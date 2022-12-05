const { Router } = require("express");

const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);

router.post("/save", saveToDo);

router.put("/update", updateToDo);

router.post("/delete", deleteToDo); //changed delete to post , because axios is not making delete work !!!

module.exports = router;
