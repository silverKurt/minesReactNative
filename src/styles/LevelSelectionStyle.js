import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    Frame: {
        flex: 1
        , alignItems: 'center'
        , justifyContent: 'center'
        , backgroundColor: 'rgba(0,0,0,0.6)'
    },
    Container:{
        backgroundColor: '#EEE'
        , alignItems: 'center'
        , justifyContent: 'center'
        , padding: 15
    },
    Title: {
        fontSize: 30
        , fontWeight: 'bold'
    },
    Button: {
        marginTop: 10
        , padding: 5
    },
    BgEasy:{
        backgroundColor: '#49B65D'
    }, 
    ButtonLabel: {
        fontSize: 20
        , color: '#EEE'
        , fontWeight: 'bold'
    },
    BgNormal:{
        backgroundColor: '#5765F7'
    },
    BgHard:{
        backgroundColor: '#F26337'
    }
})