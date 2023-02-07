import React from 'react'
import { Btn } from './styles'

export function Button({ onClick, children, disabled }) {
    return(
        <>
        <Btn onClick={onClick} disabled={disabled} >{children}</Btn>
        {/* {disabled && (
        )} */}
        </>
    )
}