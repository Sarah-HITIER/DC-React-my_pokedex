import "./TypesBanner.scss";
import { convertToUpperCase } from "utils";

const TypesBanner = ({ type = "" }) => (
    <span className={`type type--${type}`}>{convertToUpperCase(type)}</span>
);

export default TypesBanner;
