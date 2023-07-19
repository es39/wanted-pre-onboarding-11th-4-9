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

  useEffect(() => {
    api.get('/sick').then(res => {
      setSearchData(res.data);
      console.info('calling api');
    });
  }, []);

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

  const handleSearchDropdown = () => {
    setIsSearching(true);
  };

  return (
    <FormContainer onSubmit={e => e.preventDefault}>
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
