import React from 'react';
import buttonStyle from './buttonStyle.module.scss';

export default function Button({value , className, ...classes}) {

    const buttonClass = Object.entries(classes).map(([key, value]) =>
        buttonStyle[key] !== undefined ? buttonStyle[key] : '').join(' ') + ' ' + (className ? className : '')

    return (
        <div className={buttonClass + ' ' + buttonStyle.container}>
            {value}
        </div>
    )
}