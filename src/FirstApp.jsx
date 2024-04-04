import Proptypes from "prop-types";
import { useState } from "react";


const FirstApp = ({ title = "First App", sum = 0}) => {

    const [count, setCount] = useState(sum);

    const sumar = () => {
        setCount(count + 1);
    }
    const restar = () => {
        setCount(count - 1);
    }
    const resetear = () => {
        setCount(0);
        console.log("wao", count);
    }

    return (
        <>
            <h1>{title}</h1>
            <span>{count}</span>
            <button onClick={() => sumar()}>Aumentar</button>
            <button onClick={() => restar()}>Reducir</button>
            <button onClick={() => resetear()}>Resetear</button>
        </>
    )
}

FirstApp.proptyes = {
    title: Proptypes.string.isRequired,
    sum: Proptypes.number.isRequired
}
export default FirstApp