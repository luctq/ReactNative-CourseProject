
const newsReducer = (state, action) => {
    switch (action.type) {

        // Check whether the API is currently fetching the articles
        case "newsLoading":
            return {
                ...state,
                isLoading: true
            }
        case "setNews": 
            return {
                ...state,
                news: action.news,
                isLoading: false
            };   
        default: return state;
    }
}
export default newsReducer;