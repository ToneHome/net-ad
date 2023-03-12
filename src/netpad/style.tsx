import { StyleSheet, Dimensions, StyleProp, ViewStyle } from "react-native";
const uiWidthPx = 1200; // 设计稿宽
const uiHeightPx = 844; // 设计稿高
const deviceWidthDp = Dimensions.get('screen').width; // 当前设备的宽
const deviceHeightDp = Dimensions.get('screen').height; // 当前设备的高

export const pTd = (uiElePx: number): number => {
    return (deviceHeightDp / uiHeightPx) * uiElePx;
};

export const mainViewStyle = StyleSheet.create({
    mainStyle: {
        height: '100%',
        width: '100%',
        position: 'relative',
        backgroundColor: "white"
    }
})

const rate = 7
export const blockStyle = StyleSheet.create({
    backBlock: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'blue'
    },
    block1_1: {
        width: pTd(8 * rate),
        height: pTd(8 * rate),
        backgroundColor: '#F2B6B4',
    },
    block2_2: {
        width: pTd(16 * rate),
        height: pTd(16 * rate),
        backgroundColor: "#86ADEC"
    },
    block3_1: {
        width: pTd(24 * rate),
        height: pTd(8 * rate),
        backgroundColor: "#BEADF9"
    },
    block2_1: {
        width: pTd(16 * rate),
        height: pTd(8 * rate),
        backgroundColor: "#94dba7"
    },
    block3_2: {
        width: pTd(24 * rate),
        height: pTd(16 * rate),
        backgroundColor: "#EBE799"
    },
    blockInfo:{
        position:'absolute',
    },
    blockInfoText:{
        //  color:'red',
        fontSize:pTd(20)
    }
})

export const block1_1 = { ...blockStyle.backBlock, ...blockStyle.block1_1 }//StyleSheet.compose(blockStyle.backBlock,blockStyle.block1_1)
// console.log('blockStyle.block1_1: ', blockStyle.block1_1);
// console.log('blockStyle.backBlock: ', blockStyle.backBlock);
// console.log('block1_1: ', block1_1);
export const block2_2 = { ...blockStyle.backBlock, ...blockStyle.block2_2 }//StyleSheet.compose(blockStyle.backBlock, blockStyle.block2_2)
export const block3_1 = { ...blockStyle.backBlock, ...blockStyle.block3_1 }// StyleSheet.compose(blockStyle.backBlock, blockStyle.block3_1)
export const block2_1 = { ...blockStyle.backBlock, ...blockStyle.block2_1 } //StyleSheet.compose(blockStyle.backBlock, blockStyle.block2_1)
export const block3_2 = { ...blockStyle.backBlock, ...blockStyle.block3_2 }//StyleSheet.compose(blockStyle.backBlock, blockStyle.block3_2)


export const textStyle = StyleSheet.create({
    width:{
        position:'absolute',
        bottom:5,
        left:'48%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    height:{
        position:'absolute',
        right:5,
        top:'40%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})


export const titleStyle = StyleSheet.create({
    postion:{
        position:'absolute',
        left:pTd(10),
        top:pTd(10),
    },
    font:{
        fontSize:pTd(30),
        fontWeight:'bold'
    }
})
// export const mainView = StyleSheet.compose(mainViewStyle.mainStyle)