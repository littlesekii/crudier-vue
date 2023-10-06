import axios from "axios";

const baseUrl = 'http://localhost:1000';
const route = '/person';
const endpoint = baseUrl + route;

const PersonController = {
    async findPerson() {
        const res = await axios.get(endpoint);
        return res;
    }
}

export default PersonController;