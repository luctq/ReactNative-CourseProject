const topHeadlinesReducer = (state, action) => {
    switch (action.type) {
        case "topHeadlinesLoading":
            return {
                ...state,
                isLoading: true
            }
        case "setTopHeadlines": 
            return {
                ...state,
                topHeadlines: action.topHeadlines,
                isLoading: false
            };    
        default: return state;
    }
}
export default topHeadlinesReducer;