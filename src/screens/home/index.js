import React, {useState, useEffect} from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
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
  Toast,
} from 'native-base';
import Colors from '../../config/Colors';
import Courier from '../../config/Couriers';
import Axios from 'axios';
import Api from '../../config/Api';

const index = ({navigation, route}) => {
  useEffect(() => {});
  const [NoResi, setNoResi] = useState(null);
  const [Kurir, setKurir] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [Response, setResponse] = useState(null);

  const onKurirChange = value => {
    setKurir(value);
  };
  const sendFetch = async () => {
    await setResponse(null);
    await setisLoading(true);
    await Axios.get(Api.uri, {
      params: {
        awb: NoResi,
        api_key: Api.key,
        courier: Kurir,
      },
    })
      .then(async res => {
        if (res.data.result) {
          setisLoading(false);
          await navigation.navigate('result', {datas: res});
        } else {
          setisLoading(false);
          await Toast.show({
            text: res.data.message,
          });
        }
      })
      .catch(err => {
        setisLoading(false);
        setResponse(err);
      });
  };
  return (
    <Root>
      <Container>
        <Header style={{backgroundColor: Colors.colorBlueNTSC}}>
          <Body style={{alignItems: 'center'}}>
            <Label style={{color: Colors.colorWhiteFlat, fontWeight: 'bold'}}>
              {route.params.screenTitle}
            </Label>
          </Body>
        </Header>
        <Content
          style={{
            backgroundColor: Colors.colorTwinkleBlue,
            flex: 1,
          }}
          contentContainerStyle={{flex: 1, justifyContent: 'center'}}
          padder>
          <StatusBar backgroundColor={Colors.colorBlueNTSC} />

          <View style={styles.mainWrapper}>
            <Text style={styles.TextMain}>Cek Nomor Seri</Text>
            <Text style={styles.TextSec}>
              Masukkan nomor resi anda dan pilih kurir sesuai dengan nomer seri
              anda
            </Text>
          </View>
          <Form style={styles.wrapper}>
            <Item rounded style={styles.input}>
              <Input
                placeholder="No Resi"
                value={NoResi}
                onChangeText={text => setNoResi(text)}
              />
            </Item>
            <Item rounded style={styles.input}>
              <Picker
                mode={'dialog'}
                selectedValue={Kurir}
                onValueChange={onKurirChange.bind(this)}>
                <Picker.Item label="Select courier name" value={null} />
                {Courier.map((item, index) => {
                  return (
                    <Picker.Item
                      label={item.name}
                      value={item.value}
                      key={index}
                    />
                  );
                })}
              </Picker>
            </Item>
            <Button
              full
              success
              disabled={isLoading ? true : false}
              rounded={true}
              style={styles.button}
              onPress={sendFetch.bind(this)}>
              <Text>{isLoading ? 'Loading' : 'Submit'}</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    </Root>
  );
};

export default index;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    margin: 10,
  },
  mainWrapper: {
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    margin: 10,
    backgroundColor: Colors.colorWhiteFlat,
  },
  button: {
    margin: 20,
    marginTop: 50,
  },
  TextSec: {
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 10,
  },
  TextMain: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
