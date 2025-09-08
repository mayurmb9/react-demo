import React, { useState } from 'react'
import '../../App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './InputBox';

export default function CurrencyConvertor() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo ?? {});

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };

    const convert = () => {
        setConvertedAmount(amount * (currencyInfo[to] ?? 0));
    };

    return (
        <div 
        style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div className='currency-convertor'
                style={{
                   backgroundImage: "url(https://images.unsplash.com/photo-1692912364084-97b9ae31a8e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"

                }}
            >
                <h2>Currency Convertor</h2>
                <div className='cc-container'>
                    <InputBox
                        label="From"
                        amount={amount}
                        onAmountChange={setAmount}
                        currencyOptions={options}
                        selectedCurrency={from}
                        onCurrencyChange={setFrom}

                    />

                    <button className='swap-button' onClick={swap}>
                        Swap
                    </button>

                    <InputBox
                        label="To"
                        amount={convertedAmount}
                        onAmountChange={setConvertedAmount}
                        currencyOptions={options}
                        selectedCurrency={to}
                        onCurrencyChange={setTo}
                    />
                </div>

                <button
                    className='swap-button'
                    style={{ position: "relative" }}
                    onClick={convert}
                >
                    Convert
                </button>
            </div>
        </div>

    );
}
