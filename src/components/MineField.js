import React from 'react'
import { View } from 'react-native'

import MFS from '../styles/MineFieldStyle'

import Field from './Field'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c} onOpen={() => props.onOpenField(r, c)} onSelect={e => props.onSelectField(r, c)} />
        })
        return <View style={{ flexDirection: 'row' }} key={r}>{columns}</View>
    })
    return <View style={MFS.Container}>{rows}</View>
}