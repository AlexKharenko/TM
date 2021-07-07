const state = {
  add_task_pop_up_active: false,
  edit_task_pop_up_active: false,
  task_id: undefined,
  delete_task_pop_up_active: false,
  pop_up_task_called_from: "todo",
};

const getters = {
  isAddTaskPopUpActive: (state) => state.add_task_pop_up_active,
  isEditTaskPopUpActive: (state) => state.edit_task_pop_up_active,
  isDeleteTaskPopUpActive: (state) => state.delete_task_pop_up_active,
  getTaskId: (state) => state.task_id,
  popUpTaskCalledFrom: (state) => state.pop_up_task_called_from,
};

const actions = {
  changeAddTaskPopUpStatus({ commit }, status) {
    commit("setAddTaskPopUpStatus", status);
  },
  changeEditTaskPopUpStatus({ commit }, status) {
    commit("setEditTaskPopUpStatus", status);
  },
  changeDeleteTaskPopUpStatus({ commit }, status) {
    commit("setDeleteTaskPopUpStatus", status);
  },
  changeTaskId({ commit }, id) {
    commit("setTaskId", id);
  },
  changePopUpTaskCalledFrom({ commit }, id) {
    commit("setPopUpTaskCalledFrom", id);
  },
};

const mutations = {
  setAddTaskPopUpStatus: (state, data) => (state.add_task_pop_up_active = data),
  setEditTaskPopUpStatus: (state, data) => (state.edit_task_pop_up_active = data),
  setDeleteTaskPopUpStatus: (state, data) => (state.delete_task_pop_up_active = data),
  setTaskId: (state, data) => (state.task_id = data),
  setPopUpTaskCalledFrom: (state, data) => (state.pop_up_task_called_from = data),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
