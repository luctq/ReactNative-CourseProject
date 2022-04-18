import axios from 'axios';
import {setNews, newsLoading, topHeadlinesLoading, setTopHeadlines} from "./actions";

export const getNews = () => dispatch => {
    console.log("News")
	// Dispatch newsLoading action to show spinner while news is loading
	dispatch(newsLoading()),

	// Fetch news articles from the API
    axios.get("https://newsapi.org/v2/everything?sources=cnn&language=en&apiKey=59df7e86544c46db88d091ec9bcf2a9c")
    .then(response => {
        const news = response.data;

        // Dispatch setNews action to set store to news articles
        dispatch(setNews(news));
    });
};
export const getTopHeadlines = () => dispatch => {
    console.log("Top Headlines")
	// Dispatch newsLoading action to show spinner while news is loading
	dispatch(topHeadlinesLoading()),

	// Fetch news articles from the API
    axios.get("https://newsapi.org/v2/top-headlines?country=us&category=sports&language=en&apiKey=59df7e86544c46db88d091ec9bcf2a9c")
    .then(response => {
        const headlines = response.data;

        // Dispatch setNews action to set store to news articles
        dispatch(setTopHeadlines(headlines));
    });
};