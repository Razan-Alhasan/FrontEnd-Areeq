import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { getProducts } from '../../api/productsApi'
import { getUserById } from '../../api/userApi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { getImage } from '../utils/cloundinaryUtils';
import './Seller.css';
import { useParams } from 'react-router-dom';
const Seller = () => {
    const navigate = useNavigate();
    const userId = useParams();
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const userData = await getUserById(userId.userId);
            setUser(userData);
            console.log(userData);
            const data = await getProducts({ user: userId.userId });
            setProducts(data);
            // console.log(data);
        };
        fetchData();
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('token','userId');
        navigate(`/FrontEnd-Areeq/home`);
    };
    if (!user) {
        return null;
    }
    return (
        <div>
            <div className="header">
                <img
                    src={user?.photo}
                    alt="seller photo"
                    className="seller-img"
                />
                <div className="info-seller">
                    <h3 className="name">{ user?.firstName + " " + user?.lastName }</h3>
                    <p className="bio">
                        { user?.description } 
                    </p>
                    <ul className="links">
                        <a href={`${user.link}`} target='_blank'>
                        <li className="link" >
                            { user?.link }
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="edit-seller">
                <FontAwesomeIcon icon={ faGear } /><span className='edit-name'> Edit profile</span>
            </div>
            <div className="buttons">
                <Link to='/archive'>
                    <FontAwesomeIcon icon={ faPercent } className='icon-btn' />
                </Link>
                <Link to='/FrontEnd-Areeq/add'>
                    <FontAwesomeIcon icon={ faCirclePlus } className='icon-btn' />
                </Link>
                <Link to='/FrontEnd-Areeq/archive'>
                    <FontAwesomeIcon icon={ faBoxArchive } className='icon-btn' />
                </Link>
                <Link to='/FrontEnd-Areeq/home'>
                    <FontAwesomeIcon icon={ faRightFromBracket } className='icon-btn' onClick={ handleLogout } />
                </Link>
            </div>
            <div>
                <ImageList sx={ { width: '90%', height: '100%' } } cols={ 5 } className='image-list'>
                    { products.map((product) => (
                        <Link to={ `/FrontEnd-Areeq/product/${product._id}` } key={ product.id }>                        
                       <ImageListItem key={ product.id } className='image-item' >
                            <img
                                src={ `${product.images[0]}?w=164&h=164&fit=crop&auto=format` }
                                srcSet={ `${product.images[0]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x` }
                                    alt={ product.name }
                                    className='seller-immg'
                            />
                            <div className="info-img ">
                                <h3 className='title'>{ product.name }</h3>
                                <p className='price'>{ product.price } nis</p>
                            </div>
                        </ImageListItem>
                        </Link>
                    )) }
                </ImageList>
            </div>
        </div>
    );
};

export default Seller;
