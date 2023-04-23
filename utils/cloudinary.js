const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
//uploade image to cloudinary
export const uploadImage = async (file) => {
    try {
        const result = await cloudinary.v2.uploader.upload(file, {
            folder: 'YOUR_FOLDER_NAME',
            use_filename: true
        });
        return result.secure_url;
    } catch (error) {
        console.error(error);
        return null;
    }
};
// get image from cloudinary
export const getImage = (publicId, options) => {
    // Build the Cloudinary URL for the image
    const url = cloudinary.v2.url(publicId, options);
    return url;
};
// delete image from cloudinary
export const deleteImage = async (publicId) => {
    try {
        const result = await cloudinary.v2.uploader.destroy(publicId);
        return result.result === 'ok';
    } catch (error) {
        console.error(error);
        return false;
    }
};
// downloade image from cloudinary
const downloadImage = async (publicId, options, filename) => {
    try {
        // Build the Cloudinary URL for the image
        //const url = cloudinary.v2.url(publicId, options);
        // Download the image using Axios
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        });
        // Create a write stream to save the image to a file
        const file = fs.createWriteStream(filename);

        // Pipe the response stream to the write stream
        response.data.pipe(file);

        // Return a promise that resolves when the download is complete
        return new Promise((resolve, reject) => {
            file.on('finish', resolve);
            file.on('error', reject);
        });
    } catch (error) {
        console.error(error);
        return null;
    }
};
