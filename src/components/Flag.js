import React from 'react'
import { View } from 'react-native'

import FS from '../styles/FlagStyle'

export default props => {
    return (
        <View style={FS.Container}>
            <View style={[FS.FlagPole, props.bigger ? FS.FlagPoleBigger : null]} />
            <View style={[FS.Flag, props.bigger ? FS.FlagBigger : null]} />
            <View style={[FS.FirstBase, props.bigger ? FS.FirstBaseBigger : null]} />
            <View style={[FS.SecondBase, props.bigger ? FS.SecondBaseBigger : null]} />
        </View>
    )
}