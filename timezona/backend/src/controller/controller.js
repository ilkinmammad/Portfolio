import product from "../model/Model.js"


export const createProduct = async (req,res) => {
    try {
        let newProduct = new product(req.body)

        await newProduct.save()

        if (!newProduct) {
        res.status(400).send("Product dont Create")
            
        } else {
        res.status(201).send("Product succes created")
            
        }


    } catch (error) {
        res.status(500).send("SERVER ERROR")
    }
}

export const getProduct = async (req,res) => {
    try {
const products = await product.find()

        if (!products) {
        res.status(404).send("Product  not found")
            
        } else {
        res.status(200).send(products)
            
        }


    } catch (error) {
        res.status(500).send("SERVER ERROR")
    }
}

export const deleteProduct = async (req,res) => {
    try {
        let {id} = req.params

        let deleted = await product.findByIdAndDelete(id)

        if (!deleted) {
        res.status(400).send("Product dont deleted")
            
        } else {
        res.status(201).send("Product succes deleted")
            
        }


    } catch (error) {
        res.status(500).send("SERVER ERROR")
    }
}