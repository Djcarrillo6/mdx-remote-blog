import React, { useState } from 'react';
import Head from 'next/head';
import {
	Heading,
	Flex,
	Stack,
	Input,
	InputGroup,
	InputRightElement,
} from '@chakra-ui/react';

import Container from '../components/Container';
import { getAllFilesFrontMatter } from '../lib/mdx';
import AlgoPost from '../components/AlgoPost';

import { SearchIcon } from '@chakra-ui/icons';

export default function Algorithm({ posts }) {
	const [searchValue, setSearchValue] = useState('');

	const filteredAlgoPosts = posts
		.sort(
			(a, b) =>
				Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
		)
		.filter((frontMatter) =>
			frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()),
		);

	return (
		<>
			<Head>
				<title>DJWEBDEV - Algorithm Solutions</title>
			</Head>
			<Container>
				<Stack
					as='main'
					spacing={8}
					justifyContent='center'
					alignItems='flex-start'
					m='0 auto 4rem auto'
					maxWidth='700px'>
					<Flex
						flexDirection='column'
						justifyContent='flex-start'
						alignItems='flex-start'
						maxWidth='700px'
						px={4}>
						<Heading letterSpacing='tight' mb={4} as='h1' size='2xl'>
							Algorithm Solutions ({posts.length})
						</Heading>
						<InputGroup mb={4} mr={4} w='100%'>
							<Input
								aria-label='Search by title'
								placeholder='Search by title'
								onChange={(e) => setSearchValue(e.target.value)}
							/>
							<InputRightElement>
								<SearchIcon color='gray.300' />
							</InputRightElement>
						</InputGroup>
						{!filteredAlgoPosts.length && 'No posts found :('}
						{filteredAlgoPosts.map((frontMatter) => (
							<AlgoPost key={frontMatter.title} {...frontMatter} />
						))}
					</Flex>
				</Stack>
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const posts = await getAllFilesFrontMatter('algorithms');

	return { props: { posts } };
}
