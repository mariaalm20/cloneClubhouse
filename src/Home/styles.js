import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import Emoji from 'react-native-emoji';

export const Container = styled.View`
  flex: 1;
  background-color: #f3f1e6;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
`

export const HeaderItem = styled(Header)``

export const DownIcon = styled(Icon)`
  margin-right: 12px;
`

export const Title = styled.Text`
 color: #4f4f4f;
 font-size: 16px;
 margin-top: 4px;
 font-family: 'Poppins-Medium';
`

export const Avatar = styled.Image`
  width: 34px;
  height: 34px;
  border-radius: 12px;
  margin-left: 20px;
`

export const Content = styled.View`
 padding: 16px;
`

export const ContentPeople = styled.View`
  background-color: #f2f2f2;
  flex: 1;
  margin-top: 50px;
  elevation: 8;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  position: relative;
`
export const WelcomeText = styled(Title)`
 font-size: 20px;
`
export const PartyEmoji = styled(Emoji)`
  font-size: 20px;
  margin-left: 20px;
`


