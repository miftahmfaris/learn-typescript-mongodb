import "reflect-metadata";
import { createConnection } from "typeorm";

import { TodoController } from "./controller/TodoController";
import { Todo } from "./entity/Todo";

createConnection()
  .then(async connection => {
    // console.log("1. CREATE TODO");
    // await TodoController.create("Mongoose Node.js");
    //
    // console.log("2. FIND BY TEXT");
    // const query = "mongoose";
    // const regex = new RegExp(query, "i");
    // await TodoController.findByText(regex);

    // console.log("3. DELETE BY TEXT")
    // await TodoController.deleteOne(/Mongoose/i)
    // 
    // console.log("4. DELETE ALL")
    // await TodoController.deleteAll();

    console.log("5. FIND ALL");
    await TodoController.find();

    console.log("FINISH");
  })
  .catch(error => console.log(error));
