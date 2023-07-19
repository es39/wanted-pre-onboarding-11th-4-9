import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  FormContainer,
  InputContainer,
  SearchButton,
  SearchContainer,
  SearchInput,
} from 'styles/Style';
import api from 'utils/api';
import { SickDataProps } from '../types/sickType';
import SearchList from './SearchList';

const SearchBar = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [searchData, setSearchData] = useState<SickDataProps>();
  const [isSearching, setIsSearching] = useState(false);
  const [recommendSearch, setRecommendSearch] = useState<SickDataProps>();

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    if (searchData) {
      const filteredResult = searchData.filter(el => {
        return el.sickNm.includes(e.target.value);
      });
      setRecommendSearch(filteredResult);
    }
    if (e.target.value === '') {
      setRecommendSearch([]);
    }
  };

  // useEffect(() => {
  //   const handleSearchKeyUpDown = (e: KeyboardEvent) => {
  //     if (e.key === 'ArrowUp') {
  //     }
  //     if (e.key === 'ArrowDown') {
  //     }
  //   };
  // }, []);

  useEffect(() => {
    api.get('/sick').then(res => {
      setSearchData(res.data);
      console.info('calling api');
    });
  }, []);

  const handleSearchDropdown = () => {
    setIsSearching(true);
  };

  return (
    <FormContainer>
      <SearchContainer>
        <InputContainer>
          <AiOutlineSearch className="input-icon" />
          <SearchInput
            placeholder="질환명을 입력해주세요"
            type="text"
            onChange={handleUserInput}
            onClick={handleSearchDropdown}
          />
        </InputContainer>
        <div>
          <SearchButton type="submit">
            <AiOutlineSearch className="search-icon" />
          </SearchButton>
        </div>
      </SearchContainer>
      <SearchList
        isSearching={isSearching}
        recommendSearch={recommendSearch}
        userInput={userInput}
      />
    </FormContainer>
  );
};

export default SearchBar;
/* TODO:
1. 검색 기능 구현 -> 버튼 클릭 시, get 요청 보내고, params 내용과 일치하는 내용들 출력..?
1-1. 검색어 없을 시, 검색어 없음 표현
2. 드롭다운 구현
3. 키보드 만으로 할 수 있도록 구현
4. api 호출 시, console.info("calling api")
*/
