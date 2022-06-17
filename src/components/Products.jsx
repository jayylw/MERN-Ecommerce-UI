import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

function Products() {
    return (
        <Container>
            {popularProducts.map((el) => (
                <Product el={el} key={el.id} />
            ))}
        </Container>
    );
}

export default Products;
