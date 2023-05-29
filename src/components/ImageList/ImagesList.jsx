import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './ImagesList.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
const ImagesList = (props) => {
    const products = props.products;
    const rule = props.rule;
    const header = props.header;
    return (
        <div>
            { header && <h1>Welcome to { header }</h1> }
            <ImageList sx={ { width: '90%', height: '100%' } } cols={ 5 } className='image-list'>
                { products.map((product) => (
                             // <Link to={ `product/${product.id}` } key={ product.id }>                        { rule && (
                    rule && (<ImageListItem key={ product.id } className='image-item' >
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
                         )
                    // </Link>
                )) }
            </ImageList>
        </div>
    );
};

export default ImagesList;