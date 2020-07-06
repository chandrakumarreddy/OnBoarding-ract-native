import React from 'react';
import {Dimensions, StatusBar, Alert} from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';

export default function App() {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Swiper autoplay>
        <Image source={require('./src/images/bg1.jpg')} resizeMode="cover" />
        <Image source={require('./src/images/bg2.jpg')} resizeMode="cover" />
        <Image source={require('./src/images/bg3.jpg')} resizeMode="cover" />
      </Swiper>
      <Content>
        <Header>
          <Title>
            <Text large>Your Music</Text>
          </Title>
          <SubTitle>
            <Text>At your Pace</Text>
          </SubTitle>
        </Header>
      </Content>
      <Buttons>
        <ButtonWrapper bg="orange" onPress={() => Alert.alert('login')}>
          <Text color="#333">Login</Text>
        </ButtonWrapper>
        <ButtonWrapper
          bg="transparent"
          mr={20}
          onPress={() => Alert.alert('Sgn up')}>
          <Text color="#fcfcfc">Sign up</Text>
        </ButtonWrapper>
      </Buttons>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;

const Content = styled.View`
  position: absolute;
  bottom: 150px;
  margin-left: 50px;
`;

const Text = styled.Text`
  color: ${({color}) => color || 'white'};
  ${({large, small}) => {
    switch (true) {
      case large:
        return 'font-size: 30px';

      case small:
        return 'font-size: 24px';

      default:
        return 'font-size: 18px';
    }
  }}
`;

const Header = styled.View`
  margin-bottom: 50px;
`;

const Title = styled.View`
  background-color: violet;
  padding: 20px;
  width: 250px;
  font-family: 'ArialHebrew';
`;

const SubTitle = styled.View`
  background-color: blueviolet;
  padding: 20px;
  width: 170px;
`;

const Buttons = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 80px;
  justify-content: space-between;
  padding: 0 50px;
  width: ${Dimensions.get('window').width}px;
`;

const ButtonWrapper = styled.TouchableOpacity`
  padding: 20px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex: 1;
  border: ${({bg}) => (bg === 'transparent' ? '1px solid #fff' : 'none')};
  background-color: ${({bg}) => bg || '#fff'};
  margin-right: ${({mr}) => (mr ? mr : 20)}px;
`;
