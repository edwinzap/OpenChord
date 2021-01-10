import React, { useState, FunctionComponent, useContext } from "react";
import { Text, View, TextInput, Alert } from "react-native";
import { Playlist } from "../../db/Playlist";
import DraggableFlatList, { RenderItemInfo } from 'react-native-draggable-flatlist'
import TouchableIcon from "../../components/TouchableIcon/TouchableIcon";
import { Song } from "../../db";
import ErrorText from "../../components/ErrorText/ErrorText";
import DraggableItem from "./components/DraggableItem";
import LanguageContext from "../../languages/LanguageContext";
import { RootStackParamList } from "../../AppNavigation";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './PlaylistEdit.style'

type PlaylistEditScreenRouteProp = RouteProp<RootStackParamList, 'PlaylistEdit'>
type PlaylistEditScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PlaylistEdit'
>
type Props = {
  route: PlaylistEditScreenRouteProp
  navigation: PlaylistEditScreenNavigationProp
}

const PlaylistEdit: FunctionComponent<Props> = (props: Props) => {
  let id = props.route.params.id
  let playlist = Playlist.getById(id)!
  const [name, setName] = useState(playlist.name)
  const [songs, setSongs] = useState(Array.from(playlist.songs))
  const [error, setError] = useState<string | null>(null)
  const { t } = useContext(LanguageContext)

  function onPressCancel() {
    props.navigation.goBack()
  }
  function onPressSavePlaylist() {
    try {
      Playlist.update(playlist.id, name, songs)
      props.navigation.goBack()
      Alert.alert(t('info'), t('playlist_saved'))
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
      } else {
        throw e
      }
    }
  }
  function onPressRemoveSong(song: Song) {
    setSongs(songs.filter(s => s != song))
  }
  function renderItem(info: RenderItemInfo<Song>) {
    let { item, move, moveEnd } = info
    return (
      <DraggableItem
        title={item.title}
        subtitle={item.artist.name}
        onPressDelete={() => onPressRemoveSong(item)}
        onDragStart={move}
        onDragEnd={moveEnd}
      />
    )
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableIcon name="close" onPress={onPressCancel} />
        <Text style={styles.headerTitle}>{t('playlist_edit')}</Text>
        <TouchableIcon name="check" onPress={onPressSavePlaylist} />
      </View>
      <View style={styles.playlistNameInputContiner}>
        <TextInput
          style={styles.playlistNameInput}
          value={name}
          onChangeText={value => setName(value)}
          placeholder={t('playlist_name')}
        />
        <ErrorText>{error}</ErrorText>
      </View>
      <DraggableFlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={item => `draggable-item-${item.id}`}
        scrollPercent={5}
        onMoveEnd={({ data }) => { if (data != null) setSongs(Array.from(data)) }}
      />
    </SafeAreaView>
  )
}

export default PlaylistEdit