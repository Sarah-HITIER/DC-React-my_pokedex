import { useQuery } from "react-query";
import axios from "axios";

export function useItemsByTypes(type = "", page = 1) {
    return useQuery(
        ["items", type, page],
        async () => {
            const limit = 20;
            const offset = limit * (page - 1);

            let results = [];

            if (type !== "") {
                let res = await axios({
                    url: `https://pokeapi.co/api/v2/type/${type}`
                });
                results = res.data.pokemon.map((pokemon) => {
                    return pokemon.pokemon;
                });
            }
            let pages = Math.ceil(results.length / limit);
            return {
                pages,
                count: results.length,
                results: results.slice(offset, offset + limit)
            };
        },
        { keepPreviousData: true }
    );
}
