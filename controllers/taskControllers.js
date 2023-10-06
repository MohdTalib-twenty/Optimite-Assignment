const Task = require("../models/taskModels");

//Create Operation

const createTask = async (req, res) => {
    try {
      const { title, description,dueDate } = req.body;
  
      if (!title || !description || !dueDate ) {
        res.status(400).send({
          success: false,
          message: "Enter all the fields",
        });
      } else {
        const task = await new Task({
          title: title,
          description: description,
          dueDate: dueDate,
          userId: req.user.userId,

        });
        await task.save();
  
        res.status(201).send({
          success: true,
          message: "tasked successfully",
          task,
        });
      }
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error,
      });
    }
  };


//Read Operation
const getTask = async (req, res) => {
  try {
   
    const tasks = await Task.find({userId:req.user.userId})
    if (tasks) {
      res.status(200).send({
        success: true,
        tasks,
      });
    } else {
      res.status(400).send({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error,
    });
  }
};


//Delete Operation

const deleteTask = async (req, res) => {
  try {
    const result = await Task.findOneAndDelete({
      _id: req.params.id,
    });
    if (result) {
      res.status(201).send({
        success: true,
        message: "Deleted Successfully",
      });
    } else {
      res.status(400).send({
        success: false,
        message: "Something went wrong please try after sometime",
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error,
    });
  }
};
//Update task
const updateTask = async (req, res) => {
    try {
       const { _id, newtitle, newdescription,status,dueDate} = req.body;
      const task = await Task.findByIdAndUpdate(_id, {
        $set: { title: newtitle, description: newdescription,status:status,dueDate:dueDate }
      });
      if (task) {
        res.status(201).send({
          success: true,
          message: "task Updated",
        });
      } else {
        res.status(400).send({
          success: false,
          message: "Something went wrong",
        });
      }
      
   
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error,
      });
    }
  };
  //Uppdate Status of task

  const updateStatus = async (req, res) => {
    try {
      const { _id} = req.body;
      const task = await Task.findByIdAndUpdate(_id, {
        $set: { status:"Completed" }
      });
      if (task) {
        res.status(201).send({
          success: true,
          message: "task Updated",
        });
      } else {
        res.status(400).send({
          success: false,
          message: "Something went wrong",
        });
      }
   
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error,
      });
    }
  };


module.exports = {
  createTask,
  updateTask,
  updateStatus,
  deleteTask,
  getTask,

};
