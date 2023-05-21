import React, { useState, useEffect } from 'react';
import { getProducts } from '../../../api/productsApi'
import { useParams } from 'react-router-dom';
import ImagesList from '../../ImageList/ImagesList';
const ArchivePage = () => {
    const [products, setProducts] = useState([]);
    const { userId } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const productData = await getProducts({ user: userId });
            setProducts(productData);
            console.log(productData);
        };
        fetchData();
    }, []);
    return (
        <div>
            <div>
                <ImagesList products={ products } rule={ products.isArchived } header={ 'Archive' } />
            </div>
        </div>
    );
};

export default ArchivePage;
