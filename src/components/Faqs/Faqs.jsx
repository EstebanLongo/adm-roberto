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

export default function Faqs() {
  return (
    <>
      <NavBar />
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>PREGUNTAS FRECUENTES</Heading>
        </Stack>
        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>
                  ¿Puede ser consumida por una persona con hipertensión
                  arterial.?
                </Text>
                <Text color={"gray.600"} align={"start"}>
                  Si, se puede beber ya que en sus componentes hay sodio y
                  cloro, pero están separados, a diferencia de la sal de mesa,
                  que están unidos. De esta forma están biodisponibles y se
                  absorben por el sistema digestivo. Estos elementos por si
                  solos no producen alteraciones en la presión arterial.
                </Text>
              </VStack>
            </HStack>
            {/* ---------------------------- */}
            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>¿Los niños pueden consumirla?</Text>
                <Text color={"gray.600"} align={"start"}>
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
                <Text fontWeight={600}>
                  ¿Se puede utilizar para nebulización?
                </Text>
                <Text color={"gray.600"} align={"start"}>
                  El agua de mar es un excelente descongestivo. Se puede
                  utilizar para nebulizar tanto en forma hiper como isotónica.
                  Con 10 minutos de nebulización, se apreciarán las mejoras en
                  las vías respiratorias.
                </Text>
              </VStack>
            </HStack>
            {/* ---------------------------- */}
            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>¿Tiene vencimiento?</Text>
                <Text color={"gray.600"} align={"start"}>
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
                <Text fontWeight={600}>¿Como se conserva?</Text>
                <Text color={"gray.600"} align={"start"}>
                  No hay recomendaciones especiales sobre cómo guardarla, sólo
                  protegerla de la luz solar para que no favorezca el
                  crecimiento de algas, lo que tampoco invalidaría su uso.
                </Text>
              </VStack>
            </HStack>
            {/* ---------------------------- */}
            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>
                  Realizo alimentación Keto, con ayuno intermitente. ¿Es útil en
                  estos casos?
                </Text>
                <Text color={"gray.600"} align={"start"}>
                  Está absolutamente indicada en estos casos, ya que al realizar
                  ayuno intermitente, se pierden más liquido y sales por la
                  orina, por lo que es aconsejable incorporar a la dieta, una
                  completa fuente de sales. De esta forma se evitan los síntomas
                  “gripales”, el cansancio y los calambres.
                </Text>
              </VStack>
            </HStack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
