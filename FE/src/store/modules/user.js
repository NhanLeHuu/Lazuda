
export default {
    namespaced: true,
    state: {
        user: {}
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        setUserAction({ commit, state }, user) {
            state.user = user
        }
    }
}
