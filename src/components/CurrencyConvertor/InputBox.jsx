import React, { useId } from 'react'

function InputBox({
  label,
  amount = 0,
  onAmountChange,
  currencyOptions = [],
  selectedCurrency = "USD",
  onCurrencyChange,
  amountDisabled = false,
  currencyDisabled = false,

}) {
  const amountId = useId();
  return (
    <div className='input-box'  >

      <div className='input-container'>

        <label
          htmlFor={amountId}
          className='label' style={{ color: "black" }} >
          {label}
        </label>

        <input
          type="number"
          id={amountId}
          value={amount}
          className='input-field'
          placeholder='Enter Amount'
          onChange={e => onAmountChange &&
            onAmountChange(Number(e.target.value))}
          disabled={amountDisabled}
        />
      </div>
      <div className='input-container'>

        <label className='label' style={{ color: "black" }} >Currency Type</label>

        <select
          className="currency-select"
          value={selectedCurrency}
          onChange={e => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

      </div>


    </div>
  )
}

export default InputBox