const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: 'dhmqo4z5h',
    api_key: '444587321442199',
    api_secret: 'a-lWLnpB04pa44wn0TYkzbfHeHU',
});
export const uploadImage = async (file) => {
    try {
        const result = await cloudinary.v2.uploader.upload(file, {
            folder: 'Areeq',
            use_filename: true
        });
        return result.secure_url;
    } catch (error) {
        console.error(error);
        return null;
    }
};
export const getImage = (publicId, options) => {
    const url = cloudinary.v2.url(publicId, options);
    return url;
};
export const deleteImage = async (publicId) => {
    try {
        const result = await cloudinary.v2.uploader.destroy(publicId);
        return result.result === 'ok';
    } catch (error) {
        console.error(error);
        return false;
    }
};
