import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import './ShopByCategory.css';

function Category() {
  return (
    <div>
      <Grid container spacing={1} columns={16} marginTop={0} paddingLeft={0}>
        <Grid lg={8} md={8} sm={16} xs={16}>
          <Link href="/ceramic" underline="none">
            <img className='Image' src='/public/ceramic.jpg' alt='Ceramic'/> 
          </Link>
        </Grid>
        <Grid lg={8} md={8} sm={16} xs={16}>
          <Link href="/Clothes" underline="none">
            <img className='Image' src= '/public/cloth.jpg' alt='Clothes'/> 
          </Link>
        </Grid>
      </Grid>
      <div className='div-s'>

        <Link href="/Accessories" underline="none">
          <img className='Image1' src='/public/jewel.jpg' alt='Accessories'/> 
        </Link>
      </div>

      <Grid container spacing={1} columns={16} marginTop={0} paddingLeft={0}>
        <Grid lg={8} md={8} sm={16} xs={16}>
          <Link href="/Soap" underline="none">
            <img className='Image' src='/public/soap (1).jpg' alt='Soap'/> 
          </Link>
        </Grid>
        <Grid lg={8} md={8} sm={16} xs={16}>
          <Link href="/Home Decor" underline="none">
            <img className='Image' src='/public/home.jpg' alt='Home Decor'/> 
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Category;
