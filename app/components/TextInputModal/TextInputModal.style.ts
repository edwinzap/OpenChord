import { StyleSheet } from "react-native";
import theme from '@styles/AppStyles'

export default StyleSheet.create({
  backgroundOverlayer: {
    backgroundColor: theme.colors.transparentBackground,
    flex: 1,
    justifyContent: 'flex-end'
  },
  outsideContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.transparentBackground
  },
  input: {
    fontSize: theme.textVariants.subtitle,
    backgroundColor: theme.colors.contentBackground,
    paddingVertical: theme.spacing.s,
    paddingLeft: theme.spacing.xs
  },
  button: {
    paddingVertical: theme.spacing.s
  }
});