import React, { useEffect, useRef, FunctionComponent } from "react";
import { Text, View, TouchableOpacity, FlatList, StyleProp, ViewStyle } from "react-native";
import ChordChart from "../ChordChart/ChordChart";
import chords from '../../assets/chords/guitar.json';
import styles from './ChordTab.style';

interface Props {
  selectedChord: Chord | null | undefined
  allChords: Array<Chord>
  onPressClose: () => void
  closeLabel: string
}
const ChordTab: FunctionComponent<Props> = ({ selectedChord, allChords, onPressClose, closeLabel }) => {
  const flatList = useRef<FlatList<Chord>>(null)

  if (selectedChord != null && flatList.current != null)
    flatList.current.scrollToItem({ animated: true, item: selectedChord })

  if (selectedChord == null)
    return null

  return (
    <View style={styles.tabContainter}>
      <TouchableOpacity style={styles.closeButton} onPress={onPressClose}>
        <Text style={styles.closeButtonText}>{closeLabel}</Text>
      </TouchableOpacity>
      <FlatList
        ref={flatList}
        style={styles.chordList}
        onScrollToIndexFailed={() => { }}
        keyExtractor={(item, index) => item.toString()}
        horizontal
        data={allChords}
        extraData={selectedChord}
        renderItem={({ item }) => {
          let allChords: any = chords
          let position = null
          if (allChords.hasOwnProperty(item.toString())) {
            let chordObj = allChords[item.toString()].find(() => true)
            if (chordObj != null) {
              position = chordObj.positions
            }
          }
          let selectedStyle: StyleProp<ViewStyle> = null
          if (item.toString() == selectedChord.toString())
            selectedStyle = styles.itemSelected
          return (
            <View key={item.toString()} style={[styles.item, selectedStyle]}>
              <ChordChart
                width={100}
                height={120}
                chord={position}
              />
              <Text>{item.toString()}</Text>
            </View>
          )
        }}
      />
    </View>

  );
}
export default ChordTab