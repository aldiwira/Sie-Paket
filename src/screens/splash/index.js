import React, {useEffect, useState} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Root, Content, Text, Container} from 'native-base';
import Colors from '../../config/Colors';

const index = ({navigation, route}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home');
    }, route.params.time);
  });
  return (
    <Root>
      <Container style={{backgroundColor: Colors.colorBlueNTSC}}>
        <Content contentContainerStyle={{flex: 1}} style={{flex: 1}}>
          <StatusBar backgroundColor={Colors.colorBlueNTSC} />
          <View style={styles.wrapper}>
            <Text style={styles.textMain}>Sie Paket</Text>
            <Text style={styles.textSec}>Cek resi berbagai kurir</Text>
          </View>
        </Content>
      </Container>
    </Root>
  );
};

export default index;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMain: {
    color: Colors.colorWhiteFlat,
    fontSize: 50,
    fontWeight: 'bold',
  },
  textSec: {
    color: Colors.colorWhiteFlat,
    fontSize: 16,
    fontStyle: 'italic',
  },
});
