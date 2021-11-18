import { apolloClient } from "../../graphql";
import { GET_ALL_CARS } from "./queries";
import { GetCars, GetCars_cars } from "./__generated__/GetCars";

const testCar: GetCars_cars = {
  __typename: "Car",
  id: "ef3c1860-5ce6-47af-a13d-1ed72f65b642",
  name: "Audi S3 Car",
  mileage: "10k",
  thumbnailUrl:
    "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
  dailyPrice: 70,
  monthlyPrice: 1600,
  gearType: "Auto",
  gas: "Petrol",
};
const testCar2: GetCars_cars = {
  __typename: "Car",
  id: "ef3c1860-5ce6-47af-a13d-1ed72f65b641",
  name: "HONDA CITY 5 Seater Car",
  mileage: "20k",
  thumbnailUrl:
    "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
  dailyPrice: 50,
  monthlyPrice: 1500,
  gearType: "Auto",
  gas: "Petrol",
};

class CarService {
  public async getCars(): Promise<GetCars_cars[]> {
    const response = await apolloClient
      .query<GetCars>({ query: GET_ALL_CARS })
      .catch((err) => {
        // throw err;
      })
      .then(() => ({
        data: {
          cars: [testCar, testCar2, testCar, testCar2, testCar],
        },
      }));

    if (response && response.data && response.data.cars) {
      return response.data.cars;
    }

    return [];
  }
}

export default new CarService();
