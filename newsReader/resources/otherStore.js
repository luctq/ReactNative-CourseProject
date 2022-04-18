import {createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
const initial = {
      news: {
        articles: [],
        isLoading: false
    }
}

const reducer = (state, action) => {
    switch (action.type) {

        case "topHeadlinesLoading":
            return {
                ...state,
                isLoading: true
            }
        // Set the store to the news articles from the API
        case "setTopHeadlines": 
            return {
                ...state,
                news: action.topHeadlines,
                isLoading: false
            };    
        default: return state;
    }
}

const otherStore = createStore(reducer , initial, applyMiddleware(thunk));

export {
	otherStore
};