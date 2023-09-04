
import type * as React from "react";
import { ViewStyle, TextStyle } from 'react-native';

export interface SelectListProps  {
    /**
    * Fn to set Selected option value which will be stored in your local state
    */
    setSelected: Function,

    /**
    * Placeholder text that will be displayed in the select box
    */
    placeholder?: string,

    /**
    * Additional styles for select box
    */
    boxStyles?: ViewStyle,

    /**
    *  	Additional styles for text of select box
    */
    inputStyles?: TextStyle,

    /**
    *  	Additional styles for dropdown scrollview
    */
    dropdownStyles?:ViewStyle,

    /**
    *  Additional styles for dropdown list item
    */
    dropdownItemStyles?: ViewStyle,

    /**
    * Additional styles for list items text
    */
    dropdownTextStyles?: TextStyle,

    /**
    * Maximum height of the dropdown wrapper to occupy
    */
    maxHeight?: number,

    /**
    * Data which will be iterated as options of select list
    */
    data: Array<{}>,

    /**
    * The default option of the select list
    */
    defaultOption?: { key: any, value: any },

    /**
    * Pass any JSX to this prop like Text, Image or Icon to show instead of search icon
    */
    searchicon?: JSX.Element,

    /**
    *  Pass any JSX to this prop like Text, Image or Icon to show instead of chevron icon
    */
    arrowicon?: JSX.Element,

    /**
    * set to false if you dont want to use search functionality
    */
    search?: boolean,

    /**
    * set to false if you dont want to use search functionality
    */
    searchPlaceholder?: string,

    /**
    * Trigger an action when option is selected
    */
    onSelect?: () => void,

    /**
    * set fontFamily of whole component Text
    */
    fontFamily?: string,

    /**
    * set this to change the default search failure text
    */
    notFoundText?: string,

    /**
    * Additional styles for disabled list item
    */
    disabledItemStyles?: ViewStyle,

    /**
    * Additional styles for disabled list items text
    */
    disabledTextStyles?: TextStyle,

    /**
    * What to store inside your local state (key or value)
    */
    save?: 'key' | 'value',

    /**
    * Control the dropdown with this prop
    */
    dropdownShown?: boolean,

    /**
    *  Pass any JSX to this prop like Text, Image or Icon to show instead of close icon
    */
    closeicon?: JSX.Element,
}


export interface MultipleSelectListProps  {
    /**
    * Fn to set Selected option value which will be stored in your local state
    */
    setSelected: Function,

    /**
    * Placeholder text that will be displayed in the select box
    */
    placeholder?: string,

    /**
    * Additional styles for select box
    */
    boxStyles?: ViewStyle,

    /**
    *  	Additional styles for text of select box
    */
    inputStyles?: TextStyle,

    /**
    *  	Additional styles for dropdown scrollview
    */
    dropdownStyles?:ViewStyle,

    /**
    *  Additional styles for dropdown list item
    */
    dropdownItemStyles?: ViewStyle,

    /**
    * Additional styles for list items text
    */
    dropdownTextStyles?: TextStyle,

    /**
    * Maximum height of the dropdown wrapper to occupy
    */
    maxHeight?: number,

    /**
    * Data which will be iterated as options of select list
    */
    data: Array<{}>,

    /**
     * The default option of the multi select list
     */
    defaultOptions?: Array<{}>,

    /**
    * Pass any JSX to this prop like Text, Image or Icon to show instead of search icon
    */
    searchicon?: JSX.Element,

    /**
    *  Pass any JSX to this prop like Text, Image or Icon to show instead of chevron icon
    */
    arrowicon?: JSX.Element,

    /**
    * set to false if you dont want to use search functionality
    */
    search?: boolean,

    /**
    * set to false if you dont want to use search functionality
    */
     searchPlaceholder?: string,

    /**
    * Trigger an action when option is selected
    */
    onSelect?: () => void,

    /**
    * set text of label which appears soon after multiple values are selected
    */
    label?: string,

    /**
    * set fontFamily of whole component Text
    */
    fontFamily?: string,

    /**
    * set this to change the default search failure text
    */
    notFoundText?: string,

    /**
    * Additional styles for disabled list item
    */
    disabledItemStyles?: ViewStyle,

    /**
    * Additional styles for disabled list items text
    */
    disabledTextStyles?: TextStyle,


    /**
    * Additional styles for disabled checkbox
    */
    disabledCheckBoxStyles?: ViewStyle,

    /**
    * Additional styles for checkbox
    */
    checkBoxStyles?: ViewStyle,

    /**
    * What to store inside your local state (key or value)
    */
    save?: 'key' | 'value',

    /**
    * Control the dropdown with this prop
    */
    dropdownShown?: boolean,

    /**
    *  Pass any JSX to this prop like Text, Image or Icon to show instead of close icon
    */
    closeicon?: JSX.Element,


    /**
    * Additional styles for multiselect badge
    */
    badgeStyles?: ViewStyle,

    /**
    * Additional styles for multiselect badge text
    */
    badgeTextStyles?: ViewStyle,

    /**
    * Additional styles for label
    */
    labelStyles?: TextStyle,
}

declare class MultipleSelectList extends React.Component<MultipleSelectListProps> {}

declare class SelectList extends React.Component<SelectListProps> {}

export {
    MultipleSelectList,
    SelectList
};