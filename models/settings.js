const settings = {
    state: {
        
    },
    reducers: {
        setState(state, payload) {
            state = {...state, ...payload};
            return {...state};
        },
    },
    effects: (dispatch) => ({

    })
};


export default settings;