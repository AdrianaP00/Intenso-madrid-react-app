import cloudinary from 'cloudinary-core';

const cloudinaryCore = new cloudinary.Cloudinary({
  cloud_name: process.env.REACT_APP_CLOUD_NAME,
  api_key: process.env.REACT_APP_API_KEY,
  api_secret: process.env.REACT_APP_API_SECRET
});

export default cloudinaryCore;