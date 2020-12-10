import React from 'react'
import { TouchableOpacity, View, Text, Modal } from 'react-native'

import LSS from '../styles/LevelSelectionStyle'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel} visible={props.isVisible} animationType='slide' transparent={true}>
            <View style={LSS.Frame}>
                <View style={LSS.Container}>
                    <Text style={LSS.Title}>Selecione o Nível:</Text>
                    <TouchableOpacity style={[LSS.Button, LSS.BgEasy]} onPress={() => props.onLevelSelected(0.1)}>
                        <Text style={LSS.ButtonLabel}>Fácil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[LSS.Button, LSS.BgNormal]} onPress={() => props.onLevelSelected(0.2)}>
                        <Text style={LSS.ButtonLabel}>Normal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[LSS.Button, LSS.BgHard]} onPress={() => props.onLevelSelected(0.3)}>
                        <Text style={LSS.ButtonLabel}>Difícil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}