import { csv } from "d3";

csv("data/employee.csv", (data) => {
  console.log(data[1]);
});
