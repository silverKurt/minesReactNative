import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

import FS from '../styles/FieldStyle'

import Mine from './Mine'
import Flag from './Flag'

export default props => {
    const { mined, opened, nearMines, exploded, flagged } = props
    const styleField = [FS.Field]
    //outros estilos
    if (opened) styleField.push(FS.Opened)
    if (exploded) styleField.push(FS.Exploded)
    if (flagged) styleField.push(FS.Flagged)
    if (!opened && !exploded) styleField.push(FS.Regular)

    let color = null
    if (nearMines > 0) {
        if (nearMines === 1) color = '#2A28D7'
        if (nearMines === 2) color = '#2B520F'
        if (nearMines > 2 && nearMines < 6) color = '#F9060A'
        if (nearMines >= 6) color = '#F221A9'
    }

    return (
        <TouchableWithoutFeedback onPress={props.onOpen} onLongPress={props.onSelect}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ? <Text style={[FS.Label, { color: color }]}>{nearMines}</Text> : false}
                {mined && opened ? <Mine /> : false}
                {flagged && !opened ? <Flag /> : false}
            </View>
        </TouchableWithoutFeedback>
    )
}