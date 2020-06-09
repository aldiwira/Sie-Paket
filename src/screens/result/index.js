import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {
  Root,
  Container,
  Header,
  Body,
  Title,
  Text,
  Label,
  Content,
  Form,
  Item,
  Input,
  Picker,
  Button,
} from 'native-base';
import Colors from '../../config/Colors';

const index = ({navigatioan, route}) => {
  useEffect(() => {
    console.log(datas);
  }, [datas]);
  const datas = route.params.datas;
  return (
    <Root>
      <Container>
        <Header style={{backgroundColor: Colors.colorBlueNTSC, height: 150}}>
          <Body style={{paddingHorizontal: 10}}>
            <Label style={styles.TextHeaderMain}>
              {route.params.screenTitle}
            </Label>
            <Label style={styles.TextHeader}>{datas.data.waybill}</Label>
            <Label style={styles.TextHeader}>{datas.data.courier}</Label>
          </Body>
        </Header>
        <Content
          style={{
            backgroundColor: Colors.colorTwinkleBlue,
            flex: 1,
          }}
          contentContainerStyle={{flex: 1}}>
          <StatusBar backgroundColor={Colors.colorBlueNTSC} />
          <View style={styles.wrapper}>
            <View style={styles.wrapperOne}>
              <View style={styles.penerimaWrapper}>
                <Text style={styles.textTitle}>Penerima</Text>
                <Text style={styles.textName}>{datas.data.received.name}</Text>
                <Text style={styles.textSub}>{datas.data.received.city}</Text>
              </View>
              <View style={styles.Border} />
              <View style={styles.pengirimWrapper}>
                <Text style={styles.textTitle}>Pengirim</Text>
                <Text style={styles.textName}>{datas.data.shipped.name}</Text>
                <Text style={styles.textSub}>{datas.data.shipped.city}</Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    </Root>
  );
};

export default index;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.colorBlueNTSC,
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  wrapperOne: {
    backgroundColor: Colors.colorWhiteFlat,
    flexDirection: 'row',
    borderRadius: 10,
  },
  penerimaWrapper: {
    flex: 1,
    padding: 20,
  },
  pengirimWrapper: {
    flex: 1,
    padding: 20,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  textName: {
    fontSize: 18,
  },
  textSub: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  TextHeader: {
    color: Colors.colorWhiteFlat,
    fontWeight: 'bold',
    fontSize: 20,
  },
  TextHeaderMain: {
    color: Colors.colorWhiteFlat,
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
  },
  Border: {
    backgroundColor: Colors.colorGrey,
    width: 2,
    marginVertical: 5,
  },
});
