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
import { BlockItem } from "./blockItem";
import { block1_1, block2_1, block2_2, block3_1, block3_2, mainViewStyle } from "./style";
export function NetPadMain(){
    
    const [blockData,setBlockData] = useState({
        block1_1:7,
        block2_2:5,
        block3_1:3,
        block2_1:3,
        block3_2:4
    })

    return <View style={mainViewStyle.mainStyle}>
        
    
        {
            new Array(blockData.block1_1).fill(0).map((item,index) => {
                return <BlockItem blockStyle={block1_1} key={index} defaultPosition={{left:100,top:550 + index * 3}} />
            })
        }
        {
            new Array(blockData.block2_2).fill(0).map((item,index) => {
                return  <BlockItem blockStyle={block2_2} key={index} defaultPosition={{left:250,top:550 + index * 3}} />
            })
        }
        {
            new Array(blockData.block3_1).fill(0).map((item,index) => {
                return <BlockItem blockStyle={block3_1} key={index} defaultPosition={{left:450,top:550 + index * 3}} />
            })
        }
        {
            new Array(blockData.block2_1).fill(0).map((item,index) => {
                return <BlockItem blockStyle={block2_1} key={index} defaultPosition={{left:700,top:550 + index * 3}} />
            })
        }
        {
            new Array(blockData.block3_2).fill(0).map((item,index) => {
                return <BlockItem blockStyle={block3_2} key={index} defaultPosition={{left:900,top:550 + index * 3}} />
            })
        }
       
        
        
        
    </View>
}