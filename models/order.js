const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

/** list of products in cart */
const productCartSchema = new mongoose.Schema(
    {
        product: {
            type: ObjectId,
            ref: "Product"
        },
        name: String,
        count: Number,
        price: Number
    }
);
const ProductCart = mongoose.model("ProductCart", productCartSchema);

/** Order list schema */
const OrderSchema = new mongoose.Schema(
    {
        product: [productCartSchema],
        transaction_id: {},
        address: String,
        updated: Date,
        user: {
            type: ObjectId,
            ref: "User"
        }
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order, ProductCart };