import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as S from './styles';
import avatar from '../assets/pessoa1.jpeg';
import Emoji from 'react-native-emoji';
import {Footer, Users} from '../Components'

const Home = () => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderItem>
          <S.DownIcon name="chevron-down" size={32} color="#4f4f4f" />
          <S.Title>All rooms</S.Title>
        </S.HeaderItem>

        <S.HeaderItem>
          <Icon name="file" size={26} color="#4f4f4f" />
          <S.Avatar source={avatar} />
        </S.HeaderItem>
      </S.Header>
      
      <S.ContentPeople>
       <S.Content>
       <S.Header>
          <S.HeaderItem>
            <S.WelcomeText>Welcome to clubehouse</S.WelcomeText>
            <Emoji name="tada" style={{fontSize: 20, marginLeft: 2}} />
          </S.HeaderItem>
          <Icon name="more-horizontal" size={26} color="#4f4f4f" />
        </S.Header>
        <Users />
       </S.Content>

        <Footer />
      </S.ContentPeople>
    </S.Container>
  );
};

export default Home;
