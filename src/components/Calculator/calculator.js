import React from 'react';
import calcStyle from './calculatorStyle.module.scss';
import Screen from '../screen/screen';
import Button from "../button/button";

export default function Calculator() {
    return (
        <div className={calcStyle.container}>
            <Screen/>
            <div className={calcStyle.buttonsContainer}>
                <Button value={'C/AC'}/>
                <Button value={'±'}/>
                <Button value={'%'}/>
                <Button value={'÷'} Action/>
                <Button value={'7'}/>
                <Button value={'8'}/>
                <Button value={'9'}/>
                <Button value={'×'} Action/>
                <Button value={'4'}/>
                <Button value={'5'}/>
                <Button value={'6'}/>
                <Button value={'-'} Action/>
                <Button value={'1'}/>
                <Button value={'2'}/>
                <Button value={'3'}/>
                <Button value={'+'} Action/>
                <Button value={'0'} Zero/>
                <Button value={','}/>
                <Button value={'='} Action/>
            </div>
        </div>
    )
}