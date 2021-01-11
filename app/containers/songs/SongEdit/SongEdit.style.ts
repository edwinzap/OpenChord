import { StyleSheet, Platform } from "react-native";
import theme from "@styles/AppStyles";

export default StyleSheet.create({
  container: {
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.contentBackground
  },
  tabsContainer: {
    flexDirection: 'row'
  },
  tabActive: {
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.m,
    backgroundColor: theme.colors.cardBackground
  },
  tabInactive: {
    flex: 1,
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.m,
    backgroundColor: theme.colors.contentBackground
  },
  input: {
    fontSize: theme.textVariants.subtitle.fontSize,
    paddingVertical: theme.spacing.s,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.cardBackground,
    marginBottom: 5
  },
  content: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    flex: 1,
    minHeight: 200,
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.cardBackground,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  sideMenuContainer: {
    backgroundColor: theme.colors.cardBackground,
    flex: 1
  },
  toolbarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.mainBackground
  }
})