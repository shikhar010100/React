import React,{useId} from 'react';

interface InputBoxProps {
  label: string;
  amount: number;
  className?: string;
  onAmountChange?: (amount: number) => void;
  onCurrencyChange?: (currency: string) => void;
  currencyOptions:string[];
  selectCurrency?: string;
  amountDisable?: boolean;
  currencyDisable?: boolean;
}

function InputBox({
  label,
  amount,
  className = '',
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
}: InputBoxProps) {
  const amountInputId = useId(); // Assuming you have a useId hook

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="0"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange((Number(e.target.value)))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {/* Assuming currencyOptions is defined somewhere */}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
