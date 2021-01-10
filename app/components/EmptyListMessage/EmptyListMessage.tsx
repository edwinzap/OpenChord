import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import styles from './EmptyListMessage.style'

interface EmptyListMessageProps {
  message: string
  onPress?: () => void
  buttonTitle?: string
}
const EmptyListMessage: FunctionComponent<EmptyListMessageProps> = (props) => {
  let { message, onPress, buttonTitle } = props
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      {buttonTitle && onPress &&
        <PrimaryButton onPress={onPress} title={buttonTitle} />
      }
    </View>
  )
}

export default EmptyListMessage 