import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    Container: {
        flex: 1
        , flexDirection: 'row'
        , backgroundColor: '#EEE'
        , alignItems: 'center'
        , justifyContent: 'space-around'
        , paddingTop: 20
        , paddingHorizontal: 20
    },
    FlagContainer: {
        flexDirection: 'row'
    },
    FlagButton: {
        marginTop: 10
        , minWidth: 30
    },
    FlagsLeft: {
        fontSize:30
        , fontWeight: 'bold'
        , paddingTop: 5
        , marginRight: 20
    },
    Button: {
        backgroundColor: '#999'
        , padding: 5
    },
    ButtonLabel: {
        fontSize:20
        , fontWeight: 'bold'
        , color: '#DDD'
    }
})