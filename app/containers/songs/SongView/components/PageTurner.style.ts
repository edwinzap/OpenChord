import { StyleSheet } from "react-native";
import theme from '@styles/AppStyles'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0
  },
  buttonContainer: { flex: 1 },
  touchableArea: {
    width: '100%',
    height: '100%'
  },
  button: {
    borderRadius: 5,
    flex: 1,
    backgroundColor: theme.colors.transparentBackground,
    margin: theme.spacing.xs,
    justifyContent: 'center',
    alignItems: 'center'
  }
});