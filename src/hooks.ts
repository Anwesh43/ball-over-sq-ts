import {useState, useEffect, CSSProperties} from 'react'

const delay : number = 20 
const scGap : number = 0.01
const sizeFactor : number = 12

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    }, [])
    return {
        w, 
        h
    }
}

const sinify = (scale : number) : number => Math.sin(scale * Math.PI)

export const useStyle = (w : number, h : number, scale : number) => {

    const position = 'absolute'
    const sf : number = sinify(scale)
    const size = Math.min(w, h) / sizeFactor 
    const background = 'indigo'
    return {
        parentStyle() : CSSProperties {
            const top = `${h / 2}px`
            const left = `${w / 2}px`
            return {
                position, 
                top, 
                left 
            }
        },
        ballStyle() : CSSProperties {
            const top = `${-size - (h / 2) * sf}px`
            const left = `${-size / 2}px`
            const width = `${size}px`
            const height = `${size}px`
            return {
                position, 
                top, 
                left, 
                width, 
                height, 
                borderRadius: '50%',
                background 
            }
        },
        squareStyle() : CSSProperties {
            const left = `${-size / 2 + (w / 2) * sf }px`
            const top = `${0}px`
            const width = `${size}px`
            const height = `${size}px`
            return {
                position, 
                left, 
                top, 
                background, 
                width, 
                height 
            }
        }
    }
}