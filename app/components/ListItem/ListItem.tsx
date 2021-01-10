import React, { useState, FunctionComponent } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { TouchableIcon, OptionsMenu } from "@components";
import { Option } from "@components/OptionsMenu/OptionsMenu";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './ListItem.style'

export type LeftIconOptions = null | 'empty-space' | 'arrow-up' | 'arrow-down'
interface ListItemProps {
  title: string
  subtitle?: string
  onPress: () => void
  leftIcon?: LeftIconOptions
  showIcon?: undefined | null | 'plus' | 'check'
  options?: Option[]
}

const ListItem: FunctionComponent<ListItemProps> = (props) => {
  const [isMenuEnabled, setMenuEnabled] = useState(false)
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.item}>
      {props.leftIcon == 'empty-space' && <View style={styles.leftIcon}></View>}
      {props.leftIcon != null && props.leftIcon != 'empty-space' &&
        <MaterialCommunityIcons
          style={styles.leftIcon}
          name={props.leftIcon}
          size={14} />}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        {props.subtitle && <Text style={styles.subtitle}>{props.subtitle}</Text>}
      </View>
      {props.showIcon == 'check' && <TouchableIcon onPress={props.onPress} name="check" size={25} />}
      {props.showIcon == 'plus' && <TouchableIcon onPress={props.onPress} name="plus" size={25} />}
      {props.options &&
        <TouchableIcon onPress={() => setMenuEnabled(true)} name="dots-vertical" size={25} color={styles.leftIcon.tintColor} />
      }
      {props.options &&
        <OptionsMenu
          onDismiss={() => setMenuEnabled(false)}
          enabled={isMenuEnabled}
          options={props.options} />
      }
    </TouchableOpacity>
  );
}
export default ListItem