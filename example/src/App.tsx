import * as React from 'react';

import { scanPassport } from '@better-network/react-native-nfc-passport-reader';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [_, setResult] = React.useState<any | undefined>();
  const [__, setError] = React.useState<any | undefined>();

  const scanP = () => {
    scanPassport({
      birthDate: "",
      passportNumber: "",
      expiryDate: "",
      useNewVerificationMethod: true
    }).then((res) => {
      if (res.error) {
        setError(res.error)
      }
      setResult(res)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={scanP}><Text>Scan</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white"
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
