import axios from "axios";
import {
  setNews,
  newsLoading,
  topHeadlinesLoading,
  setTopHeadlines,
  setBusinessNews,
  businessNewsLoading,
  setEntertainmentNews,
  entertainmentNewsLoading,
  setGeneralNews,
  generalNewsLoading,
  setHealthNews,
  healthNewsLoading,
  setScienceNews,
  scienceNewsLoading,
  setSportsNews,
  sportsNewsLoading,
  setTechnologyNews,
  technologyNewsLoading,
  searchNews,
  searchNewsLoading,
  setSearchNews
} from "./actions";
import { API_KEY } from "../apiKey/API_KEY";
/**
 * GET NEWS
 * @returns 
 */
export const getNews = () => (dispatch) => {
  // Dispatch newsLoading action to show spinner while news is loading
  dispatch(newsLoading()),
    // Fetch news articles from the API
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`
      )
      .then((response) => {
        const news = response.data;

        // Dispatch setNews action to set store to news articles
        dispatch(setNews(news));
      });
};
/**
 * GET TOP HEADLINES
 * @returns 
 */
export const getTopHeadlines = () => (dispatch) => {
  // Dispatch newsLoading action to show spinner while news is loading
  dispatch(topHeadlinesLoading()),
    // Fetch news articles from the API
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=business&pageSize=100&language=en&apiKey=${API_KEY}`
      )
      .then((response) => {
        const headlines = response.data;

        // Dispatch setNews action to set store to news articles
        dispatch(setTopHeadlines(headlines));
      });
};
/**
 * GET BUSINESS NEWS
 * @returns 
 */
export const getBusinessNews = () => (dispatch) => {
  // Dispatch newsLoading action to show spinner while news is loading
  dispatch(businessNewsLoading()),
    // Fetch news articles from the API
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=business&pageSize=100&language=en&apiKey=${API_KEY}`
      )
      .then((response) => {
        const businessNews = response.data;

        // Dispatch setNews action to set store to news articles
        dispatch(setBusinessNews(businessNews));
      });
};
/**
 * GET ENTERTAINMENT NEWS
 * @returns 
 */
export const getEntertainmentNews = () => (dispatch) => {
  // Dispatch newsLoading action to show spinner while news is loading
  dispatch(entertainmentNewsLoading()),
    // Fetch news articles from the API
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=entertainment&pageSize=100&language=en&apiKey=${API_KEY}`
      )
      .then((response) => {
        const entertainmentNews = response.data;

        // Dispatch setNews action to set store to news articles
        dispatch(setEntertainmentNews(entertainmentNews));
      });
};
/**
 * GET GENERAL NEWS
 * @returns 
 */
export const getGeneralNews = () => (dispatch) => {
  // Dispatch newsLoading action to show spinner while news is loading
  console.log(`https://newsapi.org/v2/top-headlines?category=general&pageSize=100&language=en&apiKey=${API_KEY}`)
  dispatch(generalNewsLoading()),
    // Fetch news articles from the API
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=general&pageSize=100&language=en&apiKey=${API_KEY}`
      )
      .then((response) => {
        const generalNews = response.data;

        // Dispatch setNews action to set store to news articles
        dispatch(setGeneralNews(generalNews));
      });
};
/**
 * GET HEALTH NEWS
 * @returns 
 */
export const getHealthNews = () => (dispatch) => {
  // Dispatch newsLoading action to show spinner while news is loading
  dispatch(healthNewsLoading()),
    // Fetch news articles from the API
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=health&pageSize=100&language=en&apiKey=${API_KEY}`
      )
      .then((response) => {
        const healthNews = response.data;

        // Dispatch setNews action to set store to news articles
        dispatch(setHealthNews(healthNews));
      });
};
/**
 * GET SCIENCE NEWS
 * @returns 
 */
export const getScienceNews = () => (dispatch) => {
  // Dispatch newsLoading action to show spinner while news is loading
  dispatch(scienceNewsLoading()),
    // Fetch news articles from the API
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=science&pageSize=100&language=en&apiKey=${API_KEY}`
      )
      .then((response) => {
        const scienceNews = response.data;

        // Dispatch setNews action to set store to news articles
        dispatch(setScienceNews(scienceNews));
      });
};
/**
 * GET sPORT NEWS
 * @returns 
 */
export const getSportsNews = () => (dispatch) => {
  // Dispatch newsLoading action to show spinner while news is loading
  dispatch(sportsNewsLoading()),
    // Fetch news articles from the API
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=sports&pageSize=100&language=en&apiKey=${API_KEY}`
      )
      .then((response) => {
        const sportsNews = response.data;

        // Dispatch setNews action to set store to news articles
        dispatch(setSportsNews(sportsNews));
      });
};
/**
 * GET TECHNOLOGY NEWS
 * @returns 
 */
export const getTechnologyNews = () => (dispatch) => {
  // Dispatch newsLoading action to show spinner while news is loading
  dispatch(technologyNewsLoading()),
    // Fetch news articles from the API
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=technology&pageSize=100&language=en&apiKey=${API_KEY}`
      )
      .then((response) => {
        const technologyNews = response.data;

        // Dispatch setNews action to set store to news articles
        dispatch(setTechnologyNews(technologyNews));
      });
};

export const getSearchNews = (textSearch) => (dispatch) => {
  // Dispatch newsLoading action to show spinner while news is loading
  //console.log(`https://newsapi.org/v2/top-headlines?q=${textSearch}&pageSize=100&language=en&apiKey=${API_KEY}`)
  dispatch(searchNewsLoading()),
    // Fetch news articles from the API
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=${textSearch}&pageSize=100&language=en&apiKey=${API_KEY}`
      )
      .then((response) => {
        const searchNews = response.data;

        // Dispatch setNews action to set store to news articles
        dispatch(setSearchNews(searchNews));
      });
};
