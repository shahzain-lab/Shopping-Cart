import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { ProductTypes } from '../../types/Producttypes';
//imgs
import gucciCart from '../../images/gucciCart.jpg';
//mat-ui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { DECREMENT, INCREMENT } from '../../store/slices/ProductSlice';

interface ProductType{
    products: ProductTypes[];
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      margin: "2rem",
      background: "#363535"
    },
  }),
);
export const ProductItem = () => {
   
    const classes = useStyles();
    const { products } = useSelector((state: ProductType) => state);
   const productFilter = products.filter(
     product => product.added === true
   )
   const dispatch = useDispatch()
    return (
        <div>
           <div>
               <img src={gucciCart} alt="gucci" className="gucciImg"/>
                      
          <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          {
              productFilter.map((product, i:number) => (
                  <Paper className={classes.paper} key={i}>
                     <img src={product.image} alt="" className="itemImg"/>
                     <div className="itemDiv">
              <h3>{product.name}</h3>
              {product.count > 1 ? (
                  <span className="decrement" onClick={() => dispatch(DECREMENT(product.id))}>-</span>
              ): (
                  " "
              )}
              {product.count}
              <span
              className="increment"
                onClick={() => dispatch(INCREMENT(product.id))}
              >
               +
              </span>
              </div>
                  </Paper>
              ))
          }
        </Grid>
      </Grid>
               </div> 
               </div>
               </div>
    )
}
