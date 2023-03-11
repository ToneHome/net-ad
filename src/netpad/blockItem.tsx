import React, { useEffect, useState } from "react"
import { Animated, Dimensions, Text, View } from "react-native"
import { textStyle } from "./style"

interface BlockProp {
    blockStyle: any,
    width: number
    height: number
    defaultPosition: {
        left: number,
        top: number
    },
}
export function BlockItem(props: BlockProp) {

    const [isTouch, setIsTouch] = useState(false)

    const [location, setLocation] = useState({
        left: -100,
        top: -100
    })
    useEffect(() => {
        setLocation(props.defaultPosition)
    }, [])
    const [innerLocation, setInnerLocation] = useState({
        top: -1000,
        left: -1000
    })

    function touchStart(event: any) {
        // console.log('event: ', event);
        const { pageX, pageY } = event.nativeEvent
        setInnerLocation({
            left: pageX,
            top: pageY
        })
        setIsTouch(true)
    }
    function touchEnd() {
        console.log(isTouch);
        setIsTouch(false)
        setItemStyle((old) => {
            return {
                ...old,
                borderWidth: 2
            }
        })
    }

    const { width, height } = Dimensions.get('window')
    console.log('width,height: ', width, height);

    function touchMove(event: any) {
        if (isTouch) {
            const { locationX, pageX, locationY, pageY } = event.nativeEvent
            // console.log('pageY: ', pageY);
            // console.log('pageX: ', pageX);
            const realX = pageX - locationX
            const realY = pageY - locationY
            if (pageY > 830) return;
            if (realX >= 0 && realY >= 0) {

                const changeX = pageX - innerLocation.left
                console.log('changeX: ', changeX);
                const changeY = pageY - innerLocation.top
                console.log('changeY: ', changeY);

                setLocation(({ left, top }) => {
                    console.log('top: ', top);
                    console.log('left: ', left);
                    return {
                        left: left + changeX,
                        top: top + changeY
                    }
                })
                setInnerLocation({
                    left: pageX,
                    top: pageY
                })

            }
            // console.log(event.nativeEvent.locationX,realX,realY);
            // console.log('isTouch');
        }
    }
    const [itemStyle, setItemStyle] = useState({})



    useEffect(() => {
        if (location.left === -100 && location.top === -100) {
            setItemStyle({
                ...props.blockStyle,
                ...props.defaultPosition,
                borderWidth: isTouch ? 4 : 2
            })
        }
        else {
            setItemStyle({
                ...props.blockStyle,
                ...location,
                borderWidth: isTouch ? 4 : 2
            })
        }

        // console.log(itemStyle);
    }, [props.blockStyle, props.defaultPosition, location])

    return (
        <Animated.View style={itemStyle} onTouchEnd={touchEnd} onTouchMove={touchMove} onTouchStart={touchStart}>
            <View style={textStyle.width}>
                <Text>{props.width}</Text>
            </View>
            <View style={textStyle.height}>
                <Text>{props.height}</Text>
            </View>
        </Animated.View>
    )
}