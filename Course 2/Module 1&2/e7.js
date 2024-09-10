var clothes = [];
clothes.push("shirt", "pant", "tie", "socks");
clothes.push("brief");
clothes.pop();
clothes.push("handkerchief");
console.log(clothes[2]);

var favCar = {};
favCar.color = "Red";
favCar.convertible = true;
console.log(favCar);

//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function () {
  console.log("The engine is running");
};
car.lightsOn = function () {
  console.log("The lights are on.");
};
console.log(car);
car.turnTheKey();
car.lightsOn();
