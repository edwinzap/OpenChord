import React, { FC, useRef } from "react";
import { View, Animated } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableHighlight } from "react-native-gesture-handler";
import styles from './PageTurner.style'

interface Props {
  show: boolean
  onPressNext: () => void
  onPressPrevious: () => void
}
const PageTurner: FC<Props> = ({ show, onPressNext, onPressPrevious }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    if (show) {
      Animated.sequence([
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }
        ),
        Animated.timing(
          fadeAnim,
          {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }
        ),
      ]).start()
    }
  }, [show])

  if (!show) return null
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.touchableArea}
          underlayColor="#00000000"
          onPress={onPressPrevious}>
          <Animated.View style={[styles.button, { opacity: fadeAnim }]}>
            <MaterialCommunityIcons size={40} name="arrow-up" />
          </Animated.View>
        </TouchableHighlight>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.touchableArea}
          underlayColor="#00000000"
          onPress={onPressNext}>
          <Animated.View style={[styles.button, { opacity: fadeAnim }]}>
            <MaterialCommunityIcons size={40} name="arrow-down" />
          </Animated.View>
        </TouchableHighlight>
      </View>
    </View>
  )
}
export default PageTurner