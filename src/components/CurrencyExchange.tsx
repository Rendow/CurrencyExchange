import React from 'react';
import {InputComponent} from "./InputComponent";

type CurrencyExchangePropsType = {
    currenciesName: string[];
    currentCurrency: string;
    currencyRate: number;
    isBuying: boolean;
    amountOfUSD: string;
    amountOfCurrency: string;
    changeCurrencyField: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeAction: (e: React.MouseEvent<HTMLSpanElement>) => void;
    changeCurrentCurrency: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const CurrencyExchange: React.FC<CurrencyExchangePropsType> = props => {
    const {
        currenciesName,
        currentCurrency,
        currencyRate,
        isBuying,
        amountOfUSD,
        amountOfCurrency,
        changeCurrencyField,
        changeAction,
        changeCurrentCurrency,
    } = props;

    const viewCurrency = isBuying ? (
        <>
            <label>
                You give the next amount of USD:
                <InputComponent dataCurrency={"usd"}
                                value={amountOfUSD}
                                onChange={changeCurrencyField}/>
            </label>
            <label>
                You get the next amount of {currentCurrency}:
                <InputComponent dataCurrency={"currency"}
                                value={amountOfCurrency}
                                onChange={changeCurrencyField}/>
            </label>
        </>
    ) : (
        <>
                <label> You give the next amount of {currentCurrency}:
                    <InputComponent dataCurrency={"currency"}
                                    value={amountOfCurrency}
                                    onChange={changeCurrencyField}/>
                </label>

            <label> You get the next amount of USD:
                <InputComponent dataCurrency={"usd"}
                                value={amountOfUSD}
                                onChange={changeCurrencyField}/>
            </label>
        </>
    );

const sellClass = `btn btn-outline-primary ${isBuying ? 'activeCurrency' : null}`
const buyClass = `btn btn-outline-primary ${!isBuying ? 'activeCurrency' : null}`

    return (
        <div className="currency">
            <h2 style={{marginBottom:'25x'}}>Currency exchange</h2>
            <div className="currency-names">
                <p>Current currency:</p>
                <ul>
                    {currenciesName.map((currency: string, index: number) => {
                        return (
                            <li
                                key={`${index}-${currency}`}
                                className={`btn btn-outline-primary ${currentCurrency === currency ? 'activeCurrency' : null}`}
                                onClick={changeCurrentCurrency}
                                data-currency={currency}
                            >
                                {currency}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="currency-action">
        <span className={sellClass} data-action="buy" onClick={changeAction}>
          Buy
        </span>
                <span className={buyClass} data-action="sell" onClick={changeAction}>
          Sell
        </span>
            </div>
            <div className="fields">
                <p>Currency rate: <p> {currencyRate} </p></p>
                {viewCurrency}
            </div>
        </div>
    );
};

export default CurrencyExchange;
