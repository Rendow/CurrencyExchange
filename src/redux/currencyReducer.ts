import {ACTIONS_TYPE, CurrencyReducersTypes } from './actions';


export type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;
    currentCurrency: string;
    isBuying: boolean;
    amountOfUSD: string;
    amountOfCurrency: string;
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'EUR',
            buyRate: 0.8439,
            sellRate: 0.8639,
        },
        {
            currencyName: 'RUR',
            buyRate: 71.437,
            sellRate: 71.637,
        },

        {
            currencyName: 'GBR',
            buyRate: 0.7133,
            sellRate: 0.7333,
        },
    ],
    currentCurrency: 'EUR',
    isBuying: true,
    amountOfUSD: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
    switch (action.type) {

        case ACTIONS_TYPE.CHANGE_CURRENCY_FIELD: {
            return { ...state, ...action.payload}
        }
        case ACTIONS_TYPE.CHANGE_CHANGE_ACTION:
        case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:{
            return { ...state,
                ...action.payload,
                amountOfUSD:'',
                amountOfCurrency:'',
            }
        }
        default:
            return state;
    }
};
