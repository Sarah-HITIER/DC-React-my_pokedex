export const convertToUpperCase = (value) => {
    const upperCase = value.charAt(0).toUpperCase() + value.slice(1);
    return upperCase.replace("-", " ");
};

export const getImageById = (id) =>
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" +
    id +
    ".png";
