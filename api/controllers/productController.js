
const products = require('../models/Product.js')

module.exports = {
    create: async (req, res) => {
        try {
            const newProd = await products.create(req.body)
            res.status(200).json(newProd)
        } catch (err) {
            res.status(500).json(err)
        }

    },
    update: async (req, res) => {
        try {
            const updatedProd = await products.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json(updatedProd)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        try {
            await products.findByIdAndDelete(req.params.id)
            res.status(200).json('Product deleted!')
        } catch (err) {
            res.status(500).json(err)
        }
    },
    find: async (req, res) => {
        try {
            const fetchedProd = await products.findById(req.params.id)
            res.status(200).json(fetchedProd)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    findAll: async (req, res) => {
        const qNew = req.query.new;
        const qCategory = req.query.category;
        try {
            let prods;

            if (qNew) {
                prods = await products.find().sort({ createdAt: -1 }).limit(1);
            } else if (qCategory) {
                prods = await products.find({
                    categories: {
                        $in: [qCategory],
                    },
                });
            } else {
                prods = await products.find();
            }

            res.status(200).json(prods);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}