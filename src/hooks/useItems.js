import { useQuery } from "react-query";
import axios from "axios";

export function useItems(page = 1) {
    const limit = 20;
    const offset = limit * (page - 1);

    return useQuery("items", async () => {
        let res = await axios({
            url: `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        });
        return res.data.results;
    });
}
