import React from "react";
import NavBar from "../NavBar/NavBar";

// export default function Faqs() {
//   return (
//     <>
//       <NavBar />
//       <h1>PREGUNTAS FRECUENTES</h1>
//     </>
//   );
// }

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// Replace test data with your own
// const features = Array.apply(null, Array(8)).map(function (x, i) {
//   return {
//     id: i,
//     title: "Puede ser consumida por una persona con hipertensión arterial.?",
//     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
//   },
//   {
//     id: i,
//     title: "Los niños pueden consumirla?",
//     text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
//   };
// });

export default function Faqs() {
  return (
    <>
      <NavBar />
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>PREGUNTAS FRECUENTES</Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </Stack>
        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>
                  Puede ser consumida por una persona con hipertensión
                  arterial.?
                </Text>
                <Text color={"gray.600"}>
                  Lorem ipsum loremmsfasd fojsadnfojansd fojnasdf
                </Text>
              </VStack>
            </HStack>
            {/* ---------------------------- */}
            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>Los niños pueden consumirla?</Text>
                <Text color={"gray.600"}>
                  Lorem ipsum loremmsfasd fojsadnfojansd fojnasdf
                </Text>
              </VStack>
            </HStack>
            {/* ---------------------------- */}
            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>Como se prepara para nebulizar?</Text>
                <Text color={"gray.600"}>
                  Lorem ipsum loremmsfasd fojsadnfojansd fojnasdf
                </Text>
              </VStack>
            </HStack>
            {/* ---------------------------- */}
            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>Tiene vencimiento?</Text>
                <Text color={"gray.600"}>
                  Lorem ipsum loremmsfasd fojsadnfojansd fojnasdf
                </Text>
              </VStack>
            </HStack>
            {/* ---------------------------- */}
            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>Como se conserva?</Text>
                <Text color={"gray.600"}>
                  Lorem ipsum loremmsfasd fojsadnfojansd fojnasdf
                </Text>
              </VStack>
            </HStack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
