import React, { useEffect, useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";
import "react-native-gesture-handler";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { firebase } from "./firebaseConfig";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  let [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  useEffect(() => {
    setTimeout(() => {
      firebase.auth
        .signInWithEmailAndPassword(
          firebase.getAuth,
          "tom@test.com",
          "Pa$$w0rd5"
        )
        .then((user) => {
          setIsAuthenticated(true);
        })
        .catch((error) => {
          setIsAuthenticated(false);
          console.log(error);
        });
    }, 2000);
  }, []);

  if (!OswaldLoaded || !LatoLoaded) {
    return null;
  }

  if (!isAuthenticated) return null;

  return (
    <ThemeProvider theme={theme}>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>

      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
