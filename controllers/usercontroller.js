const productmodel=require("../model/productSchema")
exports.productadd = async(req, res) => {
    const { name, price } = req.body
    
    if (name && price) {

        try {
            const doc = new productmodel({
                name,
                price
            })

            const product = await doc.save();
            res.send({ "product": product, "messsage": "product added successfully" })
        } catch (e) {
            res.send({"error":e.message})
        }
       
    } else {
        res.send({"message":"field doesnt empty"})
    }
    
    
}

exports.productshow = async(req,res) => {
    
    const data = await productmodel.findById(req.params.id)
    res.send(data)
}

exports.productupdate = async(req,res) => {
    const id = req.params.id;

    const prevdata = await productmodel.findById(id);
    prevdata.name = req.body.name;

    let newdata = await prevdata.save();
    res.json({"newdata":newdata})
}


exports.productdelete = async (req,res) => {
    id = req.params.id;

    const productdel = await productmodel.findByIdAndDelete(id);
    
    res.json({"product":productdel,"message":"product delete successfully"})
}