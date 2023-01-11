import axios from 'axios';

const search = async (query) =>
	axios.get(`https://www.omdbapi.com/?apikey=trilogy&t=${query}&rating=pg`);

export default { search };
