import React from "react";
import {useAnimatedScale, useDimension} from './hooks'


const withContext = (MainCompoent: React.FC<any>) : React.FC<any> => {
    return (props : any) => {
        const {scale, start : onClick} = useAnimatedScale()
        const {w, h} = useDimension()
        const origProps = {w, h, scale, onClick}
        const newProps = {...props, ...origProps}
        return <MainCompoent {...newProps}></MainCompoent>
    }
}

export default withContext