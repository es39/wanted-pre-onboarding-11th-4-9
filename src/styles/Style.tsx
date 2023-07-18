import styled from 'styled-components';

export const Container = styled.main`
  background-color: #cae9ff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  h2 {
    font-size: 2.125rem;
    font-weight: 700;
    letter-spacing: -0.018em;
    line-height: 1.6;
    text-align: center;
  }
`;
export const SearchContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 490px;
  border-radius: 42px;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  width: 100%;
  padding-right: 8px;
  .input-icon {
    padding-left: 10px;
    font-size: 1.4rem;
  }
`;
export const SearchInput = styled.input`
  outline: none;
  border: none;
  font-size: 1.125rem;
  border-radius: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px 20px 10px;
  font-weight: 400;
  width: 100%;
  background-color: transparent;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchButton = styled.button`
  background-color: #017be8;
  border: 0;
  border-radius: 100%;
  cursor: pointer;
  width: 48px;
  height: 48px;
  .search-icon {
    color: white;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
