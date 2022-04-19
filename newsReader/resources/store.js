import {createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
const initial = {
      news: {
        articles: [],
        isLoading: false
      },
}
// const initial = {
//     news: [],
//     isLoading: false,
//     topHeadlines: [],
// }

const reducer = (state, action) => {
    switch (action.type) {

        // Check whether the API is currently fetching the articles
        case "newsLoading":
            return {
                ...state,
                isLoading: true
            };
        case "topHeadlinesLoading":
            return {
                ...state,
                isLoading: true
            };
        case "businessNewsLoading":
            return {
                ...state,
                isLoading: true
            };
        case "entertainmentNewsLoading":
            return {
                ...state,
                isLoading: true
            };
        case "generalNewsLoading":
            return {
                ...state,
                isLoading: true
            };
        case "healthNewsLoading":
            return {
                ...state,
                isLoading: true
            };
        case "scienceNewsLoading":
            return {
                ...state,
                isLoading: true
            };
        case "sportsNewsLoading":
            return {
                ...state,
                isLoading: true
            };
        case "technologyNewsLoading":
            return {
                ...state,
                isLoading: true
            };  
        case "searchNewsLoading": 
            return {
                ...state,
                isLoading: true
            };
        // Set the store to the news articles from the API
        case "setNews": 
            return {
                ...state,
                news: action.news,
                isLoading: false
            };
        case "setTopHeadlines": 
            return {
                ...state,
                news: action.topHeadlines,
                isLoading: false
            };    
        case "setBusinessNews":
            return {
                ...state,
                news: action.businessNews,
                isLoading: false
            };
        case "setEntertainmentNews":
            return {
                ...state,
                news: action.entertainmentNews,
                isLoading: false
            };
        case "setGeneralNews":
            return {
                ...state,
                news: action.generalNews,
                isLoading: false
            };
        case "setHealthNews":
            return {
                ...state,
                news: action.healthNews,
                isLoading: false
            };
        case "setScienceNews":
            return {
                ...state,
                news: action.scienceNews,
                isLoading: false
            };
        case "setSportsNews":
            return {
                ...state,
                news: action.sportsNews,
                isLoading: false
            };
        case "setTechnologyNews":
            return {
                ...state,
                news: action.technologyNews,
                isLoading: false
            };
        case "setSearchNews": 
            return {
                ...state, 
                news: action.searchNews,
                isLoading: false
            }
        default: return state;
    }
}

const store = createStore(reducer , initial, applyMiddleware(thunk));

export {
	store
};