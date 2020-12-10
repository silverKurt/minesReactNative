import React, { Component } from 'react'
import { SafeAreaView, View, Alert } from 'react-native'

import MineField from './src/components/MineField'
import Header from './src/components/Header'
import LS from './src/screens/LevelSelection'
import MS from './src/styles/MainScreen'

import { createMineBoard, cloneBoard, openField, hadExplosion, wonGame, showMines, inverFlag, flagsUsed } from './src/Functions'
import params from './src/Parameters'
import LevelSelection from './src/screens/LevelSelection'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmout()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultyLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmout()
    const rows = params.getRowsAmount()
    return {
      board: createMineBoard(rows, cols, this.minesAmount())
      , won: false
      , last: false
      , showLevelSelection: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('É bicha', 'Não foi dessa vez que o close veio!')
    }

    if (won) {
      Alert.alert('YUKÊÊÊ', 'Arrasou VINHADO!')
    }

    this.setState({ board, lost, won })

  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    inverFlag(board, row, column)
    const won = wonGame(board)
    if (won) {
      Alert.alert('YUKÊÊÊ', 'Arrasou VINHADO!')
    }
    this.setState({ board, won })
  }

  onLevelSelected = level => {
    params.difficultyLevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <SafeAreaView style={MS.Container}>
        <LevelSelection isVisible={this.state.showLevelSelection} onLevelSelected={this.onLevelSelected} onCancel={() => this.setState({ showLevelSelection: false })} />
        <Header onFlagPress={() => this.setState({ showLevelSelection: true })} flagsLeft={this.minesAmount() - flagsUsed(this.state.board)} onNewGame={() => this.setState(this.createState())} />
        <View style={MS.Board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField} onSelectField={this.onSelectField} />
        </View>
      </SafeAreaView>
    )
  }
}
