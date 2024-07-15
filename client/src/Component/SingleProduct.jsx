import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 270,
    margin: '20px',
    padding: '0px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
}));

const ProductCard = ({ product }) => {
    return (
        
        <StyledCard >
            <Chip label=""  style={{ margin: '0px 0' }} />
            <CardMedia
                component="img"
                height="200"
                image={product.img_link}
                alt={product.product_name}
                style={{ objectFit: 'contain' }}
            />
            
            
        </StyledCard>
        
    );
};

export default ProductCard;