import React, { useState, useEffect } from 'react';
import { getProducts } from '../../../../api/productsApi';
import { getAllUsers } from '../../../../api/userApi';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getProducts();
            setProducts(productsData);
        };
        fetchProducts();
    }, []);
    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        const results = products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
    };
    const handleLinkClick = () => {
        setSearchQuery('');
        setSearchResults([]);
    };
    return (
        <div>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    name="searchInput"
                    placeholder="Search"
                    className="me-2 mt-1 py-2"
                    aria-label="Search"
                    value={ searchQuery }
                    onChange={ handleSearch } // Trigger search on each key press
                />
                <Button style={ { backgroundColor: 'grey', border: 'none' , padding: '0px 13px'} }>
                    <FaSearch />
                </Button>
            </Form>

            {/* Render the search results */ }
            <ul>
                { searchResults.map((product, index) => (
                    <li key={ index }>
                        <Link to={ `/FrontEnd-Areeq/product/${product._id}` } onClick={ handleLinkClick }>{ product.name }</Link>
                        
                    </li>
                )) }
            </ul>

        </div>
    );
};

export default SearchComponent;
