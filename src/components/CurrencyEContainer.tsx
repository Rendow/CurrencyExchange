import React from 'react';
import CurrencyExchange from './CurrencyExchange';
import { CurrencyState, CurrencyType } from '../redux/currencyReducer';
import {
    changeActionAC,
    changeCurrencyFieldAC,
    changeCurrentCurrencyAC,
    CurrencyReducersTypes
} from '../redux/actions';
import { connect, ConnectedProps } from 'react-redux';

const CurrencyEContainer: React.FC<TProps> = props => {

    const {
        currencies,
        currentCurrency,
        isBuying,
        amountOfBYN,
        amountOfCurrency,
        changeCurrencyFieldAC,
        changeActionAC,
        changeCurrentCurrencyAC
    } = props;

    let currencyRate: number = 0;
    const currenciesName = currencies.map((currency: CurrencyType) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                    changeCurrencyFieldAC(value, value);
                } else {
                    changeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
                }
            } else {
                if (value === '') {
                    changeCurrencyFieldAC(value, value);
                } else {
                    changeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy' ? changeActionAC(true) : changeActionAC(false);
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && changeCurrentCurrencyAC(e.currentTarget.dataset.currency);
    };

    return (
        <React.Fragment>
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};

const mapStateToProps = ( { currency } : {currency: CurrencyState} ): CurrencyState => {
    return {
        currencies: currency.currencies,
        currentCurrency: currency.currentCurrency,
        isBuying: currency.isBuying,
        amountOfBYN: currency.amountOfBYN,
        amountOfCurrency: currency.amountOfCurrency,
    };
};



// @ts-ignore
const connector = connect(mapStateToProps, {changeCurrencyFieldAC,changeActionAC,changeCurrentCurrencyAC});

type TProps = ConnectedProps<typeof connector>;

export default connector(CurrencyEContainer);

