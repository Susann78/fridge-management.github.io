import crypto from "crypto";
import fs from "fs";
import { faker } from "@faker-js/faker";

// helper functions
// -----------------
function getExpirationDate() {
    const isExpired = Math.random() >= 0.5;

    const expirationDate = isExpired
        ? faker.date.recent({ days: faker.number.int({ min: 1, max: 14 }) })
        : faker.date.soon({ days: faker.number.int({ min: 1, max: 28 }) });

    return expirationDate.toISOString().split("T")[0];
}

function getVolume() {
    // return faker.number.float({ min: 1, max: 10, precision: 0.1 });
    return faker.number.int({min: 1, max: 10});
}

function getProduct() {
    const products = [
        "Eier",
        "Marmelade",
        "Sauce",
        "Butter",
        "Streichkäse",
        "Ketchup",
        "Fruchtsaft",
        "Cola",
        "Käse",
        "Milch",
        "Sahne",
        "Joghurt",
        "Fisch",
        "Fleisch",
        "Quark",
        "Wurst",
        "Salat",
    ];

    return products[faker.number.int({ min: 1, max: products.length - 1 })];
}

// generators
// -----------------
function generateFridgeProduct() {
    return {
        id: crypto.randomUUID(),
        name: getProduct(),
        expirationDate: getExpirationDate(),
        volume: getVolume(),
    }
}

function generateFridgeProducts(amount) {
    return Array(amount)
        .fill(null)
        .map(() => generateFridgeProduct());
}

// file creation
// -----------------
const database = {
    products: generateFridgeProducts(+process.argv[2] || 6),
};

await fs.promises.mkdir("./backend", { recursive: true });
await fs.promises.writeFile("./backend/database.json", JSON.stringify(database));
