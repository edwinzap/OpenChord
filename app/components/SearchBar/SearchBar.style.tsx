import { StyleSheet } from "react-native";
import theme from '@styles/AppStyles'

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
    paddingHorizontal: theme.spacing.xs
  },
  searchText: {
    flex: 1,
    paddingVertical: 8,
    paddingLeft: 8,
    fontSize: theme.textVariants.subtitle
  }
});