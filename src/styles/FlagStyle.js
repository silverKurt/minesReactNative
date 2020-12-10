import React from 'react'
import { StyleSheet } from 'react-native'

import params from '../Parameters'

export default StyleSheet.create({
    Container: {
        marginTop: 2
    },
    Flag: {
        position: 'absolute'
        , height: 5
        , width: 6
        , backgroundColor: '#F22'
        , marginLeft: 3
    },
    FlagPole:{
        position: 'absolute'
        , height: 14
        , width: 2
        , backgroundColor: '#222'
        , marginLeft: 9
    },
    FirstBase: {
        position: 'absolute'
        , height: 2
        , width: 6
        , backgroundColor: '#222'
        , marginLeft: 7
        , marginTop: 10
    },
    SecondBase:{
        position: 'absolute'
        , height: 2
        , width: 10
        , backgroundColor: '#222'
        , marginLeft: 5
        , marginTop: 12
    },
    FlagBigger: {
        position: 'absolute'
        , height: 10
        , width: 14
        , marginLeft: 3
    },
    FlagPoleBigger:{
        height: 28
        , width: 4
        , marginLeft: 16
    },
    FirstBaseBigger: {
        height: 4
        , width: 12
        , marginLeft: 12
        , marginTop: 20
    },
    SecondBaseBigger:{
        height: 4
        , width: 20
        , marginLeft: 8
        , marginTop: 24
    }
})