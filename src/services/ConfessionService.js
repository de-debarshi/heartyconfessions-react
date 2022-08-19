const axios = require('axios').default;

const ConfessionService = {
    submitConfession : (confessionData) => axios.post('http://192.168.29.241:3000/api/confession', confessionData).then(res => res.data),
    fetchConfessions : (pageNumber, filterBy) => axios.get(`http://192.168.29.241:3000/api/confession/paginate&page=${pageNumber}&category=${filterBy}`).then(res => res.data),
    fetchSingleConfession : (confessionID) => axios.get(`http://192.168.29.241:3000/api/confession/single&id=${confessionID}`).then(res => res.data),
    addComment : (newcomment) => axios.post('http://192.168.29.241:3000/api/confession/comment', newcomment).then(res => res.data),
};

export default ConfessionService;