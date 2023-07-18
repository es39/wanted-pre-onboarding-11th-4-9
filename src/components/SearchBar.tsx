import { AiOutlineSearch } from 'react-icons/ai';
import {
  InputContainer,
  SearchButton,
  SearchContainer,
  SearchInput,
} from 'styles/Style';

const SearchBar = () => {
  // const [searchData, setSearchData] = useState('')
  return (
    <SearchContainer>
      <InputContainer>
        <AiOutlineSearch className="input-icon" />
        <SearchInput placeholder="질환명을 입력해주세요" type="text" />
      </InputContainer>
      <div>
        <SearchButton type="button">
          <AiOutlineSearch className="search-icon" />
        </SearchButton>
      </div>
    </SearchContainer>
  );
};

export default SearchBar;
