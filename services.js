const services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "миття голови": "100 грн"
};

// загальна сума
function price() {
  let sum = 0;

  for (let key in services) {
    let value = services[key];     // "60 грн"
    let number = parseInt(value);  // 60
    sum = sum + number;
  }

  return sum;
}

// мінімальна ціна
function minPrice() {
  let min = null;

  for (let key in services) {
    let value = services[key];
    let number = parseInt(value);

    if (min === null || number < min) {
      min = number;
    }
  }

  return min;
}

// максимальна ціна
function maxPrice() {
  let max = null;

  for (let key in services) {
    let value = services[key];
    let number = parseInt(value);

    if (max === null || number > max) {
      max = number;
    }
  }

  return max;
}

// перевірка
console.log("Загальна вартість:", price(), "грн");
console.log("Мінімальна ціна:", minPrice(), "грн");
console.log("Максимальна ціна:", maxPrice(), "грн");

// додавання нової послуги
services["Розбити скло"] = "200 грн";

console.log("Після додавання:");
console.log("Загальна вартість:", price(), "грн");
console.log("Мінімальна ціна:", minPrice(), "грн");
console.log("Максимальна ціна:", maxPrice(), "грн");
