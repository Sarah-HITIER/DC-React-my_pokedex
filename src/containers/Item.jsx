import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { TypesBanner, Loading } from "components/atoms";
import { useState, useEffect } from "react";
import { useItem } from "hooks";
import { convertToUpperCase } from "utils";

export default function Item() {
    const { name } = useParams();
    const { isLoading, data: item, error } = useItem(name);
    // const [item, setItem] = useState({});
    console.log(item, error);

    // useEffect(() => {
    //     setItem(data);
    // }, [data]);

    const title = convertToUpperCase(name);

    if (isLoading) return <Loading />;

    return (
        <>
            <Typography variant="h4">{title}</Typography>
            <img
                src={item.sprites.other.home.front_default}
                alt={`${title}`}
            ></img>
            <p>Weight : {item.weight}</p>
            <p>Height : {item.height}</p>

            {item.abilities.slice(0, 3).map((ability) => {
                return <p>{ability.ability.name}</p>;
            })}

            {item.stats.map((stat) => {
                return (
                    <>
                        <p>{stat.stat.name} :</p>
                        <p>Base stat : {stat.base_stat}</p>
                        <p>Effort : {stat.effort}</p>
                    </>
                );
            })}

            {item.types.map((type) => {
                return <TypesBanner type={type.type.name}></TypesBanner>;
            })}
        </>
    );
}
