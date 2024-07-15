import mongoose  from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  product_name: {
    type: String,
    required: true
  },
  brand_name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  rating_count: {
    type: Number,
    required: true
  },
  marked_price: {
    type: Number,
    required: true
  },
  discounted_price: {
    type: Number,
    required: true
  },
  sizes: {
    type: String,
    required: true
  },
  product_link: {
    type: String,
    required: true
  },
  img_link: {
    type: String,
    required: true
  },
  product_tag: {
    type: String,
    required: true
  },
  brand_tag: {
    type: String,
    required: true
  },
  discount_amount: {
    type: Number,
    required: true
  },
  discount_percent: {
    type: Number,
    required: true
  },
  tags: {
    type: String,
    required: true
  },
  seller_address: {
    type: String,
    required: true
  },
  meta_description: {
    type: String,
    required: true
  },
  meta_keyword: {
    type: String,
    required: true
  }
});

export const product = mongoose.model('product', productSchema);


