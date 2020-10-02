const filterByUserName = async (data, params) => {
	try {
		const response = data.filter(({username}) => username !== params);
		return response;
	} catch (err) {
		return [];
	}
};

module.exports = {
	filterByUserName,
};
