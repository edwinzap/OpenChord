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
    backgroundColor: theme.colors.contentBackground
  },
  optionItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionTitle: {
    paddingVertical: theme.spacing.m,
    fontSize: theme.textVariants.title.fontSize
  }
});