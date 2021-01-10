import React, { useState, useEffect, FunctionComponent, useContext, useCallback } from "react";
import { CompositeNavigationProp, useFocusEffect } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Song } from '@db'
import { ListItem, TouchableIcon, SearchBar, EmptyListMessage, CustomHeader, } from "@components";
import { FlatList } from "react-native";
import { MainTabParamList, RootStackParamList } from "@navigation/AppNavigation";
import LanguageContext from "@languages/LanguageContext";
import { alertDelete } from "@utils";
import theme from '@styles/AppStyles';

type SongListScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'SongList'>,
  StackNavigationProp<RootStackParamList, 'MainTab'>
>
type Props = {
  navigation: SongListScreenNavigationProp
}
const SongList: FunctionComponent<Props> = (props: Props) => {
  const { navigation } = props
  const [songs, setSongs] = useState(Song.getAll())
  const [query, setQuery] = useState('')
  const { t } = useContext(LanguageContext)

  function onSelectSong(id: string, title: string) {
    props.navigation.navigate('SongView', { id, title })
  }
  function addNewSong() {
    props.navigation.navigate('SongEdit')
  }
  function onPressEditSong(id: string) {
    props.navigation.navigate('SongEdit', { id })
  }
  function onPressGoToArtist(id: string) {
    let artist = Song.getById(id)!.artist
    props.navigation.navigate('ArtistView', { id: artist.id, title: artist.name })
  }
  function onPressDeleteSong(id: string) {
    alertDelete('song', id, () => {
      setSongs(Song.getAll())
    })
  }

  useEffect(() => {
    if (query != '') {
      setSongs(Song.search(query))
    } else {
      setSongs(Song.getAll())
    }
  }, [query])

  useFocusEffect(
    useCallback(() => {
      if (query != '') {
        setSongs(Song.search(query))
      } else {
        setSongs(Song.getAll())
      }
    }, [])
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}>
      <CustomHeader
        title={t('songs')}
        headerRight={<TouchableIcon onPress={addNewSong} name="plus" color={theme.colors.text} />}
      />
      <SearchBar
        onChangeText={(value) => setQuery(value)}
        query={query}
        placeholder={t('search')}
      />
      <FlatList
        data={songs}
        contentContainerStyle={songs.length <= 0 ? { flex: 1 } : {}}
        ListEmptyComponent={
          <EmptyListMessage
            message={t('you_havent_downloaded_any_song_yet')}
            onPress={() => { props.navigation.navigate('OnlineSearch') }}
            buttonTitle={t('go_to_online_search').toUpperCase()}
          />
        }
        renderItem={({ item }) => {
          return (
            <ListItem
              key={item.id!}
              title={item.title}
              subtitle={item.artist.name}
              onPress={() => onSelectSong(item.id!, item.title)}
              options={[
                { title: t('go_to_artist'), onPress: () => onPressGoToArtist(item.id!) },
                { title: t('edit'), onPress: () => onPressEditSong(item.id!) },
                { title: t('delete'), onPress: () => onPressDeleteSong(item.id!) }
              ]}
            />
          )
        }}
      />
    </SafeAreaView>
  )
}

export default SongList