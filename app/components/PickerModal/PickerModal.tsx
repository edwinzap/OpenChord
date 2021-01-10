import React from "react";
import { View, TouchableOpacity, Modal } from "react-native";
import ListItem, { LeftIconOptions } from "@components/ListItem/ListItem";
import styles from './PickerModal.style'

export interface PickerOption<T> {
  key?: string
  label: string
  description?: string
  leftIcon?: LeftIconOptions
  value: T
}
interface Props<T> {
  show: boolean
  value: T
  options: PickerOption<T>[]
  onChange: (name: T) => void
  onDismiss: () => void
}

function PickerModal<T>(props: Props<T>) {
  const {
    value,
    show,
    onDismiss,
    options,
    onChange
  } = props

  if (!show) return null

  return (
    <Modal transparent onDismiss={onDismiss}>
      <View style={styles.backgroundOverlayer}>
        <TouchableOpacity style={styles.outsideContainer} onPress={onDismiss} />
        <View style={styles.container}>
          {options.map(o => {
            return (
              <ListItem
                key={o.key}
                onPress={() => onChange(o.value)}
                title={o.label}
                leftIcon={o.leftIcon}
                subtitle={o.description}
                showIcon={o.value === value ? 'check' : null} />
            )
          })}
        </View>
      </View>
    </Modal>
  );
}
export default PickerModal