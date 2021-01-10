import { StyleSheet } from "react-native";
import theme from '../../AppStyles'

export default StyleSheet.create({
  buttonOutline: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: theme.colors.primaryButton,
    padding: theme.spacing.xs,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleOutline: {
    color: theme.colors.primaryButton
  },
  title: {
    color: theme.colors.inverseText
  }
})