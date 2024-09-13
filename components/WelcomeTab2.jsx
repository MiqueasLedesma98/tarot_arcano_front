import React from "react";
import { Box, Button, Image, Text } from "react-native-magnus";
import ThreeDots from "./ThreeDots";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const WelcomeTab2 = ({ setTab, tab = 2 }) => (
  <>
    <Box
      justifyContent="center"
      alignItems="center"
      position="relative"
      h={350}
    >
      <Image
        zIndex={1}
        source={require("../resources/start_publish.png")}
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
      ¡Empieza a publicar{"\n"}
      tus servicios!
    </Text>
    <Text
      fontFamily="Medium"
      my={"sm"}
      textAlign="center"
      fontSize={"xl"}
      color="white"
    >
      Pública tus servicios dentro de la misma{"\n"}
      plataforma con las comisiones mas bajas.
    </Text>

    <Box my={"sm"} />
    <ThreeDots tab={tab} />
    <Box my={"xl"} />
    <Button
      onPress={() => setTab((prev) => prev + 1)}
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
      Siguiente
    </Button>
  </>
);

export default WelcomeTab2;
