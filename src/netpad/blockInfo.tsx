import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { blockStyle } from "./style"

interface InfoProp{
    num:number,
    index:number,
    positionStyle:{
        left:number,
        top:number
    }
}
export function BlockInfo(props:InfoProp){

    const [infoStyle,setInfoStyle] = useState({})

    useEffect(() => {
        console.log(blockStyle.blockInfo);
        setInfoStyle({
            ...blockStyle.blockInfo,
            ...props.positionStyle
        })
    },[props.positionStyle])

    return (
        <View style={infoStyle}>
            <Text style={blockStyle.blockInfoText}>({props.index}) {props.num} 张</Text>
        </View>
    )
}