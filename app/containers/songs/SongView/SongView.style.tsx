import { StyleSheet } from "react-native";
import theme from '@styles/AppStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.contentBackground
  },
  flexRow: {
    flexDirection: 'row',
  },
  tool: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.s,
    paddingVertical: theme.spacing.xs,
  },
  toolButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toolLabelSmall: {
    maxWidth: 100,
    paddingRight: 0,
    textTransform: 'uppercase',
  },
  toolLabel: {
    position: 'relative',
    textAlign: 'left',
    textTransform: 'uppercase',
    paddingVertical: theme.spacing.xs,
  },
  toolBadge: {
    position: 'absolute',
    top: -5,
    right: -15,
    width: 30,
    height: 20,
    color: 'tomato'
  },
})