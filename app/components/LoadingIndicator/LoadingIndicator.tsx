import React, { FunctionComponent } from "react";
import { StyleProp, ViewStyle, View, ActivityIndicator } from "react-native";
import { ErrorText } from "@components";
import styles from './LoadingIndicator.style'

interface LoadingIndicatorProps {
  style?: StyleProp<ViewStyle>
  error?: string | null
  loading?: boolean
}
const LoadingIndicator: FunctionComponent<LoadingIndicatorProps> = (props) => {
  let { error, loading, style } = props
  return (
    <View style={[styles.container, style]}>
      <ErrorText style={styles.activity}>{error}</ErrorText>
      {loading && <ActivityIndicator style={styles.activity} />}
    </View>
  )
}

export default LoadingIndicator