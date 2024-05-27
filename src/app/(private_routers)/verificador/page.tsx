import { Box, Button, Center, Heading, Text, VStack, Input, Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons'

function VerificadorPage() {
  return (
    <Center minH="100vh" bg="#f7f7f7">
      <VStack spacing={8} w="100%">
        <Heading as="h1" size="xl" color="#00713D">
          Verificador de Documentos
        </Heading>
        <Box p={8} borderWidth="2px" borderRadius="lg" boxShadow="lg" bg="white" w="100%" maxW="600px">
          <Text mb={4} color="gray.700" fontWeight="bold">
            Envio de documentos
          </Text>
          <Text mb={4} color="gray.700">
            Selecione o arquivo em seu computador ou arraste-o para o campo abaixo. Se desejar ter o relatório completo da validação, insira também a identificação da assinatura. Caso não queira enviar o documento, insira apenas o código da identificação no tópico abaixo.
          </Text>
          <Text mb={4} color="gray.700">
            Dica: o documento assinado tem a palavra "signed" no final de seu nome.
          </Text>
          <Text mb={4} color="gray.700">
            Ex: documento_signed.pdf
          </Text>
          <Box
            mb={4}
            p={4}
            borderWidth="1px"  
            borderRadius="md"
            borderStyle="dashed"
            w="100%"
            textAlign="center"
            position="relative"
            cursor="pointer"
            _hover={{ bg: "gray.100" }}
          >
            <Input
              type="file"
              opacity="0"
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              cursor="pointer"
           
            />
            <Text mt={2} color="gray.500">
              Arraste e solte o arquivo aqui, ou clique para selecionar
            </Text>
          </Box>
          <Input placeholder="Identificação da Assinatura" size="lg" mb={4} />
          <Button colorScheme="teal" w="100%" size="lg">
            Verificar
          </Button>
        </Box>
        <Box p={8} borderWidth="2px" borderRadius="lg" boxShadow="lg" bg="white" w="100%" maxW="600px">
          <Text mb={4} color="gray.700" fontWeight="bold">
            Identificação da assinatura
          </Text>
          <Text mb={4} color="gray.700">
            Para verificar a integridade da assinatura, abra o seu arquivo e insira nos campos abaixo a identificação da assinatura desejada.
          </Text>
          <Text mb={4} color="gray.700">
            Dica: A identificação se encontra logo abaixo de sua rubrica e é composta por letras e números divididos em três campos.
          </Text>
          <Text mb={4} color="gray.700">
            Ex: 5ABCG8-94ILDK52-5BER56
          </Text>
        </Box>
      </VStack>
    </Center>
  );
}

export default VerificadorPage;
