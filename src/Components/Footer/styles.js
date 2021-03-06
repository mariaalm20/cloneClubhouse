import styled from 'styled-components/native';

export const Container = styled.View`
  height: 10%;
  position: absolute;
  bottom: 0;
  width: 100%;
  elevation: 3;
  background-color: #f2f2f2;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
`;

export const BackgroundButton = styled.View`
  background-color: #eeee;
  align-items: center;
  justify-content: center;
  width: ${props => props.isCircle ? 40 : 140};
  height: ${props => props.isCircle ? 40 : 40};
  border-radius: 20px;
  flex-direction: row;
  margin-left: ${props => props.isLastItem ? 10 : 0};
`

export const TextButton = styled.Text`
  font-size: 15px;
  color: #E24C51;
  margin: 4px 0 0 4px;
  font-family: 'Poppins-Medium';
`

export const ItemRight = styled.View`
  flex-direction:row;
`