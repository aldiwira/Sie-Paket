import React, {useEffect, useState} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Root, Content, Text, Container} from 'native-base';
import colors from '../../config/colors';

const index = ({navigation, route}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home');
    }, 1000);
  });
  return (
    <Root>
      <Container style={{backgroundColor: colors.colorBlueNTSC}}>
        <Content contentContainerStyle={{flex: 1}} style={{flex: 1}}>
          <StatusBar backgroundColor={colors.colorBlueNTSC} />
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
    color: colors.colorWhiteFlat,
    fontSize: 50,
    fontWeight: 'bold',
  },
  textSec: {
    color: colors.colorWhiteFlat,
    fontSize: 16,
    fontStyle: 'italic',
  },
});
