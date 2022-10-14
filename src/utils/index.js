export const convertToUpperCase = (value) =>
    value.charAt(0).toUpperCase() + value.slice(1);

export const getImageById = (id) =>
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" +
    id +
    ".png";
