import { useQuery } from "react-query";
import axios from "axios";

export function useItems(page = 1) {
    return useQuery(
        ["items", page],
        async () => {
            const limit = 20;
            const offset = limit * (page - 1);
            let res = await axios({
                url: `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
            });
            const pages = Math.ceil(res.data.count / limit);
            return { pages, results: res.data.results };
        },
        { keepPreviousData: true }
    );
}
