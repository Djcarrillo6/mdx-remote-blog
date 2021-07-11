import Head from 'next/head';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/react';
import Container from '../components/Container';

export default function Index() {
	const { colorMode } = useColorMode();
	const colorSecondary = {
		light: 'gray.700',
		dark: 'gray.100',
	};
	return (
		<Container>
			<Head>
				<title>DJWEBDEV - Blog</title>
			</Head>
			<Stack
				as='main'
				spacing={8}
				justifyContent='center'
				alignItems='flex-start'
				m='0 auto 4rem auto'
				maxWidth='700px'
				px={2}>
				<Flex
					flexDirection='column'
					justifyContent='flex-start'
					alignItems='flex-start'
					maxWidth='700px'>
					<Heading mb={10}>
						Hi! I'm DJ Carrillo, a software engineer, a tech-entreprenuer, and a
						former world-class bartender.
					</Heading>
					<Text color={colorSecondary[colorMode]}>
						This is my technical blog, where I will periodically post both
						technical & non-technical blog{' '}
						<a
							href='https://mdx-remote-blog.vercel.app/blog'
							style={{ color: 'brown' }}>
							articles
						</a>{' '}
						about, web development, mobile development, technology development,
						cocktail recipes, soft skills, and much, much more.... I'm a gradute
						of California State University of Long Beach, where I majored in
						economics. After college, I worked in the hospitallity industry for
						over 10 years, until I graduted from one of the four original coding
						bootcamps @ Coding Dojo. My professional portfolio website holds a
						collection of some of my most recent applications that I have been
						developing, and it can be visited by clicking{' '}
						<a href='http://www.djwebdev.io' style={{ color: 'red' }}>
							here
						</a>
						; or on the link above. If you would like to connect with me
						directly, feel free to send me an email{' '}
						<a href='mailto:djcarrillo06@gmail.com' style={{ color: 'blue' }}>
							here
						</a>
						.
					</Text>
				</Flex>
			</Stack>
		</Container>
	);
}
