import React, { useState, useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchComponent = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);  

  return (
    <SearchContainer style={Styles.search}>
      <Searchbar
        style={Styles.bodySearch}
        placeholder="Search"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

export default SearchComponent;

const Styles = StyleSheet.create({
  bodySearch: {
    borderRadius: 100 / 2,
  },
});
