export const setNews = news => {
    return {
        type: "setNews",
        news: news,
    };
};

export const newsLoading = () => {
	return {
		type: "newsLoading"
	};
}