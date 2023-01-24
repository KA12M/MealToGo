import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native"; 

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margintop: ${StatusBar.currentHeight}px;
  paddingtop: 23px;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  backgroundcolor: pink;
  padding: 16px;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer style={Styles.search}>
        <Searchbar
          style={Styles.bodySearch}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <ScrollView>
        <RestaurantListContainer style={Styles.content}>
          <RestaurantInfoCard />
        </RestaurantListContainer>
      </ScrollView>
    </SafeArea>
  );
};

const Styles = StyleSheet.create({
  bodySearch: {
    borderRadius: 100 / 2,
  },
});
