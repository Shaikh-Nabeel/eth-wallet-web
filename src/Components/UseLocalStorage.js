import { useState, useEffect } from "react";

const UseLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ?
            JSON.parse(storedValue) :
            initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
        console.log("value: " , value);
    }, [key,value]);

    return [value, setValue];
};

export default UseLocalStorage;