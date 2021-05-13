import React, { useState } from 'react';
import calcStyle from './calculatorStyle.module.scss';
import Screen from '../screen/screen';
import Button from "../button/button";

export default function Calculator() {

    const [screenVal, setScreenVal] = useState([])
    const [previousValue, setPrevios] = useState(null)
    const [isComa, setComa] = useState(false)
    const [isPositive, setPositive] = useState(true)
    const [toDo, setToDo] = useState(
        {
            'toAdd': false,
            'toSub': false,
            'toMul': false,
            'toDiv': false
        }
    )

    const handleInput = (buttonData) => {
        if (buttonData !== 0 && screenVal.length === 0 && !isNaN(buttonData)){
            setScreenVal([...screenVal, buttonData])
        } else if (screenVal.length > 0 && !isNaN(buttonData)) {
            setScreenVal([...screenVal, buttonData])
        }

        if (buttonData === 'remove') {
            setScreenVal([])
            setComa(false)
            setPositive(true)
            setPrevios(null)
            setToDo({
                'toAdd': false,
                'toSub': false,
                'toMul': false,
                'toDiv': false
            })
        }

        if (buttonData === 'float' && screenVal.length === 0 && !isComa) {
            setScreenVal([...screenVal, '0.'])
            setComa(true)
        } else if (buttonData === 'float' && !isComa) {
            setScreenVal([...screenVal, '.'])
            setComa(true)
        }
        // IF for Positive/Negative changing button
        if (buttonData === 'posNeg' && screenVal.length !== 0){
            if (screenVal[0] === '-') {
                setPositive(true)
                screenVal.shift()
            } else {
                setPositive(false)
                screenVal.unshift('-')
            }
        }
        // IF for plus button
        if (buttonData === 'plus') {
            if(previousValue === null){
                setPrevios(Number(screenVal.join('')))
                setScreenVal([])
            } else {
                setPrevios(Number(screenVal.join('')) + previousValue)
                setScreenVal([])
            }
            setToDo({
                'toAdd': true,
                'toSub': false,
                'toMul': false,
                'toDiv': false
            })
            setComa(false)
        }
        // IF for minus button
        if (buttonData === 'minus') {
            if(previousValue === null) {
                setPrevios(Number(screenVal.join('')))
                setScreenVal([])
            } else {
                setPrevios(previousValue - Number(screenVal.join('')))
                setScreenVal([])
            }
            setToDo({
                'toAdd': false,
                'toSub': true,
                'toMul': false,
                'toDiv': false
            })
            setComa(false)
        }
        // IF for multiply button
        if (buttonData === 'multiply') {
            if(previousValue === null){
                setPrevios(Number(screenVal.join('')))
                setScreenVal([])
            } else {
                setPrevios(Number(screenVal.join('')) * previousValue)
                setScreenVal([])
            }
            setToDo({
                'toAdd': false,
                'toSub': false,
                'toMul': true,
                'toDiv': false
            })
            setComa(false)
        }

        if (buttonData === 'divide') {
            if(previousValue === null) {
                setPrevios(Number(screenVal.join('')))
                setScreenVal([])
            } else {
                setPrevios(previousValue / Number(screenVal.join('')))
                setScreenVal([])
            }
            setToDo({
                'toAdd': false,
                'toSub': false,
                'toMul': false,
                'toDiv': true
            })
            setComa(false)
        }
        // IF for equal button
        if (buttonData === 'equal') {
            if (toDo.toAdd) {
                let tempVal = Number(screenVal.join('')) + Number(previousValue)
                setScreenVal(Array.from(String(tempVal)))
            }
            if (toDo.toSub) {
                let tempVal = previousValue - Number(screenVal.join(''))
                setScreenVal(Array.from(String(tempVal)))
            }
            if (toDo.toMul) {
                let tempVal = Number(screenVal.join('')) * Number(previousValue)
                setScreenVal(Array.from(String(tempVal)))
            }
            if (toDo.toDiv) {
                let tempVal = previousValue / Number(screenVal.join(''))
                setScreenVal(Array.from(String(tempVal)))
            }
            setToDo({
                'toAdd': false,
                'toSub': false,
                'toMul': false,
                'toDiv': false
            })
            setPrevios(null)
        }
    }

    return (
        <div className={calcStyle.container}>
            <Screen value={screenVal}/>
            <div className={calcStyle.buttonsContainer}>
                <Button value={'C/AC'} onClick={() => handleInput('remove')}/>
                <Button value={'±'} onClick={() => handleInput('posNeg')}/>
                <Button value={'%'} Disabled/>
                <Button value={'÷'} Action onClick={() => handleInput('divide')}/>
                <Button value={7} onClick={() => handleInput(7)}/>
                <Button value={8} onClick={() => handleInput(8)}/>
                <Button value={9} onClick={() => handleInput(9)}/>
                <Button value={'×'} Action onClick={() => handleInput('multiply')}/>
                <Button value={4} onClick={() => handleInput(4)}/>
                <Button value={5} onClick={() => handleInput(5)}/>
                <Button value={6} onClick={() => handleInput(6)}/>
                <Button value={'-'} Action onClick={() => handleInput('minus')}/>
                <Button value={1} onClick={() => handleInput(1)}/>
                <Button value={2} onClick={() => handleInput(2)}/>
                <Button value={3} onClick={() => handleInput(3)}/>
                <Button value={'+'} Action onClick={() => handleInput('plus')}/>
                <Button value={0} onClick={() => handleInput(0)} Zero/>
                <Button value={','} onClick={() => handleInput('float')}/>
                <Button value={'='} Action onClick={() => handleInput('equal')}/>
            </div>
        </div>
    )
}