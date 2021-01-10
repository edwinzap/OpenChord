import { StyleSheet } from "react-native";
import theme from '../../AppStyles'

export default StyleSheet.create({
  backgroundOverlayer: {
    backgroundColor: '#00000040',
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
    paddingVertical: 20,
    fontSize: 18
  }
});