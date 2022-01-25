import axios from "axios";


export default axios.create({
    baseURL : "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization : "Bearer LIxwSCkfwj93csim39sUlEBqB8rTHRhtoAtEXlFYpqxLSrHDZ1d1z-YB56eO5yE3GU1s-L8tlEGLpM9_GIFh6VeBFcsxqIuTu0tA5Fy8hXFXVUFu9hfecUnVLT7bYXYx"
    }
})