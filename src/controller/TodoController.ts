import { Todo } from "../entity/Todo";

export class TodoController {
  public static async find() {
    console.log("[i] FIND");
    const todos = await Todo.find();
    if (!todos) console.log("[i] ERROR");
    console.log("All Todos");
    console.log(todos);
  }

  public static async findByText(text) {
    console.log("[i] FIND BY TEXT");
    const todos = await Todo.findByText(text);
    if (!todos) console.log("[i] ERROR");
    console.log("Your data is found");
    console.log(todos);
  }

  public static async create(text) {
    console.log("[i] CREATE");
    const todo = await Todo.create({
      text,
      create_at: new Date()
    });
    todo.save();
    console.log("[i] NEW TODO CREATED", todo);
  }

  public static async deleteOne(text) {
    console.log("[i] YOUR SELECTED DATA IS DELETED");
    const todo = await Todo.findOne({ text });
    todo.remove();
    console.log("[i] TODO DELETED", todo);
  }

  public static async deleteAll() {
    console.log("[i] ALL DATA IS DELETED");
    await Todo.clear();
    console.log("[i] TODO DELETED");
  }
}
