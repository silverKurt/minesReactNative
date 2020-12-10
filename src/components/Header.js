import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import Flag from './Flag'

import HS from '../styles/HeaderStyle'

export default props => {
    return (
        <View style={HS.Container}>
            <View style={HS.FlagContainer}>
                <TouchableOpacity style={HS.FlagButton} onPress={props.onFlagPress}>
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={HS.FlagsLeft}>
                    ={props.flagsLeft}
                </Text>
            </View>
            <TouchableOpacity style={HS.Button} onPress={props.onNewGame}>
                <Text style={HS.ButtonLabel}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    )
}