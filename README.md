|                          | |  |   |   |
| --------------------------------------- | -------- | ---------- |---------- |---------- |
| <a href="https://www.npmjs.com/package/react-native-dropdown-select-list">![NPM VERSION](https://img.shields.io/npm/v/react-native-dropdown-select-list?style=for-the-badge)</a> | <a href="https://www.npmjs.com/package/react-native-dropdown-select-list">![NPM WEEKLY DOWNLOADS](https://img.shields.io/npm/dw/react-native-dropdown-select-list?color=%232CA215&label=WEEKLY%20DOWNLOADS&style=for-the-badge)</a> | <a href="https://github.com/danish1658/react-native-dropdown-select-list/stargazers">![GITHUB STAR](https://img.shields.io/github/stars/danish1658/react-native-dropdown-select-list?label=Give%20Us%20A%20Star&style=for-the-badge)</a> | <a href="https://www.youtube.com/channel/UCEbbpzmnbRiNVhJ3ElABbMQ">![YOUTUBE VIEWS](https://img.shields.io/youtube/channel/views/UCEbbpzmnbRiNVhJ3ElABbMQ?label=YOUTUBE%20VIEWS&style=for-the-badge)</a> | <a href="https://www.npmjs.com/package/react-native-dropdown-select-list">![NPM LIFETIME DOWNLOADS](https://img.shields.io/npm/dt/react-native-dropdown-select-list?color=%232CA215&style=for-the-badge)</a>

<br>
<h1 align="center">
  ⭐ React Native Dropdown Select List </h1>

<div align="center">

React Native Select List Equivalent to Html's Select "

</div>

<p align="center" >
  <div style="display:flex;justify-content:space-evenly;align-items:center">
    
Multiple Select List            |  Select List
:-------------------------:|:-------------------------:
![](https://i.imgur.com/EAT81Nz.gif)  |  ![](https://i.imgur.com/qmHreFH.gif)
    
  </div>
  <br>
  
</p>
<br>

<h4>Light weight and <b>Easy</b> to use dropdown select list.</h4>

-   Style it your way with style props of every view.
-   Smooth performance on all platforms IOS, Android and Web.
-   Change Font Family Easily which community picker lacks.
-   <b>Zero</b> dependencies

<br>

# Compatibility

<br>

|  iOS  | Android | Web | Expo |
--------|---------|-----|------|
|  ✅  |    ✅    | ✅ |  ✅  |


<br>

# 🔌 Installation

```sh
$ npm install react-native-dropdown-select-list

```

OR

```sh
$ yarn add react-native-dropdown-select-list
```

<br>

# 😎 Basic Usage for SelectList
```jsx
import { SelectList } from 'react-native-dropdown-select-list'

const App = () => {

  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  return(
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />
  )

};
```
<br>

# 😎 Basic Usage for MultipleSelectList
```jsx
import { MultipleSelectList } from 'react-native-dropdown-select-list'

const App = () => {

  const [selected, setSelected] = React.useState([]);
  
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  return(
    <MultipleSelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        onSelect={() => alert(selected)} 
        label="Categories"
    />
  )

};
```

<br>


For Live `Demo` [(Expo Snack)](https://snack.expo.dev/@danish1658/react-native-dropdown-select-list)

<br>

# 🔧 General Props
<i>Applicable on both <b>SelectList</b> & <b>MultipleSelectList</b> Components</i>

| Name | Type | Description |
| ---- | ---- | ----------- |
| save| string | Pass ('key' or 'value') to save data of your choice in your local state variable
| onSelect| Function | Pass any function that you want to trigger immediately after a value is selected
| placeholder | String | Placeholder text that will be displayed in the select box
| search | boolean | set to false if you dont want to use search functionality
| maxHeight| Number | Maximum height of the dropdown wrapper to occupy
| data| array or array[object]| Data which will be iterated as options of select list
| setSelected| Function | For Setting the option value which will be stored in your local state
| value | any (or any[]) | For changing the value of select list from outside
| searchicon| JSX Element | Pass any JSX to this prop like Text, Image or Icon to show instead of search icon
| arrowicon| JSX Element | Pass any JSX to this prop like Text, Image or Icon to show instead of chevron icon
| closeicon| JSX Element | Pass any JSX to this prop like Text, Image or Icon to show instead of close icon
| searchPlaceholder| String | Custom placeholder text for search TextInput
| defaultOption| Object | Pass default selected option in key value pair
| fontFamily| string | Pass font name to apply globally on each text field of component
| notFoundText| string | Pass your custom message if any search result returns empty
| dropdownShown| boolean | Control your dropdown ( on & off ) state by changing its value to true or false

<br>

# 🔧 General Style Props
<i>Applicable on both <b>SelectList</b> & <b>MultipleSelectList</b> Components</i>

| Name | Type | Description |
| ---- | ---- | ----------- |
| boxStyles| Object| Additional styles for select box parent wrapper
| inputStyles| Object| Additional styles for text of selection box
| dropdownStyles| Object| Additional styles for dropdown scrollview
| dropdownItemStyles| Object| Additional styles for dropdown single list item
| dropdownTextStyles| Object| Additional styles for dropdown list items text
| disabledItemStyles| Object| Additional styles for disabled dropdown list item
| disabledTextStyles| Object| Additional styles for disabled dropdown list items text

<br>

# 😎 Advanced Usage
```jsx
import { SelectList } from 'react-native-dropdown-select-list'

const App = () => {

  const [selected, setSelected] = React.useState("");
  
  const data = [
    {key:'1',value:'Jammu & Kashmir'},
    {key:'2',value:'Gujrat'},
    {key:'3',value:'Maharashtra'},
    {key:'4',value:'Goa'},
  ];

  return(
    <SelectList 
      onSelect={() => alert(selected)}
      setSelected={setSelected} 
      fontFamily='lato'
      data={data}  
      arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />} 
      searchicon={<FontAwesome name="search" size={12} color={'black'} />} 
      search={false} 
      boxStyles={{borderRadius:0}} //override default styles
      defaultOption={{ key:'1', value:'Jammu & Kashmir' }}   //default selected option
    />
  )

};
```

<br>

# 😎 Getting Options From Database
```jsx
import { SelectList } from 'react-native-dropdown-select-list'

const App = () => {

  const [selected, setSelected] = React.useState("");
  const [data,setData] = React.useState([]);
  
  React.useEffect(() => 
    //Get Values from database
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // Store Values in Temporary Array
        let newArray = response.data.map((item) => {
          return {key: item.id, value: item.name}
        })
        //Set Data Variable
        setData(newArray)
      })
      .catch((e) => {
        console.log(e)
      })
  ,[])

  return(
    <SelectList setSelected={setSelected} data={data} onSelect={() => alert(selected)} />
  )

};
```

<br>

# 🔧 Additional Props
<i>Applicable on <b>MultipleSelectList</b> Only</i>

| Name | Type | Description |
| ---- | ---- | ----------- |
| label| string| Pass any string to be placed instead of default label


<br>

# 🔧 Additional Style Props
<i>Applicable on <b>MultipleSelectList</b> Only</i>

| Name | Type | Description |
| ---- | ---- | ----------- |
| disabledCheckBoxStyles| Object| Additional styles disabled checkbox inside dropdown
| checkBoxStyles| Object| Additional styles for active checkbox
| badgeStyles| Object| Additional styles for badges of selected values
| badgeTextStyles| Object| Additional styles for Text of badges of selected values
| labelStyles| Object| Additional styles for label of multiple select list

<br>


# ▶️ Watch Video

[![Watch the video](https://i.imgur.com/K8Lt2h4.png)](https://www.youtube.com/watch?v=J9raEY-1KPQ&t=499s)

<br>

# 💲 Would you like to support me?

If you would like me come up with similar packages, buy me a cup of coffee to boost my energy.
<br><br>
[![Paypal](https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png)](https://paypal.me/danishamindar)
<br><br>
For Live `Demo` [(Expo Snack)](https://snack.expo.dev/@danish1658/react-native-dropdown-select-list)

<br>
