const { Todo } = require("../models");
const { Op } = require("sequelize");

// GET /api/todos - show all todos (READ)
exports.readTodos = async (_, res) => {
  try {
    let todos = await Todo.findAll({
      order: [["id", "DESC"]], // id 기준 내림차순으로
    });

    res.send(todos);
  } catch (err) {
    res.send(err);
  }
};

// POST /api/todo - create a new todo (CREATE)
exports.createTodo = async (req, res) => {
  try {
    let newTodo = await Todo.create({
      title: req.body.title,
      done: false, // todoItem 추가시 false가 기본 값
    });
    res.send(newTodo);
  } catch (err) {
    res.send(err);
  }
};

// PATCH /api/todo/:todoId - edit a specific todo (UPDATE)
exports.updateTodo = async (req, res) => {
  try {
    // 배열 구조 분해
    // [isUpdated] = [ 0 ] or [ 1 ]
    let [idUpdated] = await Todo.update(
      {
        title: req.body.title,
        done: req.body.done,
      },
      {
        where: {
          id: { [Op.eq]: req.params.todoId },
        },
      }
    );
    // console.log(idUpdated); // 0 or 1

    // 수정 실패
    if (idUpdated === 0) {
      return res.send(false);
    }
    // 수정 성공
    res.send(true);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    console.log("delete id >>> ", req.params.todoId);
    let isDeleted = await Todo.destroy({
      where: {
        id: { [Op.eq]: req.params.todoId },
        // Op.eq = 같으면, Op.gt = 크면
        // id: req.params.todoId,
      },
      raw: true,
    });
    // console.log(isDeleted); // 0 or 1
    // 삭제 실패
    if (!isDeleted) {
      return res.send(false);
    }
    // 삭제 성공
    res.send(true);
  } catch (err) {
    res.send(err);
  }
};
