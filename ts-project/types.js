export const HOUSES = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
export function isHouse(value) {
    return typeof value === "string" && HOUSES.includes(value);
}
export function isWizard(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        "id" in obj &&
        typeof obj.id === "number" &&
        "name" in obj &&
        typeof obj.name === "string" &&
        "house" in obj &&
        isHouse(obj.house));
}
