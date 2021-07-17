import axios from "axios";

const http = axios.create({
    baseURL: "https://www.newageislam.com/api",
    // baseURL: "http://localhost:8081",
    // baseURL:"/naiApi",
});

export default http;
