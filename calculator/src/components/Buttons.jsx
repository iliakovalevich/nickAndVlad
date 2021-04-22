import React from 'react';
import Button from './Button';


const Buttons = () => {
    return (
        <div className="calculator__btns">
            <div className="calculator__row">
{/* 
            Example with handler 
            <Button buttonValue='C' buttonType='calculator__btn' handler={handlerClear} /> */}

                <Button buttonValue='C' buttonType='calculator__btn' />
                <Button buttonValue='%' buttonType='calculator__btn' />
                <Button buttonValue='+/-' buttonType='calculator__btn' />
                <Button buttonValue='÷' buttonType='calculator__btn' />
            </div>
            <div className="calculator__row">
                <Button buttonValue={7} buttonType='calculator__btn' />
                <Button buttonValue={8} buttonType='calculator__btn' />
                <Button buttonValue={9} buttonType='calculator__btn' />
                <Button buttonValue='X' buttonType='calculator__btn' />
            </div>
            <div className="calculator__row">
                <Button buttonValue={4} buttonType='calculator__btn' />
                <Button buttonValue={5} buttonType='calculator__btn' />
                <Button buttonValue={6} buttonType='calculator__btn' />
                <Button buttonValue='-' buttonType='calculator__btn' />
            </div>
            <div className="calculator__row">
                <Button buttonValue={1} buttonType='calculator__btn' />
                <Button buttonValue={2} buttonType='calculator__btn' />
                <Button buttonValue={3} buttonType='calculator__btn' />
                <Button buttonValue='+' buttonType='calculator__btn' />
            </div>
            <div className="calculator__row">
                <Button buttonValue={0} buttonType='wide-btn calculator__btn' />
                <Button buttonValue=',' buttonType='calculator__btn' />
                <Button buttonValue='=' buttonType='calculator__btn' />
            </div>
        </div>
    )
}

export default Buttons;