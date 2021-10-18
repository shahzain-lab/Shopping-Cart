import React from 'react';
//material-ui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import {ProductTypes} from '../../types/Producttypes';
import { ADD } from '../../store/slices/ProductSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grid: {
      display: 'flex',
      justifyContent:'center',
      width: "100%",
      flexWrap:'wrap',
    },
    paper: {
      padding: theme.spacing(2),
      margin: "2rem",
      background: 'linear-gradient(90deg, rgba(55,54,54,1) 11%, rgba(154,150,150,1) 46%, rgba(83,83,83,1) 88%, rgba(103,103,103,1) 100%)'
  
    },
  }),
);
interface ProductType{
  products: ProductTypes[]
}

export const Product = () => {
    const classes = useStyles();
    const {products} = useSelector((state: ProductType) => state);
     const dispatch = useDispatch()

    return(
        <div>
         <h4 className="proHead"> Discover the Collection of Men's T-Shirts </h4>

          <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item className={classes.grid} xs={12}>
          
           {
             products.map((product:ProductTypes, i:number) => (
              <Paper className={classes.paper} key={i}>
                    <img src={product.image} alt=""/>
                    <hr />
                    <div className="proDesc">
             <h3>{product.name}</h3>
             <p>price: ${product.price}</p>
             <button
              onClick={() => dispatch(ADD(product))}
              disabled={product.added ? true : false}
              >
              {product.added ? 'Added' : "Add to cart"}  
             </button>
             </div>
             </Paper>
             ))
           }
           </Grid>
      </Grid>
    </div>
         </div>
    )
}
