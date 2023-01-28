import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
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
      isOpenNow: result.opening_hours && result.opening_hours.open_now,
      isClosedTemporarily: result.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResult);
}; 