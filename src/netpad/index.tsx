import React, { useState } from "react";
// import { View } from "react-native/types";
import {
    Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { BlockInfo } from "./blockInfo";
import { BlockItem } from "./blockItem";
import { block1_1, block2_1, block2_2, block3_1, block3_2, mainViewStyle, pTd, titleStyle } from "./style";
export function NetPadMain(){
    
    const [blockData,setBlockData] = useState({
        block1_1:7,
        block2_2:5,
        block3_1:3,
        block2_1:3,
        block3_2:4
    })

    const bottom = pTd(650)
    const infoTextBottom = pTd(680)
    return <View style={mainViewStyle.mainStyle}>
        <View style={titleStyle.postion}>
            <Text style={titleStyle.font}>拼面板（单位：米）</Text>
        </View>

        {
            new Array(blockData.block1_1).fill(0).map((item,index) => {
                return <BlockItem  width={1} height={1} blockStyle={block1_1} key={index} defaultPosition={{left:pTd(100),top:bottom + index * 3 - block1_1.height}} />
            })
        }
        <BlockInfo index={1} num={blockData.block1_1} positionStyle={{left:pTd(100),top:infoTextBottom}}/>
        {
            new Array(blockData.block2_2).fill(0).map((item,index) => {
                return  <BlockItem width={2} height={2} blockStyle={block2_2} key={index} defaultPosition={{left:pTd(250),top:bottom + index * 3 - block2_2.height}} />
            })
        }
        <BlockInfo index={2} num={blockData.block2_2} positionStyle={{left:pTd(250),top:infoTextBottom}}/>
        {
            new Array(blockData.block3_1).fill(0).map((item,index) => {
                return <BlockItem width={3} height={1} blockStyle={block3_1} key={index} defaultPosition={{left:pTd(450),top:bottom + index * 3 - block3_1.height}} />
            })
        }
        <BlockInfo index={3} num={blockData.block3_1} positionStyle={{left:pTd(450),top:infoTextBottom}}/>

        {
            new Array(blockData.block2_1).fill(0).map((item,index) => {
                return <BlockItem width={2} height={1} blockStyle={block2_1} key={index} defaultPosition={{left:pTd(700),top:bottom + index * 3 - block2_1.height}} />
            })
        }
        <BlockInfo index={4} num={blockData.block2_1} positionStyle={{left:pTd(700),top:infoTextBottom}}/>

        {
            new Array(blockData.block3_2).fill(0).map((item,index) => {
                return <BlockItem width={3} height={2} blockStyle={block3_2} key={index} defaultPosition={{left:pTd(900),top:bottom + index * 3 - block3_2.height}} />
            })
        }
        <BlockInfo index={5} num={blockData.block3_2} positionStyle={{left:pTd(900),top:infoTextBottom}}/>
       
    </View>
}