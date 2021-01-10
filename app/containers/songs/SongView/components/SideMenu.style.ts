import { StyleSheet } from "react-native";
import theme from '@styles/AppStyles'

export default StyleSheet.create({
  backgroundOverlayer: {
    flex: 1,
    backgroundColor: theme.colors.transparentBackground,
  },
  fixed: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  card: {
    display: 'flex',
    //borderRadius: 4,
    elevation: 2,
    backgroundColor: theme.colors.contentBackground,
  },
})