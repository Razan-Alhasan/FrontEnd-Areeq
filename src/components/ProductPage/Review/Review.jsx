import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";
import './Review.css';
const Review = (props) => {
    const product = props.product;
    return (
        <div>
            <h2>Reviews</h2>
            <div className='card-flex row'>
                { product.reviews.map((review) => (
                    <Card key={ review.id } style={ { margin: '2%' } } className='col-md-2  col-6'>
                        <Card.Img variant='top' className='img' style={ { padding: '5%', transition: '1s' } }
                            src='../../user.png'
                        />
                        <Card.Body className='card-text'>
                            <ReactStars
                                count={ 5 }
                                value={ review.rate }
                                size={ 24 }
                                edit={ false }
                                color={ (index) => review.rate >= index ? "#ffd700" : "#bbbbbb" }
                                className='rate'
                            />
                            <Card.Text> { review.description } </Card.Text>
                        </Card.Body>
                    </Card>
                )) }
            </div>
        </div>
    );
};

export default Review;
