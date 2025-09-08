import { useEffect, useState } from "react";


function useCurrencyInfo(currency){

    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`;
    const [data , setData] = useState({});

    // /https://api.exchangerate-api.com/v4/latest/${currency}

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(res => res.json())
        .then(data => setData(data[currency]));
    },[currency]);

    console.log("DATA",data);

    return data;
}

export default useCurrencyInfo;