import { createStore } from 'vuex'

export default createStore({
  state: {
    comics: []
  },
  getters: {
    comics(items) {
      return items.comics;
    }
  },
  mutations: {
    setComics(state, comics) {
      state.comics = comics; 
    }
  },
  actions: {
    fetchAllComics(context) {
      return fetch('')
      .then((response) => response.json())
      .then((data) => {
        context.commit("setComics", data.comics);
      })
      .catch((err) => console.error(err));
    }
  },
  modules: {
  }
})
