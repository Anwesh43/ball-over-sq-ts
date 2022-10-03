import React from 'react'
import withContext from './withContext'
import {useStyle} from './hooks'

interface BallOverSqProps {
    w : number,
    h : number, 
    scale : number, 
    onClick : () => void
}
const BallOverSq = (props : BallOverSqProps) => {
    const {ballStyle, squareStyle, parentStyle} = useStyle(props.w, props.h, props.scale)
    return (<div style = {parentStyle()} onClick = {() => props.onClick()}>
            <div style = {ballStyle()}></div>
            <div style = {squareStyle()}></div>
        </div>)
}

export default withContext(BallOverSq)