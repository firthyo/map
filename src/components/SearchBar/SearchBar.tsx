import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../asset/icons/MagnifyingGlass.svg';
import { ITEM_DATA_MOCK } from '../../data/ITEM_DATA_MOCK';
interface ISearchBar {
  handleSelectProduct: Function;
  suggestion: any[];
  setSuggestion: Function;
}
const SearchBar = ({
  handleSelectProduct,
  suggestion,
  setSuggestion,
}: ISearchBar) => {
  const [searching, setSearching] = useState<string>('');
  const [productSearch, setProductSearch] = useState(undefined);
  useEffect(() => {
    if (!searching || productSearch) return;

    const result: any[] = [];
    const re = new RegExp(`${searching.toLowerCase()}`);
    ITEM_DATA_MOCK.forEach((e) => {
      const r = e.name.toLowerCase().match(re);
      if (r) {
        result.push(e);
      }
    });
    setSuggestion(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searching]);
  useEffect(() => {
    handleSelectProduct(productSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSearch]);
  return (
    <>
      <SSearchContainer>
        <SearchIcon />
        <SInput
          placeholder="Search..."
          value={searching}
          onChange={(e) => {
            setSearching(e.target.value);
            setProductSearch(undefined);
          }}
        />
        {searching ? (
          <SClear
            onClick={() => {
              setSearching('');
              handleSelectProduct(undefined);
            }}
          >
            x
          </SClear>
        ) : (
          <></>
        )}
      </SSearchContainer>
      {suggestion.length ? (
        <SSuggestionContainer>
          {suggestion.map((e, i) => {
            return (
              <SSuggestion
                key={i}
                onClick={() => {
                  setSuggestion([]);
                  setProductSearch(e);
                  setSearching(e.name);
                }}
              >
                {e.name}
              </SSuggestion>
            );
          })}
        </SSuggestionContainer>
      ) : (
        <></>
      )}
    </>
  );
};
export default SearchBar;
const SClear = styled.div`
  cursor: pointer;
`;
const SSuggestion = styled.div`
  padding: 15px;
  cursor: pointer;
  &:hover {
    background-color: #c5d4dc;
  }
`;
const SSuggestionContainer = styled.div`
  z-index: 100;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-bottom: -80px;
  background-color: white;
  width: 380px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.16);
  border-radius: 18px;
  margin: 75px 20px;
`;
const SInput = styled.input`
  width: 80%;
  margin-left: 20px;
  border: 0;
  background-color: rgba(255, 255, 255, 0.9);
  &:focus {
    outline: none;
  }
`;
const SSearchContainer = styled.div`
  z-index: 5;
  margin: 20px;
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.16);
  border-radius: 18px;
  width: 380px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
