import { StyleSheet } from "react-native";
import theme from '@styles/AppStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground
  },
  addSongsButton: {
    margin: theme.spacing.m
  },
  sortingButton: {
    flexDirection: 'row',
    paddingVertical: theme.spacing.s,
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
    paddingLeft: theme.spacing.m,
    alignItems: 'center'
  },
  sortingText: {
    color: theme.colors.text
  },

  sortingArrow: {
    marginLeft: 8
  }
});