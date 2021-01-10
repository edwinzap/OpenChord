import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import styles from './PrimaryButton.style'

interface PrimaryButtonProps {
  style?: StyleProp<ViewStyle>
  title: string
  onPress: () => void
  outline?: boolean
}
const PrimaryButton: FunctionComponent<PrimaryButtonProps> = (props) => {
  let { title, onPress, outline = false, style } = props
  return (
    <TouchableOpacity style={[outline ? styles.buttonOutline : styles.button, style]} onPress={onPress}>
      <Text style={outline ? styles.titleOutline : styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton