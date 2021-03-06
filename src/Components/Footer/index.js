import React from 'react';
import {Text, View} from 'react-native';
import Emoji from 'react-native-emoji'
import Icon from 'react-native-vector-icons/Feather'
import Iconicons from 'react-native-vector-icons/Ionicons'

import * as S from './styles';

const Footer = () => {
  return (
    <S.Container>
      <S.BackgroundButton>
        <Emoji name="v"/>
        <S.TextButton>Leave quietly</S.TextButton>
      </S.BackgroundButton>
      
      <S.ItemRight>
      <S.BackgroundButton isCircle>
        <Icon name="plus" size={24} color="#4f4f4f"/>
      </S.BackgroundButton>

      <S.BackgroundButton isCircle   isLastItem>
      <Emoji name="hand" style={{fontSize: 18}}/>
      </S.BackgroundButton>
      </S.ItemRight>
    </S.Container>
  );
};

export default Footer;
