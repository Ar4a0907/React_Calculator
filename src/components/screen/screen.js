import React from 'react';
import screenStyle from './screenStyle.module.scss';

export default function Screen({value}) {
    return(
        <div className={screenStyle.screen}>
            <span className={screenStyle.text}>{(value.length === 0) ? 0 : value}</span>
        </div>
    )
}