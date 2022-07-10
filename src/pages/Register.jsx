import styled from 'styled-components';

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.span``;
const Form = styled.form``;
const Input = styled.input``;
const Agreement = styled.div``;
const Button = styled.button``;

function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE A ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="lastname" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirmPassword" />
                    <Agreement>
                        By creating an account, I consent to the processing of
                        my personal data in acccordance with the{' '}
                        <strong>PRIVACY POLICY</strong>
                    </Agreement>
                    <Button></Button>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Register;
