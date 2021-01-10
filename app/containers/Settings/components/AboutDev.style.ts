import { StyleSheet } from "react-native";
import theme from '@styles/AppStyles'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  devButton: {
    paddingVertical: theme.spacing.m
  },
  developpedBy: {
    color: theme.colors.text
  },
  devName: {
    color: theme.colors.activeTint
  }
})