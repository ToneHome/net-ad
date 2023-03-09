import { StyleSheet } from "react-native";


export const mainViewStyle = StyleSheet.create({
    mainStyle: {
        height: '100%',
        width: '100%',
        position: 'relative',
        backgroundColor: "white"
    }
})

const rate = 7
const blockStyle = StyleSheet.create({
    backBlock: {
        position: 'absolute',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:'blue'
    },
    block1_1: {
        width: 10 * rate,
        height: 10 * rate,
        backgroundColor: '#EAAF70',
    },
    block2_2: {
        width: 20 * rate,
        height: 20 * rate,
        backgroundColor: "#86ADEC"
    },
    block3_1: {
        width: 30 * rate,
        height: 10 * rate,
        backgroundColor: "#EAB6E7"
    },
    block2_1: {
        width: 20 * rate,
        height: 10 * rate,
        backgroundColor: "#94dba7"
    },
    block3_2: {
        width: 30 * rate,
        height: 20 * rate,
        backgroundColor: "#EBE799"
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


// export const mainView = StyleSheet.compose(mainViewStyle.mainStyle)