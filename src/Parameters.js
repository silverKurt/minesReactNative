import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15,
    difficultyLevel: 0.1,
    
    getColumnsAmout(){
        const totalWidth = Dimensions.get('window').width
        return Math.floor(totalWidth / this.blockSize)
    },

    getRowsAmount(){
        const totalHeight = Dimensions.get('window').height
        const boardtHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardtHeight / this.blockSize)
    }

}

export default params