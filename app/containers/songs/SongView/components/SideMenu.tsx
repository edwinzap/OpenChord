import React, { FC } from "react";
import { Modal, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDimensions } from "@utils";
import styles from './SideMenu.style'

interface Props {
  isOpen: boolean
  onDismiss: () => void
}
const SideMenu: FC<Props> = ({ isOpen, onDismiss, children }) => {
  const { isLandscape, windowData } = useDimensions()

  if (!isOpen) return null

  const maxHeight = windowData.height
  const heightStyle = isLandscape ? { height: maxHeight - 50 } : {}
  return (
    <Modal transparent onDismiss={onDismiss}  >
      <TouchableOpacity style={styles.backgroundOverlayer} onPress={onDismiss} />
      <SafeAreaView style={[styles.fixed, heightStyle]}>
        <ScrollView bounces={false} contentContainerStyle={[styles.card]}>
          {children}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  )
}

export default SideMenu