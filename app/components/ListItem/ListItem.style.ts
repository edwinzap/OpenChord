import { StyleSheet } from "react-native";
import theme from "@styles/AppStyles";


const styleProps = {
  touchableIcon: {
    color: theme.colors.text
  }
};

export {styleProps};

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.cardBackground,
    justifyContent: 'space-between'
  },
  textContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    color: theme.colors.text
  },
  title: {
    fontSize: 18,
    color: theme.colors.text
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.text
  },
  leftIcon: {
    width: 30,
    
  }
});