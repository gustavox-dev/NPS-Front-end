import React from 'react'
import { Btn } from './styles'

export function Button({ onClick, children }) {
    return(
        <Btn onClick={onClick}>{children}</Btn>
    )
}