import React, { useState, useContext, useCallback } from "react";
import { FlatList } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Artist } from '@db'
import { ListItem, TextInputModal, EmptyListMessage, CustomHeader } from "@components";
import { RootStackParamList, MainTabParamList } from "@navigation/AppNavigation";
import LanguageContext from "@languages/LanguageContext";

import { alertDelete } from "@utils";
import theme from '@styles/AppStyles';

type ArtistListScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'ArtistList'>,
  StackNavigationProp<RootStackParamList, 'MainTab'>
>;

type Props = {
  navigation: ArtistListScreenNavigationProp;
}

const ArtistList = (props: Props) => {
  const [artists, setArtists] = useState(Artist.getAll())
  const [error, setError] = useState<string | null>(null)
  const [showEditArtistModal, setShowEditArtistModal] = useState(false)
  const [artistEditName, setArtistEditName] = useState<string>('')
  const [artistEditId, setArtistEditId] = useState<string | null>(null)
  const { t } = useContext(LanguageContext)

  function onSelectArtist(id: string, name: string) {
    props.navigation.navigate('ArtistView', { id, title: name })
  }
  function onPressDeleteArtist(id: string) {
    alertDelete('artist', id, () => {
      setArtists(Artist.getAll())
    })
  }
  function onPressEditArtist(id: string, name: string) {
    setError(null)
    setArtistEditId(id)
    setArtistEditName(name)
    setShowEditArtistModal(true)
  }
  function onSubmitArtistName() {
    try {
      if (artistEditName == '') {
        throw new Error(t('empty_name_not_allowed'))
      } else if (artistEditId) {
        Artist.update(artistEditId, artistEditName)
        setShowEditArtistModal(false)
        setArtists(Artist.getAll())
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
      } else {
        throw e
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
      setArtists(Artist.getAll())
    }, [])
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}>
      <CustomHeader title={t('artists')} />
      <TextInputModal
        error={error}
        value={artistEditName}
        onChange={(value) => setArtistEditName(value)}
        enabled={showEditArtistModal}
        onDismiss={() => {
          setError(null)
          setShowEditArtistModal(false)
        }}
        onSubmit={onSubmitArtistName}
      />
      <FlatList
        data={artists}
        contentContainerStyle={artists.length <= 0 ? { flex: 1 } : {}}
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
              title={item.name}
              onPress={() => onSelectArtist(item.id!, item.name)}
              options={[
                { title: t('edit'), onPress: () => onPressEditArtist(item.id, item.name) },
                { title: t('delete'), onPress: () => onPressDeleteArtist(item.id!) }
              ]} />
          )
        }}
      />
    </SafeAreaView>
  );
}

export default ArtistList