import React from 'react';
import { useColorMode, Button, Flex, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { IconContext } from 'react-icons';

import DarkModeSwitch from '../components/DarkModeSwitch';

const Container = ({ children }) => {
	const { colorMode } = useColorMode();

	const bgColor = {
		light: 'rgb(255, 255, 255)',
		dark: 'rgb(63, 62, 62)',
	};

	const color = {
		light: 'rgb(63, 62, 62)', // set to 'dark' color value
		dark: 'rgb(255, 255, 255)', // set to 'light' color value
	};

	const navHoverBg = {
		light: 'gray.600',
		dark: 'gray.300',
	};

	const StickyNav = styled(Flex)`
		position: sticky;
		z-index: 10;
		top: 0;
		backdrop-filter: saturate(180%) blur(20px);
		transition: height 0.5s, line-height 0.5s;
	`;

	return (
		<>
			<StickyNav
				flexDirection='row'
				justifyContent='space-between'
				alignItems='center'
				maxWidth='800px'
				minWidth='356px'
				width='100%'
				bg={bgColor[colorMode]}
				as='nav'
				px={[2, 6, 6]}
				py={2}
				mt={8}
				mb={[0, 0, 8]}
				mx='auto'>
				<Box>
					<NextLink href='/' passHref>
						<Button
							as='a'
							variant='ghost'
							p={[1, 2, 4]}
							_hover={{ backgroundColor: navHoverBg[colorMode] }}>
							Home
						</Button>
					</NextLink>
					<NextLink href='/blog' passHref>
						<Button
							as='a'
							variant='ghost'
							p={[1, 2, 4]}
							_hover={{ backgroundColor: navHoverBg[colorMode] }}>
							Articles
						</Button>
					</NextLink>
					<NextLink href='/algorithm' passHref>
						<Button
							as='a'
							variant='ghost'
							p={[1, 2, 4]}
							_hover={{ backgroundColor: navHoverBg[colorMode] }}>
							Algorithms
						</Button>
					</NextLink>
					<NextLink href='https://www.djwebdev.io' passHref>
						<Button
							as='a'
							variant='ghost'
							p={[1, 2, 4]}
							_hover={{ backgroundColor: navHoverBg[colorMode] }}>
							Portfolio
						</Button>
					</NextLink>
				</Box>
				<Box>
					<IconContext.Provider value={{ size: '30px', color: 'darkblue' }}>
						<NextLink
							href='https://www.linkedin.com/in/davidcarrillojr/'
							passHref>
							<Button
								as='a'
								p={[1, 2, 4]}
								mr={[5]}
								_hover={{ backgroundColor: navHoverBg[colorMode] }}>
								<FaLinkedin />
							</Button>
						</NextLink>
					</IconContext.Provider>

					<IconContext.Provider
						value={{ color: 'rgb(29 161 242)', size: '30px' }}>
						<NextLink href='https://twitter.com/Djcarrillo6' passHref>
							<Button
								as='a'
								p={[1, 2, 4]}
								mr={[5]}
								_hover={{ backgroundColor: navHoverBg[colorMode] }}>
								<FaTwitter />
							</Button>
						</NextLink>
					</IconContext.Provider>

					<IconContext.Provider value={{ size: '30px', color: 'black' }}>
						<NextLink href='https://github.com/Djcarrillo6' passHref>
							<Button
								as='a'
								p={[1, 2, 4]}
								mr={[5]}
								_hover={{ backgroundColor: navHoverBg[colorMode] }}>
								<VscGithub />
							</Button>
						</NextLink>
					</IconContext.Provider>
				</Box>
				<DarkModeSwitch />
			</StickyNav>
			<Flex
				as='main'
				justifyContent='center'
				flexDirection='column'
				bg={bgColor[colorMode]}
				color={color[colorMode]}
				px={[0, 4, 4]}
				mt={[4, 8, 8]}>
				{children}
			</Flex>
		</>
	);
};

export default Container;
