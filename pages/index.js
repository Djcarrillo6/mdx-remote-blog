import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'

import Container from '../components/Container'


export default function Index() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.100'
  }
  return (
    <Container>
      <Head>
        <title>Home - DJ Carrillo</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, I'm DJ Carrillo</Heading>
          <Text color={colorSecondary[colorMode]}>This is my technical blog, where I will periodically post technical articles, tutorials, and other general web & mobile application development topics. I am currently in the process of drafting mutliple articles, so please check back soon!!!</Text>
        </Flex>
      </Stack>
    </Container>
  )
}