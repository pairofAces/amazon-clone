import axios from "axios";

const instance = axios.create({
    //the cloud function url (api) will be here
    baseURL: '...'
});

export default instance;
