import React from "react";
import { Box, Button, Image, Text } from "react-native-magnus";
import ThreeDots from "./ThreeDots";
import { Dimensions } from "react-native";
import { stackRoutesNames } from "../routers/stackRoutesNames";

const { width } = Dimensions.get("screen");

const WelcomeTab3 = ({ setTab, tab = 3, navigation }) => (
  <>
    <Box
      justifyContent="center"
      alignItems="center"
      position="relative"
      h={350}
    >
      <Image
        zIndex={1}
        source={require("../resources/enjoy_free.png")}
        h={width * 0.5}
        w={width * 0.5}
      />
      <Image
        position="absolute"
        source={require("../resources/radial_gradient_2.png")}
        h={width * 0.8}
        w={width * 0.8}
      />
    </Box>

    <Text
      my={"xl"}
      fontSize="5xl"
      textAlign="center"
      fontWeight="500"
      color="white"
      fontFamily="Bold"
    >
      ¡Disfruta de tiradas{"\n"}
      gratis!
    </Text>
    <Text
      my={"sm"}
      fontFamily="Medium"
      textAlign="center"
      fontSize={"xl"}
      color="white"
    >
      Tendrás un limite de tiradas gratis{"\n"}
      de forma semanal.
    </Text>

    <Box my={"sm"} />
    <ThreeDots tab={tab} />
    <Box my={"xl"} />
    <Button
      onPress={() => {
        navigation.navigate(stackRoutesNames.LOGIN);
        setTab(1);
      }}
      shadow="xl"
      fontSize={"3xl"}
      shadowColor="primary"
      bg="primary"
      color="#000"
      fontWeight="bold"
      h={63}
      w={"80%"}
      alignSelf="center"
      rounded={35}
    >
      Crear una cuenta
    </Button>
  </>
);

export default WelcomeTab3;
