import { createStore } from "vuex";
import tasks from "./modules/tasks.js";
import pop_ups from "./modules/pop_ups";

export default createStore({
  modules: {
    tasks,
    pop_ups,
  },
});
