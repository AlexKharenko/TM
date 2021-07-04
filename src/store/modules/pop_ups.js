const state = {
  add_task_pop_up_active: false,
  add_task_called_from: "todo",
};

const getters = {
  isAddTaskPopUpActive: (state) => state.add_task_pop_up_active,
  getAddTaskCalledFrom: (state) => state.add_task_called_from,
};

const actions = {
  changeAddTaskPopUpStatus({ commit }, status) {
    commit("setAddTaskPopUpStatus", status);
  },
  changeAddTaskCalledFrom({ commit }, id) {
    commit("setAddTaskCalledFrom", id);
  },
};

const mutations = {
  setAddTaskPopUpStatus: (state, data) => (state.add_task_pop_up_active = data),
  setAddTaskCalledFrom: (state, data) => (state.add_task_called_from = data),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
