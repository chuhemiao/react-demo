const express = require("express")

const router = express.Router()

router.get("/api/list",(req,res)=>{
    res.send([
        {
            name:"liu chu",
            age:66
        },
        {
            name:"chuhe miao",
            age:99
        }
    ])
})

module.exports = router;