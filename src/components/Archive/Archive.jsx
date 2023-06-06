import React, { useState, useEffect } from 'react';
import { getProducts } from '../../api/productsApi'
import { useParams } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';
import './Archive.css'
import Loading from '../Loading/Loading';
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
            <h1>Welcome to Archive</h1> 
            <ImageList sx={ { width: '90%', height: '100%' } } cols={ 5 } className='image-list'>
                {products ? (
                        products.map((product) => (
                            <Link to={ `/FrontEnd-Areeq/product/${product._id}` } key={ product.id }>
                                { product.isArchived && (<ImageListItem key={ product.id } className='image-item' >
                                    <img
                                        src={ `${product.images[0]}?w=164&h=164&fit=crop&auto=format` }
                                        srcSet={ `${product.images[0]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x` }
                                        alt={ product.name }
                                    />
                                    <div className="info-img ">
                                        <h3 className='title'>{ product.name }</h3>
                                        <p className='price'>{ product.price } nis</p>
                                    </div>
                                </ImageListItem>
                                ) }
                            </Link>
                        ))
                    ) : (
                        <Loading/>
                    ) }
            </ImageList>
        </div>
    );
};

export default ArchivePage;
