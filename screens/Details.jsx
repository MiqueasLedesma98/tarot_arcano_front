import React from "react";
import { HeaderDetails, Review } from "../components";
import { Box, Button, Image, ScrollDiv, Tag, Text } from "react-native-magnus";
import { useRoute } from "@react-navigation/native";
import { useFetch } from "../hooks";

const tags = ["Vidente", "Amor", "Luna llena"];

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const Details = ({}) => {
  const route = useRoute();

  const { data = {} } = route.params;

  const { data: reviews } = useFetch({
    fetch: true,
    url: `/reviews/${data._id}`,
  });

  return (
    <>
      <HeaderDetails />
      <ScrollDiv showsVerticalScrollIndicator={false} h={"100%"} w={"100%"}>
        <Image
          rounded={25}
          source={{ uri: apiUrl + `/uploads/service/${data._id}` }}
          w={"95%"}
          alignSelf="center"
          h={300}
        />
        <Box
          my={"lg"}
          alignItems="center"
          flexDir="row"
          flexWrap="wrap"
          w={"95%"}
          alignSelf="center"
        >
          {data?.tags?.map((t, key) => (
            <Tag
              m={"sm"}
              key={key}
              bg="yellow400"
              color="gray-dark"
              fontFamily="Medium"
            >
              {t.name}
            </Tag>
          ))}
        </Box>
        <Box flexDir="row" w={"95%"} alignSelf="center">
          <Image
            source={require("../resources/house_icon.png")}
            w={22}
            h={22}
            mx={"lg"}
          />
          <Text fontSize={"xl"} fontFamily="Regular" color="gray">
            Lives in{" "}
            <Text fontSize={"xl"} fontFamily="Medium" color="gray-dark">
              Caracas, Venezuela
            </Text>
          </Text>
        </Box>

        <Box w={"90%"} h={1} bg="primary" my={"xl"} alignSelf="center" />

        <Box w={"90%"} alignSelf="center">
          <Text fontFamily="Heavy" fontSize={"xl"} color="gray-dark">
            Sobre mi
          </Text>
          <Text fontFamily="Regular" fontSize={"xl"} color="gray">
            {data?.description}
          </Text>
        </Box>

        <Box w={"90%"} h={1} bg="primary" my={"xl"} alignSelf="center" />

        <Box w={"90%"} alignSelf="center">
          <Text fontFamily="Heavy" fontSize={"xl"} color="gray-dark">
            Comentarios
          </Text>

          <Box mt={"xl"}>
            {reviews?.map((review) => (
              <Review key={review._id} data={review} />
            ))}
          </Box>
        </Box>
      </ScrollDiv>
      <Button
        rounded={10}
        bg="primary"
        color="#000"
        fontFamily="Bold"
        px={"2xl"}
        alignSelf="center"
        my={"lg"}
      >
        ¡Contratar!
      </Button>
    </>
  );
};

export default Details;
