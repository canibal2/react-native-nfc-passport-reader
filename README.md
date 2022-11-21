# @better-network/react-native-nfc-passport-reader

This package is a React native wrapper which handles reading an NFC Enabled passport using iOS 13 CoreNFC APIS

## Installation

```sh
npm install @better-network/react-native-nfc-passport-reader
```

## Usage

```js
import { scanPassport } from '@better-network/react-native-nfc-passport-reader';

// ...
 scanPassport({ birthDate: "", passportNumber: "", expiryDate: "", useNewVerificationMethod: true})
 .then((result) => {
      if (result.error) {
        // Errors during card scanning
      }
      // Here you can access the result
    }).catch(err => {
      console.log(err)
    })
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
