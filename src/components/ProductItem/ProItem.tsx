import React from 'react';
import { useSelector } from 'react-redux';
import { ProductTypes } from '../../types/Producttypes';
//imgs
import gucciCart from '../../images/gucciCart.jpg';
//mat-ui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
      margin: "1rem",
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
    return (
        <div>
           <div>
               <img src={gucciCart} alt="gucci" className="gucciImg"/>
                      
          <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          {
              productFilter.map((product, i:number) => (
                  <Paper key={i}>
                     <img src={product.image} alt="" className="itemImg"/>
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
