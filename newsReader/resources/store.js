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

        // Check whether the API is currently fetching the articles
        case "newsLoading":
            return {
                ...state,
                isLoading: true
            }

        // Set the store to the news articles from the API
        case "setNews": 
            return {
                ...state,
                news: action.news,
                isLoading: false
            };
        default: return state;
    }
}

const store = createStore(reducer, initial, applyMiddleware(thunk));

export {
	store
};