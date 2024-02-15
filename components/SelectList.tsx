// SelectList.tsx

import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import Icon, { Icons } from "./Icons";

interface Option {
  key?: string | number;
  value: string;
  disabled?: boolean;
}

interface SelectListProps {
  setSelected: (value: string | number) => void;
  setTyped: (value: string) => void;
  placeholder?: string;
  boxStyles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<TextStyle>;
  dropdownStyles?: StyleProp<ViewStyle>;
  dropdownItemStyles?: StyleProp<ViewStyle>;
  dropdownTextStyles?: StyleProp<TextStyle>;
  maxHeight?: number;
  data: Option[];
  defaultOption?: Option;
  searchIcon?: boolean;
  arrowIcon?: boolean;
  closeIcon?: boolean;
  search?: boolean;
  searchPlaceholder?: string;
  notFoundText?: string;
  disabledItemStyles?: StyleProp<ViewStyle>;
  disabledTextStyles?: StyleProp<TextStyle>;
  onSelect?: (value: string) => void;
  save?: "key" | "value";
  dropdownShown?: boolean;
  fontFamily?: string;
}

const SelectList: React.FC<SelectListProps> = ({
  setSelected,
  setTyped,
  placeholder,
  boxStyles,
  inputStyles,
  dropdownStyles,
  dropdownItemStyles,
  dropdownTextStyles,
  maxHeight,
  data,
  defaultOption,
  searchIcon = true,
  arrowIcon = true,
  closeIcon = true,
  search = true,
  searchPlaceholder = "Select from the list or input manually.",
  notFoundText = "No data found",
  disabledItemStyles,
  disabledTextStyles,
  onSelect = () => {},
  save = "key",
  dropdownShown = false,
  fontFamily,
}) => {
  const oldOption = useRef<Option | null>(null);
  const [dropdown, setDropdown] = useState<boolean>(dropdownShown);
  const [selectedVal, setSelectedVal] = useState<string>("");
  const [height, setHeight] = useState<number>(200);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [filteredData, setFilteredData] = useState<Option[]>(data);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (maxHeight) setHeight(maxHeight);
  }, [maxHeight]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    onSelect(selectedVal);
    setTyped(selectedVal);
  }, [selectedVal]);

  useEffect(() => {
    if (defaultOption && oldOption.current !== defaultOption) {
      oldOption.current = defaultOption;
      setSelected(defaultOption.key ?? "");
      setSelectedVal(defaultOption.value);
    }
  }, [defaultOption]);

  useEffect(() => {
    if (dropdownShown) slideDown();
    else slideUp();
  }, [dropdownShown]);

  const slideDown = () => {
    setDropdown(true);
    Animated.timing(animatedValue, {
      toValue: height,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const slideUp = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => setDropdown(false));
  };

  const handleInputValueChange = (val: string) => {
    setInputValue(val);
    const result = data.filter((item) => {
      const row = item.value.toLowerCase();
      return row.includes(val.toLowerCase());
    });
    setFilteredData(result);
    if (!dropdown && val.trim() !== "") slideDown();
  };

  const handleClearInput = () => {
    setInputValue("");
    setSelectedVal(defaultOption?.value || "");
    setFilteredData(data);
    slideUp();
  };

  return (
    <View>
      {dropdown && search ? (
        <View style={[styles.wrapper, boxStyles]}>
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            {searchIcon && (
              <Icon
                type={Icons.MaterialIcons}
                name="search"
                color="#000"
                size={20}
                style={{ marginRight: 7 }}
              />
            )}
            <TextInput
              placeholder={searchPlaceholder}
              onChangeText={handleInputValueChange}
              value={inputValue}
              style={[
                { padding: 0, height: 20, flex: 1, fontFamily },
                inputStyles,
              ]}
            />
            {closeIcon && (
              <TouchableOpacity onPress={handleClearInput}>
                <Icon
                  type={Icons.MaterialIcons}
                  name="close"
                  color="#000"
                  size={17}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.wrapper, boxStyles]}
          onPress={() => setDropdown(!dropdown)}
        >
          <Text
            style={[
              { fontFamily },
              inputStyles,
              dropdownTextStyles,
              { flex: 1 },
            ]}
          >
            {selectedVal || placeholder || "Select option"}
          </Text>
          {arrowIcon && (
            <Icon
              type={Icons.MaterialIcons}
              name={dropdown ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              color="#000"
              size={20}
            />
          )}
        </TouchableOpacity>
      )}
      {dropdown && (
        <Animated.View
          style={[
            { maxHeight: animatedValue },
            styles.dropdown,
            dropdownStyles,
          ]}
        >
          <ScrollView
            contentContainerStyle={{ paddingVertical: 10 }}
            nestedScrollEnabled={true}
          >
            {filteredData.length >= 1 ? (
              filteredData.map((item, index) => {
                const key = item.key || item.value || index;
                const value = item.value || item;
                const disabled = item.disabled || false;
                return (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.option,
                      disabled ? styles.disabledOption : null,
                      dropdownItemStyles,
                      disabled ? disabledItemStyles : null,
                    ]}
                    onPress={() => {
                      setSelected(save === "value" ? value : key);
                      setSelectedVal(value);
                      slideUp();
                    }}
                  >
                    <Text style={[{ fontFamily }, dropdownTextStyles]}>
                      {value}
                    </Text>
                  </TouchableOpacity>
                );
              })
            ) : (
              <Text style={[{ fontFamily }, dropdownTextStyles]}>
                {notFoundText}
              </Text>
            )}
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    marginTop: 10,
    overflow: "hidden",
  },
  option: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  disabledOption: {
    backgroundColor: "whitesmoke",
    opacity: 0.9,
  },
});

export default SelectList;
