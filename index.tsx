import React, { JSXElementConstructor } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  TextInput,
  ViewStyle,
} from "react-native";

interface SelectListProps {
  /**
   * Fn to set Selected option value which will be stored in your local state
   */
  setSelected: React.Dispatch<React.SetStateAction<undefined>>;

  /**
   * Placeholder text that will be displayed in the select box
   */
  placeholder?: string;

  /**
   * Additional styles for select box
   */
  boxStyles?: ViewStyle;

  /**
   *  	Additional styles for textinput of select box
   */
  inputStyles?: ViewStyle;

  /**
   *  	Additional styles for text of select box
   */
  textStyles?: ViewStyle;

  /**
   *  	Additional styles for dropdown scrollview
   */
  dropdownStyles?: ViewStyle;

  /**
   *  Additional styles for dropdown list item
   */
  dropdownItemStyles?: ViewStyle;

  /**
   * Additional styles for list items text
   */
  dropdownTextStyles?: ViewStyle;

  /**
   * Maximum height of the dropdown wrapper to occupy
   */
  maxHeight?: number;

  /**
   * Data which will be iterated as options of select list
   */
  data: Array<{}>;

  /**
   * Pass any JSX to this prop like Text, Image or Icon to show instead of search icon
   */
  searchicon?: JSX.Element;

  /**
   *  Pass any JSX to this prop like Text, Image or Icon to show instead of chevron icon
   */
  arrowicon?: JSX.Element;

  /**
   * set to false if you dont want to use search functionality
   */
  search?: boolean;

  /**
   * Trigger an action when option is selected
   */
  onSelect?: () => void;
}

const SelectList: React.FC<SelectListProps> = ({
  setSelected,
  placeholder,
  boxStyles,
  inputStyles,
  textStyles,
  dropdownStyles,
  dropdownItemStyles,
  dropdownTextStyles,
  maxHeight,
  data,
  searchicon = false,
  arrowicon = false,
  search = true,
  onSelect = () => {},
}) => {
  const [_firstRender, _setFirstRender] = React.useState<boolean>(true);
  const [dropdown, setDropdown] = React.useState<boolean>(false);
  const [selectedval, setSelectedVal] = React.useState<any>("");
  const [height, setHeight] = React.useState<number>(200);
  const animatedvalue = React.useRef(new Animated.Value(0)).current;
  const [filtereddata, setFilteredData] = React.useState(data);

  const slidedown = () => {
    setDropdown(true);
    Animated.timing(animatedvalue, {
      toValue: height,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const slideup = () => {
    Animated.timing(animatedvalue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => setDropdown(false));
  };

  React.useEffect(() => {
    if (maxHeight) setHeight(maxHeight);
  }, [maxHeight]);

  React.useEffect(() => {
    setFilteredData(data);
  }, [data]);

  React.useEffect(() => {
    if (_firstRender) {
      _setFirstRender(false);
      return;
    }
    onSelect();
  }, [selectedval]);

  return (
    <View>
      {dropdown && search ? (
        <View style={[styles.wrapper, boxStyles]}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {!searchicon ? (
              <Image
                source={require("./assets/images/search.png")}
                resizeMode="contain"
                style={{ width: 20, height: 20, marginRight: 7 }}
              />
            ) : (
              searchicon
            )}

            <TextInput
              placeholder="search"
              onChangeText={(val) => {
                let result = data.filter((item) => {
                  val.toLowerCase();
                  let row = item.value.toLowerCase();
                  return row.search(val.toLowerCase()) > -1;
                });
                setFilteredData(result);
              }}
              style={[{ padding: 0, height: 20, width: "80%" }, inputStyles]}
            />
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.wrapper, boxStyles]}
          onPress={() => {
            if (!dropdown) {
              slidedown();
            } else {
              slideup();
            }
          }}
        >
          <Text style={textStyles}>
            {selectedval == ""
              ? placeholder
                ? placeholder
                : "Select option"
              : selectedval}
          </Text>
          {!arrowicon ? (
            <Image
              source={require("./assets/images/chevron.png")}
              resizeMode="contain"
              style={{ width: 20, height: 20 }}
            />
          ) : (
            arrowicon
          )}
        </TouchableOpacity>
      )}

      {dropdown ? (
        <Animated.View style={{ maxHeight: animatedvalue }}>
          <ScrollView
            style={[styles.dropdown, dropdownStyles]}
            contentContainerStyle={{ paddingVertical: 10 }}
            nestedScrollEnabled={true}
          >
            {filtereddata.length >= 1 ? (
              filtereddata.map((item, index) => {
                let key = item.key ?? item.value ?? item;
                let value = item.value ?? item;
                return (
                  <TouchableOpacity
                    style={[styles.option, dropdownItemStyles]}
                    key={index}
                    onPress={() => {
                      setSelected(key);
                      setSelectedVal(value);
                      slideup();
                      setTimeout(() => setFilteredData(data), 800);
                    }}
                  >
                    <Text style={dropdownTextStyles}>{value}</Text>
                  </TouchableOpacity>
                );
              })
            ) : (
              <TouchableOpacity
                style={[styles.option, dropdownItemStyles]}
                onPress={() => {
                  setSelected("");
                  setSelectedVal("");
                  slideup();
                  setTimeout(() => setFilteredData(data), 800);
                }}
              >
                <Text style={dropdownTextStyles}> No data found</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </Animated.View>
      ) : null}
    </View>
  );
};

export default SelectList;

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    marginTop: 10,
  },
  option: { paddingHorizontal: 20, paddingVertical: 8 },
});
