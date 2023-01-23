import React from "react";
import NavBar from "../NavBar/NavBar";
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
import "./faqs.css";

export default function Faqs() {
  return (
    <div className="divcontainerfaqs">
      <NavBar />
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            fontSize={"3xl"}
            color={"whitesmoke"}
            fontFamily={"Quicksand"}
          >
            PREGUNTAS FRECUENTES
          </Heading>
        </Stack>
        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <HStack align={"top"} backgroundColor={"#16337e75"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600} align={"start"}>
                  ¿Puede ser consumida por una persona con hipertensión
                  arterial.?
                </Text>
                <Text align={"start"} color={"whitesmoke"}>
                  Si, se puede beber ya que en sus componentes hay sodio y
                  cloro, pero están separados, a diferencia de la sal de mesa,
                  que están unidos. De esta forma están biodisponibles y se
                  absorben por el sistema digestivo. Estos elementos por si
                  solos no producen alteraciones en la presión arterial.
                </Text>
              </VStack>
            </HStack>
            {/* ---------------------------- */}
            <HStack align={"top"} backgroundColor={"#16337e75"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600} align={"start"}>
                  ¿Se puede utilizar para nebulización?
                </Text>
                <Text color={"whitesmoke"} align={"start"}>
                  El agua de mar es un excelente descongestivo. Se puede
                  utilizar para nebulizar tanto en forma hiper como isotónica.
                  Con 10 minutos de nebulización, se apreciarán las mejoras en
                  las vías respiratorias.
                </Text>
              </VStack>
            </HStack>
            {/* ---------------------------- */}
            <HStack align={"top"} backgroundColor={"#16337e75"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600} align={"start"}>
                  ¿Tiene vencimiento?
                </Text>
                <Text color={"whitesmoke"} align={"start"}>
                  El agua de mar no tiene vencimiento. Se aconseja si se va a
                  conservar durante un largo periodo, que sea en un envase de
                  vidrio
                </Text>
              </VStack>
            </HStack>
            {/* ---------------------------- */}
            <HStack align={"top"} backgroundColor={"#16337e75"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600} align={"start"}>
                  ¿Como se conserva?
                </Text>
                <Text color={"whitesmoke"} align={"start"}>
                  No hay recomendaciones especiales sobre cómo guardarla, sólo
                  protegerla de la luz solar para que no favorezca el
                  crecimiento de algas, lo que tampoco invalidaría su uso.
                </Text>
              </VStack>
            </HStack>
            {/* ---------------------------- */}
            <HStack align={"top"} backgroundColor={"#16337e75"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600} align={"start"}>
                  Realizo alimentación Keto, con ayuno intermitente. ¿Es útil en
                  estos casos?
                </Text>
                <Text color={"whitesmoke"} align={"start"}>
                  Está absolutamente indicada en estos casos, ya que al realizar
                  ayuno intermitente, se pierden más liquidos y sales por la
                  orina, por lo que es aconsejable incorporar a la dieta, una
                  completa fuente de sales. De esta forma se evitan los síntomas
                  “gripales”, el cansancio y los calambres.
                </Text>
              </VStack>
            </HStack>
            {/* ---------------------------- */}
            <HStack align={"top"} backgroundColor={"#16337e75"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600} align={"start"}>
                  ¿Hay alguna contra indicación?
                </Text>
                <Text color={"whitesmoke"} align={"start"}>
                  El agua de mar no tiene ninguna contraindicación. Es
                  perfectamente asimilada por nuestro organismo. De todas
                  formas, se recomienda no consumir más de medio litro al día.
                </Text>
              </VStack>
            </HStack>
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
}
