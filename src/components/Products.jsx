import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`;

function Products() {
    return (
        <Container>
            {popularProducts.map((el) => (
                <Product el={el} />
            ))}
        </Container>
    );
}

export default Products;
