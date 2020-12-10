import React from 'react'
import { StyleSheet } from 'react-native'

import params from '../Parameters'

export default StyleSheet.create({
    Container: {
        alignItems: 'center'
        , justifyContent: 'center'
    },
    CoreMine: {
        height: 14
        , width: 14
        , borderRadius: 10
        , backgroundColor: 'black'
        , alignItems: 'center'
        , justifyContent: 'center'
    },
    Line: {
        position: 'absolute'
        , height: 3
        , width: 20
        , borderRadius: 3
        , backgroundColor: 'black'
    }
})