import React, { FunctionComponent } from "react";
import { TextProps, Text } from "react-native";
import styles from './ErrorText.style'

const ErrorText: FunctionComponent<TextProps> = (props) => {
  let { style, children } = props
  if (children != null) {
    return <Text {...props} style={[styles.errorMsg, style]}>{children}</Text>
  } else {
    return null
  }
}

export default ErrorText