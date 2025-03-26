import axios from "axios";

const fetchEbay = async (keyword: string) => {
	const url = "https://www.ebay.com/sch/i.html?_nkw=" + keyword;
	const res = await axios.get(url);

	return await res.data;
};

export default fetchEbay;
