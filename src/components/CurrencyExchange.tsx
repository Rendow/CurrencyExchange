import React from 'react';
import {InputComponent} from "./InputComponent";

type CurrencyExchangePropsType = {
    currenciesName: string[];
    currentCurrency: string;
    currencyRate: number;
    isBuying: boolean;
    amountOfBYN: string;
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
        amountOfBYN,
        amountOfCurrency,
        changeCurrencyField,
        changeAction,
        changeCurrentCurrency,
    } = props;

    const viewCurrency = isBuying ? (
        <>
            <label>
                You give the next amount of BYN:
                <InputComponent dataCurrency={"byn"}
                                value={amountOfBYN}
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

            <label> You get the next amount of BYN:
                <InputComponent dataCurrency={"byn"}
                                value={amountOfBYN}
                                onChange={changeCurrencyField}/>
            </label>
        </>
    );

    return (
        <div className="currency">
            <h2>Currency exchange</h2>
            <div className="currency-names">
                <p>Current currency:</p>
                <ul>
                    {currenciesName.map((currency: string, index: number) => {
                        return (
                            <li
                                key={`${index}-${currency}`}
                                className={`currencies ${currentCurrency === currency ? 'activeCurrency' : null}`}
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
        <span  className={"btn btn-outline-success"} data-action="buy" onClick={changeAction}>
          Buy
        </span>
                <span className={'btn btn-outline-danger'} data-action="sell" onClick={changeAction}>
          Sell
        </span>
            </div>
            <div className="fields">
                <p>Currency rate: <p> {currencyRate} </p> </p>
                  {viewCurrency}
            </div>
        </div>
    );
};

export default CurrencyExchange;
