import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Box, Image, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Text margin="0px 0px 0px 0px" md-position="relative" md-display="block" md-text-align="center">
			rrrrrrrrrrrrrrrrr
		</Text>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="80px 0"
			sm-padding="40px 0"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				Second to none
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
		</Section>
		<Section padding="80px 0 80px 0" lg-padding="60px 0 60px 0" md-padding="40px 0 40px 0" sm-padding="30px 0 30px 0">
			<Box margin="0px 0px 32px 0px" display="flex" flex-direction="column" align-items="flex-start">
				<Text
					font="--headline1"
					color="--dark"
					text-align="center"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					margin="16px 0px 0px 0px"
				>
					Cases
				</Text>
				<Text font="--lead" color="--darkL2" max-width="600px">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<LinkBox
				display="flex"
				margin="0px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-direction="row"
				align-items="flex-start"
				flex-wrap="wrap"
				lg-margin="0px 0px 16px 0px"
			>
				<Box
					width="60%"
					padding="0px 16px 0px 0px"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					margin="0px 0px 0px 0px"
					md-width="100%"
					lg-width="100%"
					lg-padding="0px 0px 0px 0px"
				>
					<Image
						src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80"
						border-radius="24px"
						max-width="100%"
						max-height="456px"
						width="100%"
						object-fit="none"
						lg-max-height="392px"
						sm-max-height="213px"
					/>
				</Box>
				<Box
					width="40%"
					padding="0px 0px 0px 16px"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-width="100%"
					sm-align-items="flex-start"
					sm-flex-direction="column"
					sm-justify-content="flex-start"
					flex-direction="column"
					lg-width="100%"
					lg-flex-direction="row"
					lg-justify-content="space-between"
					lg-padding="16px 12px 16px 12px"
				>
					<Text margin="0px 0px 16px 0px" font="--lead" color="--darkL2" opacity="0.5">
						2021
					</Text>
					<Box padding="0px 50px 0px 0px" lg-width="70%" sm-width="100%" lg-padding="0px 0px 0px 0px">
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
							Finance Dashboard
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						</Text>
					</Box>
				</Box>
			</LinkBox>
			<LinkBox
				display="flex"
				margin="0px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-direction="row"
				align-items="flex-start"
				flex-wrap="wrap"
				lg-margin="0px 0px 16px 0px"
			>
				<Box
					width="60%"
					padding="0px 16px 0px 0px"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					margin="0px 0px 0px 0px"
					md-width="100%"
					lg-width="100%"
					lg-padding="0px 0px 0px 0px"
				>
					<Image
						src="https://images.unsplash.com/photo-1623500006871-81fd925ddac3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
						border-radius="24px"
						max-width="100%"
						max-height="456px"
						width="100%"
						object-fit="none"
						lg-max-height="392px"
						sm-max-height="213px"
					/>
				</Box>
				<Box
					width="40%"
					padding="0px 0px 0px 16px"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-width="100%"
					sm-align-items="flex-start"
					sm-flex-direction="column"
					sm-justify-content="flex-start"
					flex-direction="column"
					lg-width="100%"
					lg-flex-direction="row"
					lg-justify-content="space-between"
					lg-padding="16px 12px 16px 12px"
				>
					<Text margin="0px 0px 16px 0px" font="--lead" color="--darkL2" opacity="0.5">
						2021
					</Text>
					<Box padding="0px 50px 0px 0px" lg-width="70%" lg-padding="0px 0px 0px 0px" sm-width="100%">
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
							Logotype
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						</Text>
					</Box>
				</Box>
			</LinkBox>
			<LinkBox
				display="flex"
				margin="0px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-direction="row"
				align-items="flex-start"
				flex-wrap="wrap"
				lg-margin="0px 0px 16px 0px"
			>
				<Box
					width="60%"
					padding="0px 16px 0px 0px"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					margin="0px 0px 0px 0px"
					md-width="100%"
					lg-width="100%"
					lg-padding="0px 0px 0px 0px"
				>
					<Image
						src="https://images.unsplash.com/photo-1491951931722-5a446214b4e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=806&q=80"
						border-radius="24px"
						max-width="100%"
						max-height="456px"
						width="100%"
						object-fit="none"
						lg-max-height="392px"
						sm-max-height="213px"
					/>
				</Box>
				<Box
					width="40%"
					padding="0px 0px 0px 16px"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-width="100%"
					sm-align-items="flex-start"
					sm-flex-direction="column"
					sm-justify-content="flex-start"
					flex-direction="column"
					lg-width="100%"
					lg-flex-direction="row"
					lg-justify-content="space-between"
					lg-padding="16px 12px 16px 12px"
				>
					<Text margin="0px 0px 16px 0px" font="--lead" color="--darkL2" opacity="0.5">
						2021
					</Text>
					<Box padding="0px 50px 0px 0px" lg-width="70%" lg-padding="0px 0px 0px 0px" sm-width="100%">
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
							SMM
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						</Text>
					</Box>
				</Box>
			</LinkBox>
			<Text
				margin="0px 0px 0px 0px"
				md-position="relative"
				md-bottom="11.0938px"
				md-height="60.656225976562496px"
				md-top="3140.2333740234376px"
				md-left="0px"
				md-right="593.969px"
				md-width="174.0312px"
				lg-display="flex"
			>
				Some text
			</Text>
		</Section>
		<Components.QuarklycommunityKitGallery galleryItemNumbProp="4" columnsCountProp="2" autoFillInProp />
		<Components.QuarklycommunityKitMarquee height="30px">
			<Text margin="0px 0px 0px 0px">
				Some text
			</Text>
		</Components.QuarklycommunityKitMarquee>
		<Components.QuarklycommunityKitGallery />
		<Components.QuarklycommunityKitMarquee />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6409f728b4ef240020708bcd"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});