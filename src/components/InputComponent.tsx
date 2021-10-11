import React from "react";

type InputType = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    dataCurrency: string;
}

export const InputComponent = (props:InputType) => {
    return <>
        <input style={{marginTop:'7px'}} type="text"
               className="form-control + ' ' + input-group mb-3"
               value={props.value}
               data-currency={props.dataCurrency}
               onChange={props.onChange}/>
    </>

}