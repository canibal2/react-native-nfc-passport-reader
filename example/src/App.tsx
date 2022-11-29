import * as React from 'react';

import { scanPassport } from '@better-network/react-native-nfc-passport-reader';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default function App() {
  const [_, setResult] = React.useState<any | undefined>();

  const scanDocument = () => {
    scanPassport({
      birthDate: '1993-04-08T00:00:00Z',
      expiryDate: '2024-12-12T00:00:00Z',
      passportNumber: 'BR3484971',
      useNewVerificationMethod: true,
    })
      .then((res) => {
        if (res.error) {
          Alert.alert('NFC failed!', res.error);
          return;
        }
        setResult(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Button onPress={scanDocument} title="Start scanning" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
