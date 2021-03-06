import React from 'react';
import {FlatList, Text, Image, View} from 'react-native';
import * as S from './styles';
import users from './data';

const Item = ({avatar, id}) => (
  <S.Container>
    <S.Avatar source={avatar} />
    <S.NameAvatar>user {id}</S.NameAvatar>
  </S.Container>
);

const Users = () => {
  const renderItem = ({item}) => <Item avatar={item.avatar} id={item.id} />;

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={3}
      />
    </View>
  );
};

export default Users;
