import React from 'react';
//material-ui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import {ProductTypes} from '../../types/Producttypes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  }),
);


export const Product = () => {
    const classes = useStyles();
    const {products} = useSelector((state: ProductTypes) => state)
    return(
        <div>
         <h4 className="proHead"> Discover the Collection of Men's T-Shirts </h4>

          <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
           {
             products.map((product:ProductTypes, i:number) => (
               <div key={i}>
                    <img src={product.image} />
               </div>
             ))
           }
          </Paper>
        </Grid>
      </Grid>
    </div>
         </div>
    )
}
