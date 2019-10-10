import {DomainAPI, APIKey} from '../utils/setting'
const news = {
    state: {
        
    },
    reducers: {
        setState(state, payload) {
            state = {...state, ...payload};
            return {...state};
        },
    },
    effects: (dispatch) => ({ 
        async getNews(payload = {}, rootState) { 
            const _this = this; 
            let url = DomainAPI + '/v2/top-headlines?country=us&apiKey=' + APIKey; 

            return fetch(url, {
                method: 'GET',  
            }).then(res => res.json())
                .then((result) => {   
                    return result
                })
                .catch((err) => { 
                    // return {code: 0, error: err, message: err.toString()}
                })
        },
    })
};


export default news;