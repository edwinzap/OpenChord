import React, { FunctionComponent, ReactNode } from "react";
import { Text, View } from "react-native";
import styles from './CustomHeader.style'

interface Props {
  title: string
  headerRight?: ReactNode
}
const CustomHeader: FunctionComponent<Props> = ({ title, headerRight }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.headerRight}>
      {headerRight}
    </View>
  </View>
)

export default CustomHeader