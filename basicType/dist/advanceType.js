"use strict";
{ // Type Assertion :as
    let random;
    //assign string:
    random = "I have to learn advance type script";
    // random. // its not show the suggestion or properties of string when use include . (dot)
    // so we can use here type assertion to declare the type string
    const upperCase = random.toUpperCase();
    console.log(upperCase);
    // assign number :
    random = 4;
    const precision = random.toFixed();
    console.log(precision);
    // assign array :
    random = ['Tanjil', 'Ahmed', 20, 40];
    random.forEach((i) => console.log(i));
    random = { name: "Tanjil", age: 26 };
    const age = random.age;
    const name = random.name;
    const getKgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `converted value :${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = getKgToGm("10");
    const result2 = getKgToGm(20);
}
