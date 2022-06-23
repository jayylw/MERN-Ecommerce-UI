import styled from 'styled-components';
import Announcements from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div``;
const FilterColor = styled.div``;
const Filtertainer = styled.div``;

function Product() {
  return (
    <Container>
      <Navbar />
      <Announcements />

      <Wrapper>
        <ImgContainer>
          <Image src="https://images.stockx.com/images/Bandai-Gundam-RG-1-144-STRIKE-FREEDOM-GUNDAM-TITANIUM-FINISH-Model-Kit-Action-Figure-V.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>ZGMF-X10A フリーダムガンダム</Title>
          <Desc>
            `フリーダムガンダム (FREEDOM GUNDAM)
            は、テレビアニメ『機動戦士ガンダムSEED』シリーズに登場する、モビルスーツ(MS)に分類される架空の有人式人型ロボット兵器のひとつであり、番組後半から登場する新主役機である[1]。プロダクションコードはFREEDOM[2]、型式番号はZGMF-X10A（ゼット・ジー・エム・エフ・エックス・ワン・オー・エー本項では、続篇『機動戦士ガンダムSEED
            DESTINY』に登場する、フリーダムガンダムの後継機であるストライクフリーダムガンダムについても解説する。
          </Desc>
          <Price> $ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Colr</FilterTitle>
              <FilterColor color="Red">Colr</FilterColor>
              <FilterColor color="Blue">Colr</FilterColor>
              <FilterColor color="Gold">Colr</FilterColor>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;
