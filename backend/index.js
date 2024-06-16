//const express = require("express");
//const cors = require("cors");

import express from "express"
import cors from "cors"
import axios from "axios";

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
 try {
    const r=await axios.put('https://api.chatengine.io/users/',
        {username:username,secret:username,first_name:username},
        {headers:{"PRIVATE-KEY": process.env.PRIVATE_KEY}}
    )
    return res.status(r.status).json(r.data)
    
 } catch (error) {
    return res.status(error.response.status).json(error.response.data)
    
 }
});

app.listen(3001);