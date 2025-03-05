function parseCount(value) {
  const parsedValue = Number.parseFloat(value);
  if (isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  }

  return parsedValue;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch(error) {
    return error;
  }
}

class Triangle {
  constructor(sideA, sideB, sideC) {
    for (let i = 0; i < arguments.length; i++) {
      const otherSidesSum = Array.from(arguments).reduce((acc, item, index) => {
        return index !== i ? acc + item : acc;
      }, 0);
      if (arguments[i] > otherSidesSum) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }

    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  get perimeter() {
    return Object.values(this).reduce((acc, item) => acc + item);
  }

  get area() {
    const halfPerimeter = this.perimeter / 2;
    return Number(Math.sqrt(halfPerimeter * (halfPerimeter - this.sideA) * (halfPerimeter - this.sideB) * (halfPerimeter - this.sideC)).toFixed(3));
  }
}

function getTriangle(sideA, sideB, sideC) {
  try {
    return new Triangle(sideA, sideB, sideC);
  } catch(error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}