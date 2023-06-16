const express = require("express");

const router = express.Router();
const userroutes=require("../controllers/usercontroller.js")
const middleware=require("../middleware/testmiddleware.js")
router.use("/productadd",middleware.checkuser)


router.post("/productadd", userroutes.productadd)
router.get("/productshow/:id", userroutes.productshow)
router.patch("/productupdate/:id", userroutes.productupdate)
router.delete("/productdelete/:id", userroutes.productdelete)

module.exports=router