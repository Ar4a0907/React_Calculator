import React from 'react';
import screenStyle from './screenStyle.module.scss';

export default function Screen() {
    return(
        <div className={screenStyle.screen}>
            <span className={screenStyle.text}>a</span>
        </div>
    )
}