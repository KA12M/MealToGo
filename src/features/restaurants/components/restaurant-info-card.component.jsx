import React from "react";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Icon,
  SectionEnd,
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Section,
  Rating,
} from "./restaurant-info-card.component.styles";
import { View } from "react-native";
import { Favourite } from "../../../components/favourites/favourite.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={1}>
      <View>
        <Favourite restaurant={restaurant}/>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View> 
      <Info>
        <Text variant="label">{name}</Text>
        <Address>{address}</Address>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            {isOpenNow && (
              <Spacer size="medium" position="left">
                <SvgXml xml={open} width={20} height={20} />
              </Spacer>
            )}
            <Spacer size="medium" position="left">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
      </Info>
    </RestaurantCard>
  );
};
