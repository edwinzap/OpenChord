import { StyleSheet } from "react-native";
import theme from '@styles/AppStyles'

export default StyleSheet.create({
  scrollContainer: {
    position: 'absolute',
    backgroundColor: theme.colors.transparentBackground,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    zIndex: 999
  },
  background: {
    backgroundColor: 'white'
  },
  scrollHeader: {
    justifyContent: 'flex-end'
  },
  scrollHeaderTouchableBackground: {
    flex: 1
  },
  createPlaylistButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  createPlaylistButtonText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    fontSize: 14,
  },
  emptyMessage: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: theme.colors.contentBackground,
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colors.border,
    padding: theme.spacing.xs
  }
});