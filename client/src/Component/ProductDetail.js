import { Card, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ProductData } from '../store/store';
import ProductCard from './SingleProduct';

const ProductList = () => {
    const products = useRecoilValue(ProductData);

    return (
        <Grid container justifyContent="center" bgcolor="black">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </Grid>
    );
};

export default ProductList;