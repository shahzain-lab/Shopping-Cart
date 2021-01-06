import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { ProductTypes } from '../../types/Producttypes';

//mat-ui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { DECREMENT, INCREMENT, DELETE } from '../../store/slices/ProductSlice';
import { Link } from 'react-router-dom';

interface ProductType{
    products: ProductTypes[];
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display:'flex',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      margin: "2rem",
      width:'100%',
      background: 'linear-gradient(90deg, rgba(55,54,54,1) 11%, rgba(154,150,150,1) 46%, rgba(83,83,83,1) 88%, rgba(103,103,103,1) 100%)',
      borderRadius: '1.6rem'
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
        <div className={classes.root}>
           <div className="left">
               <h3 className="shopping">Shopping Cart</h3>
          
          <div>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <span className="total">total: $&nbsp;{productFilter.reduce(
            (acc , current) => (acc += current.price * current.count),
            0
        )}</span>
          {
              productFilter.map((product, i:number) => (
                  <Paper className={classes.paper} key={i}>
                     <img src={product.image} alt="" className="itemImg"/>
                     <div className="itemDiv">
              <h3>{product.name}</h3>
            <span className="logics"> 
                {product.count > 1 ? (
                  <span className="decrement" onClick={() => dispatch(DECREMENT(product.id))}>-</span>
              ): (
                  <button className="decremented" disabled={true}>-</button>
              )}
             <span className="count">{product.count}</span>
              <span
              className="increment"
                onClick={() => dispatch(INCREMENT(product.id))}
              >
               +
              </span>
              </span>
              <span className="price">$&nbsp;{product.price * product.count}</span>
              <span className="delete" onClick={() => dispatch(DELETE(product.id))}>x</span>
              </div>
                  </Paper>
              ))
          }
        </Grid>
        
      </Grid>
               </div> 
               </div>
              <Link className="btnLink" to="/">Back</Link>
               </div>
    )
}
