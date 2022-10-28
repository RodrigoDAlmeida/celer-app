import axios from 'axios'


const GetAll = async () => {
    const response = await axios.get("https://gbpjn8sulk.execute-api.us-east-1.amazonaws.com/prod/company")
    return response.data;
}

export default GetAll