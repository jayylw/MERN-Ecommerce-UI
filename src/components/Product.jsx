import { ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 5px;
`;
const Info = styled.div``;
const Circle = styled.div``;
const Image = styled.div`
    height: 75%;
`;
const Icon = styled.div``;
function Product({ el }) {
    return (
        <Container>
            <Circle />
            <Image src={el.img} key={el.id} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
            </Info>
        </Container>
    );
}

export default Product;
