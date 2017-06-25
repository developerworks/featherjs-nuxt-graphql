export const state = () => ({
    list: []
});

export const mutations = {

    set(state, tags) {
        state.list = tags;
        console.log(state);
    }

}