require('dotenv').config()
require('isomorphic-fetch');
const PaddleSDK = require('paddle-sdk');

const fetchProducts = async () => {
  const client = new PaddleSDK(process.env.VENDOR_ID, process.env.VENDOR_AUTH_CODE);
  const data = await client.getProducts();

  console.log(data.products)
  return data.products
}

module.exports = async function() {
  return await fetchProducts();
}
