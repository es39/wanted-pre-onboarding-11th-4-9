import { useEffect, useState } from 'react';
import { Dropdown, DropdownContainer } from 'styles/Style';
import { SickProps } from 'types/sickType';

const SearchList: React.FC<SickProps> = ({
  isSearching,
  recommendSearch,
  userInput,
}) => {
  const [searchIndex, setSearchIndex] = useState<number>(-1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 키보드 이벤트 처리
      if (e.key === 'ArrowUp') {
        setSearchIndex(prev => Math.max(prev - 1, -1));
      } else if (e.key === 'ArrowDown') {
        setSearchIndex(prev => Math.min(prev + 1, recommendSearch.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [userInput, recommendSearch]);

  return (
    <DropdownContainer>
      <ul>
        {isSearching ? (
          <Dropdown>
            <div>추천 검색어</div>
            {userInput && recommendSearch ? (
              recommendSearch
                .map((el, idx) => (
                  <li
                    key={el.sickCd}
                    style={{
                      background: searchIndex === idx ? '#d1d1d1' : '',
                    }}
                  >
                    {el.sickNm}
                  </li>
                ))
                .slice(0, 5)
            ) : (
              <div className="no-result">검색어 없음</div>
            )}
          </Dropdown>
        ) : null}
      </ul>
    </DropdownContainer>
  );
};

export default SearchList;
