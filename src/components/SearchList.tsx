import { Dropdown, DropdownContainer } from 'styles/Style';
import { SickProps } from 'types/sickType';

const SearchList: React.FC<SickProps> = ({
  isSearching,
  recommendSearch,
  userInput,
}) => {
  return (
    <DropdownContainer>
      <ul>
        {isSearching ? (
          <Dropdown>
            {userInput && recommendSearch ? (
              recommendSearch
                .map(el => <li key={el.sickCd}>{el.sickNm}</li>)
                .slice(0, 5)
            ) : (
              <div className="no-result">검색어없음</div>
            )}
          </Dropdown>
        ) : null}
      </ul>
    </DropdownContainer>
  );
};

export default SearchList;
