import axios from "axios";

//ignore this for now, just going to try to get basic data working.
class APIClient {


    constructor() {
        this.axios = axios.create({
            baseURL: "http://localhost:portID" ,
            headers: { "content-type": "application/json" },
        });
    }

}

export const API = new APIClient;