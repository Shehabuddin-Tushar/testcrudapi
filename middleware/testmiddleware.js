exports.checkuser = (req,res,next) => {
    console.log("i am middleware")
    next()
}