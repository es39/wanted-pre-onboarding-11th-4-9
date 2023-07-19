import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  FormContainer,
  InputContainer,
  SearchButton,
  SearchContainer,
  SearchInput,
} from 'styles/Style';
import api from 'utils/api';
import SearchList from './SearchList';

const SearchBar = () => {
  // const navigate = useNavigate();
  // const [searchData, setSearchData] = useState('');
  const [userInput, setUserInput] = useState<string>('');
  // const [searchParams, setSearchParams] = useSearchParams(); // * params
  const [searchData, setSearchData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api
      .get('/sick', {
        params: {
          q: userInput,
        },
      })
      .then(res => {
        console.log(res);
        setSearchData(res.data);
        setIsSearching(true);
      });
  };
  console.log(searchData);
  // 포커스 됐을 때 밑에 드롭다운
  return (
    <FormContainer onSubmit={handleSearchSubmit}>
      <SearchContainer>
        <InputContainer>
          <AiOutlineSearch className="input-icon" />
          <SearchInput
            placeholder="질환명을 입력해주세요"
            type="text"
            onChange={handleUserInput}
          />
        </InputContainer>
        <div>
          <SearchButton type="submit">
            <AiOutlineSearch className="search-icon" />
          </SearchButton>
        </div>
      </SearchContainer>
      <SearchList searchData={searchData} isSearching={isSearching} />
    </FormContainer>
  );
};

export default SearchBar;
/* TODO:
1. 검색 기능 구현 (filter) -> 버튼 클릭 시, get 요청 보내고, params 내용과 일치하는 내용들 출력..?
1-1. 검색어 없을 시, 검색어 없음 표현
2. 드롭다운 구현
3. 키보드 만으로 할 수 있도록 구현
4. api 호출 시, console.info("calling api")
*/
