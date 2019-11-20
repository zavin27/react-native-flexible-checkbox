
# react-native-flexible-checkbox
[![npm](https://img.shields.io/npm/l/react-native-flexbile-checkbox.svg)](https://www.npmjs.com/package/react-native-flexible-checkbox) [![npm](https://img.shields.io/npm/v/react-native-flexbile-checkbox.svg)](https://www.npmjs.com/package/react-native-flexible-checkbox) [![npm](https://img.shields.io/npm/dm/react-native-flexbile-checkbox.svg)](https://www.npmjs.com/package/react-native-flexible-checkbox)

Checkbox component made from Javascipt only, highly customizable for iOS and Android. 
Supports indeterminate values.

---------
## Example

![ios-example](https://media.giphy.com/media/H7Ao2DguwGV2mmBMb1/giphy.gif) ![android-example](https://media.giphy.com/media/f5jXR281dSMReybp4v/giphy.gif)

-------
## installation
```bash 
npm instal --save react-native-flexible-checkbox

// OR

yarn add react-native-flexible-checkbox
```
#### Note

this library requires you to have ```react-native-vector-icons``` installed, steps to install and link it can be found on their github page [here](https://github.com/oblador/react-native-vector-icons)

-----
## Running the example

The application under ```./checkboxExample``` will produce the example above.In order To run it, follow the steps below:

* ```git clone https://github.com/zavin27/react-native-flexible-checkbox.git```
* ```cd react-native-flexible-checkbox && cd checkboxExample```
* ```yarn install```
* ```yarn run ios | yarn run android```

-----
## Usage
Using react hooks
```javascript
import React, {useState} from 'react';

import Checkbox from 'react-native-flexible-checkbox';

const App = () => {
    const [value, setValue] = useState('unchecked');

    return (
        <Checkbox
            checked={value}
            onChange={setValue}
        />
    )
}
```
You can find more examples on how to use it in ```checkboxExample/App.js```

-----
## API

| Prop | Notes | Type | Optional| Values | Default |
|---|---|---|---|---|---|
|```checked```|Determines checkbox state|```string```| ```false``` | ```"checked"```, ```"unchecked"```, if indeterminate prop is true ```"indeterminate"```||
|```onChange```| Function that returns the new value when the checkbox is pressed | ```func```| ```false``` | ```(value: String) =>```||
|```indeterminate```| Allow indeterminate values |```bool```| ```true``` |```true``` / ```false```| ```false```|
|```touchableType```| Determines the touchable component type|```string```|```true``` |```"opacity"```, ```"highlight"```, ```"withoutFeedback"```|```opacity```|
|```touchableProps```| Touchable component Props, depending on the type|```object```|```true``` |[TouchableWithoutFeedback](https://facebook.github.io/react-native/docs/touchablewithoutfeedback), [TouchableHighlight](https://facebook.github.io/react-native/docs/touchablehighlight), [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity)||
|```containerStyles```| Styles applied to the main container (touchable component)|```object```,```array```|```true``` |||
|```iconColor```| Changes icon color | ```string```|```true``` |Any color value (hexadecimals, rgb, text)| ```"white"```|
|```shape```| Determines the predifined shapes | ```string```|```true``` | ```"square"```, ```"circle"```| ```"square"```|
|```size```| Determines the size of thee checkbox | ```number```|```true``` | | ```24```

---
## License
MIT
