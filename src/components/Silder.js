import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';

// #region styled-components
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === 'left' && '10px'};
    right: ${(props) => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
`;
const Slide = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
`;
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`;
const Image = styled.img`
    height: 60%;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;
// #endregion

function Silder() {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src="https://cdn.hk01.com/di/media/images/dw/20210211/436552862059728896029653.jpeg/WRoCzs6qAX2qHg-naAyFzHq14rmRDpbAJMJqdyTCanc?v=w1920" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Desc>
                            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW
                            ARRIVALS.
                        </Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                        <Image src="https://cdn.hk01.com/di/media/images/dw/20210211/436552862059728896029653.jpeg/WRoCzs6qAX2qHg-naAyFzHq14rmRDpbAJMJqdyTCanc?v=w1920" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Desc>
                            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW
                            ARRIVALS.
                        </Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                        <Image src="https://cdn.hk01.com/di/media/images/dw/20210211/436552862059728896029653.jpeg/WRoCzs6qAX2qHg-naAyFzHq14rmRDpbAJMJqdyTCanc?v=w1920" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Desc>
                            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW
                            ARRIVALS.
                        </Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
}

export default Silder;
