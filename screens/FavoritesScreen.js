import { Text } from 'react-native';
import React, { useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites-context';
import { FlatList } from 'react-native-gesture-handler';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen()
{
  const favoritesContext = useContext(FavoritesContext);
  const items = MEALS.filter((mealItem) => favoritesContext.ids.includes(mealItem.id));
  return <FlatList
    data={items}
    renderItem={({ item }) => <Text>{item.title}</Text>}
  />;
}

export default FavoritesScreen;
