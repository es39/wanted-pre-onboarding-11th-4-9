import SearchBar from '../components/SearchBar';
import { Container, Content } from '../styles/Style';

const MainPage = () => {
  return (
    <>
      <Container>
        <Content>
          <h2>
            국내 모든 임상시험 검색하고 <br />
            온라인으로 참여하기
          </h2>
          <SearchBar />
        </Content>
      </Container>
    </>
  );
};

export default MainPage;
