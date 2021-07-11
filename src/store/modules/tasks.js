const state = {
  todo_list: [],
  in_progress_list: [],
  completed_list: [],
};

const getters = {
  getTodoList: (state) => state.todo_list,
  getInProList: (state) => state.in_progress_list,
  getCompList: (state) => state.completed_list,
};

const actions = {
  loadTasks({ commit }) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
      return;
    }
    let todo = [];
    let in_pro = [];
    let comp = [];
    const cur_date = new Date().getTime();
    tasks.forEach((task) => {
      if (task.status === "todo") todo.push(task);
      if (task.status === "in_pro") in_pro.push(task);
      if (task.status === "comp") {
        if (task.expire_date > cur_date) {
          comp.push(task);
        }
        if (task.expire_date <= cur_date) {
          tasks = tasks.filter((task_temp) => task_temp.id !== task.id);
        }
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    commit("setTodo", todo);
    commit("setInPro", in_pro);
    commit("setComp", comp);
  },
  editTask({ commit }, { id, field, field_value }) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
      return;
    }
    const index = tasks.findIndex((task) => task.id === +id);
    tasks[index][field] = field_value;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    switch (tasks[index].status) {
      case "todo":
        commit("editElemInArray", {
          field: "todo_list",
          id,
          value: tasks[index],
        });
        break;
      case "in_pro":
        commit("editElemInArray", {
          field: "in_progress_list",
          id,
          value: tasks[index],
        });
        break;
      case "comp":
        commit("editElemInArray", {
          field: "completed_list",
          id,
          value: tasks[index],
        });
        break;
    }
  },
  editTaskStatus({ dispatch }, { id, status }) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
      return;
    }
    const index = tasks.findIndex((task) => task.id === +id);
    tasks[index].status = status;
    if (status === "comp") {
      let date = new Date();
      date.setDate(date.getDate() + 7);
      tasks[index].expire_date = date.getTime();
    } else {
      tasks[index].expire_date = null;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    dispatch("loadTasks");
  },
  addTask({ commit }, new_task) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    const id = localStorage.getItem("biggest_id");
    if (!id) localStorage.setItem("biggest_id", 1);
    new_task.id = +id + 1;
    localStorage.setItem("biggest_id", +id + 1);
    if (!tasks) tasks = [];
    if (new_task.status === "comp") {
      let date = new Date();
      date.setDate(date.getDate() + 7);
      new_task.expire_date = date.getTime();
    };
    tasks.push(new_task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    if (new_task.status === "todo") commit("addTodo", new_task);
    if (new_task.status === "in_pro") commit("addInPro", new_task);
    if (new_task.status === "comp") commit("addComp", new_task);
  },
  removeTask({ commit }, id) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
      return;
    }
    const { status } = tasks.find((task) => task.id === +id);
    tasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    if (status) {
      if (status === "todo") commit("removeTodo", id);
      if (status === "in_pro") commit("removeInPro", id);
      if (status === "comp") commit("removeComp", id);
    }
  },
};

const mutations = {
  setTodo: (state, data) => (state.todo_list = data),
  setInPro: (state, data) => (state.in_progress_list = data),
  setComp: (state, data) => (state.completed_list = data),

  addTodo: (state, data) => state.todo_list.push(data),
  addInPro: (state, data) => state.in_progress_list.push(data),
  addComp: (state, data) => state.completed_list.push(data),

  editElemInArray: (state, { field, id, value }) => {
    state[field] = state[field].filter((task) => task.id !== +id);
    state[field].push(value);
  },

  removeTodo: (state, id) =>
    (state.todo_list = state.todo_list.filter((task) => task.id !== id)),
  removeInPro: (state, id) =>
    (state.in_progress_list = state.in_progress_list.filter(
      (task) => task.id !== id
    )),
  removeComp: (state, id) =>
    (state.completed_list = state.completed_list.filter(
      (task) => task.id !== id
    )),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
