import { StyleSheet } from "react-native";
import theme from '../../AppStyles'

export default StyleSheet.create({
  container: {
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.cardBackground,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.contentBackground,
    borderRadius: 100,
    paddingHorizontal: 10
  },
  searchText: {
    flex: 1,
    paddingVertical: 8,
    paddingLeft: 8,
    fontSize: 18
  }
});