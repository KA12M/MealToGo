import camelize from "camelize";

import { mocks, mockImages } from "./mock";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResult = results.map((result) => {
    return {
      ...result,
      photos: result.photos.map((p) => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
      }),
      address : result.vicinity,
      isOpenNow: result.opening_hours && result.opening_hours.open_now,
      isClosedTemporarily: result.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResult);
};
