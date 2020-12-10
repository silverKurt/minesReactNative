import React from 'react'
import { Text, View } from 'react-native'

import MS from '../styles/MineStyle'

export default  props => {
    return (
        <View style={MS.Container}>
            <View style={MS.CoreMine} />
            <View style={MS.Line} />
            <View style={[MS.Line, {transform: [{rotate: '45 deg'}]}]} />
            <View style={[MS.Line, {transform: [{rotate: '90 deg'}]}]} />
            <View style={[MS.Line, {transform: [{rotate: '135 deg'}]}]} />
        </View>
    )
}