import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import './ShopByCategory.css';

function Category() {
  return (
    <div>
      <Grid container spacing={1} columns={16} marginTop={0} paddingLeft={0}>
        <Grid lg={8} md={8} sm={16} xs={16}>
          <Link to="/category/Ceramic" underline="none">
            <img className='Image' src='/public/ceramic.jpg' alt='Ceramic'/> 
          </Link>
        </Grid>
        <Grid lg={8} md={8} sm={16} xs={16}>
          <Link to="/category/Clothes" underline="none">
            <img className='Image' src= '/public/cloth.jpg' alt='Clothes'/> 
          </Link>
        </Grid>
      </Grid>
      <div className='div-s'>
        <Link to="/category/Accessories" underline="none">
          <img className='Image1' src='/public/jewel.jpg' alt='Accessories'/> 
        </Link>
      </div>

<div className="div">
      <Grid container spacing={1} columns={16} marginTop={0} paddingLeft={0}>
        <Grid lg={8} md={8} sm={16} xs={16}>
          <Link to="/category/Soap" underline="none">
            <img className='Image' src='/public/soap (1).jpg' alt='Soap'/> 
          </Link>
        </Grid>
        <Grid lg={8} md={8} sm={16} xs={16}>
          <Link to="/category/Home Decor" underline="none">
            <img className='Image' src='/public/home.jpg' alt='Home Decor'/> 
          </Link>
        </Grid>
      </Grid></div>
    </div>
  );
}

export default Category;
