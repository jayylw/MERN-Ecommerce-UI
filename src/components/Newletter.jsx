import { SendOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div``;
const Title = styled.h1``;
const Desc = styled.div``;
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

export const Newletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Got timely updates from your favorite.</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <SendOutlined></SendOutlined>
                </Button>
            </InputContainer>
        </Container>
    );
};
