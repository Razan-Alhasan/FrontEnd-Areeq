import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { getProducts } from '../../api/productsApi';
import { getUserById } from '../../api/userApi';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import ARButton from '../ARButton/ARButton';
// import { getImage } from '../utils/cloundinaryUtils';
import './Seller.css';
import Discount from '../Discount/Discount';
import Loading from '../Loading/Loading';
const Seller = () => {
    const navigate = useNavigate();
    const { userId } = useParams();
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState();
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    useEffect(() => {
        const fetchData = async () => {
            const userData = await getUserById(userId);
            setUser(userData);
            console.log(userData);
            const data = await getProducts({ user: userId });
            const filteredProducts = data.filter(product => !product.isArchived);
            setProducts(filteredProducts);
            console.log(filteredProducts);
        };
        fetchData();
    }, []);
    const handleLogout = () => {

        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, log out!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                navigate(`/FrontEnd-Areeq/home`);
                swalWithBootstrapButtons.fire(
                    'Log Out!',
                    'You logged out.',
                    'success'
                );
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'You are still here! :)',
                    'error'
                );
            }
        });
    };
    if (!user || !products) {
        return <Loading />;
    }
    return (
        user ?
            <div>
                <div className="header" >
                    <img
                        src={ user.photo }
                        alt="seller photo"
                        className="seller-img"
                    />
                    <div className="info-seller">
                        <h3 className="name">{ user.firstName + " " + user.lastName }</h3>
                        <p className="bio">
                            { user.description }
                        </p>
                        <ul className="links">
                            <a href={ `${user.link}` } target='_blank'>
                                <li className="link" >
                                    { user.link }
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
                { user.isSeller && <div className="btn-if-seller">
                    <div className="edit-seller">
                        <Link to={`/FrontEnd-Areeq/EditProfile/${user.id}`}>
                        <FontAwesomeIcon icon={ faGear } /><span className='edit-name'> Edit profile</span>
                        </Link>
                    </div>
                    <div className="buttons">
                        <Link to='/FrontEnd-Areeq/addOffer'>
                            <FontAwesomeIcon icon={ faPercent } className='icon-btn' />
                        </Link>
                        <Link to='/FrontEnd-Areeq/addProduct'>
                            <FontAwesomeIcon icon={ faCirclePlus } className='icon-btn' />
                        </Link>
                        <Link to='/FrontEnd-Areeq/archive'>
                            <FontAwesomeIcon icon={ faBoxArchive } className='icon-btn' />
                        </Link>
                        <Link to='/FrontEnd-Areeq/home'>
                            <FontAwesomeIcon icon={ faRightFromBracket } className='icon-btn' onClick={ handleLogout } />
                        </Link>
                    </div>
                </div> }
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
                                    { product && product.offer && (
                                        <div className="discount-seller-btn">
                                            <Discount product={ product } />
                                        </div>
                                    ) }
                                </ImageListItem>
                            </Link>
                        )) }
                    </ImageList>
                </div>
            </div >
            : <Loading />
    );
};

export default Seller;
