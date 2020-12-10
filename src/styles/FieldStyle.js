import React from 'react'
import { StyleSheet } from 'react-native'

import params from '../Parameters'

export default StyleSheet.create({
    Field: {
        height: params.blockSize
        , width: params.blockSize
        , borderWidth: params.borderSize
    },
    Regular: {
        backgroundColor: '#999'
        , borderLeftColor: '#CCC'
        , borderTopColor: '#CCC'
        , borderRightColor: '#333'
        , borderBottomColor: '#333'
    },
    Opened: {
        backgroundColor: '#999'
        , borderColor: '#777'
        , alignItems: 'center'
        , justifyContent: 'center'
    },
    Label: {
        fontWeight: 'bold'
        , fontSize: params.fontSize
    }, 
    Exploded:{
       backgroundColor: 'red'
       , borderColor: 'red' 
    }
})