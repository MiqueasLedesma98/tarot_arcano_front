import React, { useEffect, useRef } from "react";
import {
  Box,
  Button,
  Icon,
  Image,
  Input,
  Select,
  Text,
} from "react-native-magnus";
import { useDebounce, useFetch, useForm } from "../hooks";
import { Pressable } from "react-native";
import { useFilterStore } from "../stores";

const Filter = () => {
  const { form, setForm } = useForm({
    initialValues: { tags: [], search: "", page: 1 },
  });

  const debounceValue = useDebounce(form.search, 1200);
  const setFilters = useFilterStore((state) => state.setHomeFilter);

  useEffect(() => {
    setFilters(form); // Actualizamos los filtros en zustand
  }, [debounceValue, form.tags]); // Escuchamos los cambios en los filtros

  const selectRef = useRef(null);

  const handleSelect = (selectedItems) => {
    setForm("tags", selectedItems); // Actualizamos el form local
  };

  const { data } = useFetch({
    url: "/tags/list",
    fetch: true,
    withFilters: false,
  });

  return (
    <Box w={"100%"} flexDir="column" alignSelf="center" justifyContent="center">
      <Box
        w={"80%"}
        alignSelf="center"
        flexDir="row"
        justifyContent="center"
        alignItems="center"
      >
        <Input
          onChangeText={(value) => setForm("search", value)}
          w={"100%"}
          h={41}
          p={0}
          fontFamily="Regular"
          placeholder="Buscar especialista..."
        />
        <Pressable
          onPress={() => {
            if (selectRef.current) selectRef.current.open();
          }}
        >
          <Image
            ml={15}
            source={require("../resources/filter_icon.png")}
            w={35}
            h={35}
          />
        </Pressable>
      </Box>

      <Select
        onSelect={handleSelect}
        multiple
        ref={selectRef}
        value={form.tags ?? []}
        data={data}
        renderSubmitButton={() => (
          <Button
            onPress={() => setFilters(form)}
            rounded={0}
            bg="primary"
            fontFamily="Bold"
            color="#000"
            w={"100%"}
          >
            Buscar
          </Button>
        )}
        renderItem={(item) => (
          <Select.Option
            prefix={
              <Icon
                fontSize={22}
                name="dot-single"
                fontFamily="Entypo"
                color="gray"
              />
            }
            value={item._id}
            py="md"
            px="xl"
          >
            <Text>{item.name}</Text>
          </Select.Option>
        )}
      />
    </Box>
  );
};

export default Filter;
