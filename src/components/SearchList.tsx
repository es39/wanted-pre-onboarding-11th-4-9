const SearchList = (searchData: any, isSearching: boolean) => {
  return (
    <>
      {!isSearching ? (
        searchData.length !== 0 ? (
          searchData.map((el: any, idx: number) => <li key={idx}>{el[1]}</li>)
        ) : (
          <span>검색어 없음</span>
        )
      ) : null}
    </>
  );
};

export default SearchList;
