import axios from "axios";

const instance = axios.create({
    //the cloud function url (api) will be here
    baseURL: 'https://us-central1-clone-d0660.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-d0660/us-central1/api'
});

export default instance;
