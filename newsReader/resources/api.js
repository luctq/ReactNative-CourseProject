import axios from 'axios';
import {setNews, newsLoading} from "./actions";

export const getNews = () => dispatch => {

	// Dispatch newsLoading action to show spinner while news is loading
	dispatch(newsLoading()),

	// Fetch news articles from the API
    axios.get("https://newsapi.org/v2/everything?sources=bbc-news&language=en&apiKey=59df7e86544c46db88d091ec9bcf2a9c")
    .then(response => {
        const news = response.data;

        // Dispatch setNews action to set store to news articles
        dispatch(setNews(news));
    });
};