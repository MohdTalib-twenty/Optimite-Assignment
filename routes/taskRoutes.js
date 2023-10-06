const express = require("express");
const {
  createTask,
  updateStatus,
  updateTask,
  deleteTask,
  getTask,
} = require("../controllers/taskControllers");
const userAuth = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/createTask", userAuth, createTask);
router.get("/getTask", userAuth, getTask);
router.put("/updateTask", userAuth, updateTask);
router.put("/updateStatus", userAuth, updateStatus);
router.delete("/deleteTask/:id", userAuth, deleteTask);

module.exports = router;
