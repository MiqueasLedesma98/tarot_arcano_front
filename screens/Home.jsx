import React from "react";
import { Box, Button, Icon, Image, Skeleton, Text } from "react-native-magnus";
import { InfinityScroll, Filter } from "../components";

const Home = () => {
  return (
    <Box flex={1} w={"90%"} alignSelf="center">
      <Button bg="transparent">
        <Icon
          fontFamily="Ionicons"
          name="notifications"
          fontSize={25}
          color="pink"
        />
      </Button>

      <Filter />

      <Box
        mt={"lg"}
        w={"93%"}
        flexDir="column"
        alignSelf="center"
        justifyContent="center"
      >
        <Text fontSize={"md"} fontFamily="Medium" color="gray">
          Últimas contrataciones
        </Text>

        <Box flexDir="row">
          {Array(4)
            .fill("avatars")
            .map((e, i) => (
              <Image
                rounded={50}
                mr={"lg"}
                my={"lg"}
                key={e + i}
                source={{ uri: "https://picsum.photos/150/150" }}
                w={45}
                h={45}
                loadingIndicatorSource={<Skeleton.Circle h={45} w={45} />}
              />
            ))}
        </Box>
        <Text fontFamily="Bold" mb={15} fontSize={"lg"}>
          ¡Encuentra los mejores tarotistas!
        </Text>
      </Box>

      <InfinityScroll />
    </Box>
  );
};

export default Home;
