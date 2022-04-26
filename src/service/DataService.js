import axios from "axios";
import MockAdapter from "axios-mock-adapter";

var mock = new MockAdapter(axios);

mock.onGet("/user").reply(200, {
  id: 1,
  name: "Loren Alvin",
  image:
    "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  role: "Admin",
});

mock.onGet("/car").reply(200, {
  id: 1,
  license: "250453i45",
  brand: "Mercedez Benz",
  model: "Mercedez Benz Sakpole 3443 - AT/MT",
  year: "2018",
  status: false,
  insured: true,
  apk: "2021-09-20",
  image: "https://truckmagz.com/wp-content/uploads/2016/03/ultra1518-img1.jpg",
});

export class DataService {
  async getUserDetail() {
    let response = await axios({
      method: "GET",
      url: "/user",
    });
    return response.data;
  }
  async getCarDetail() {
    let response = await axios({
      method: "GET",
      url: "/car",
    });
    return response.data;
  }
}
