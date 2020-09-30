const filterByUserName = async (data, params) => {
	const response = data.filter(({username}) => username !== params);
	return response;
};

module.exports = {
	filterByUserName,
};
