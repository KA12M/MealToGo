import React, { useState, useContext } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { restaurants } = useContext(RestaurantsContext);
  console.log(restaurants);

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
      <RestaurantList
        data={restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(_, i) => i}
      />
    </SafeArea>
  );
};

const Styles = StyleSheet.create({
  bodySearch: {
    borderRadius: 100 / 2,
  },
});
