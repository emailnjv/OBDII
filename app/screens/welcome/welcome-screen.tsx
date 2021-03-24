import React from "react"
import { View, Image, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, FULL, CONTAINER, HEADER, HEADER_TITLE, BUTTON, BUTTON_TEXT, TEXT, BOLD, FOOTER, FOOTER_CONTENT, spacing, CONTENT, TITLE_WRAPPER, TITLE } from "../../theme"
const bowserLogo = require("./bowser.png")

const ALMOST: TextStyle = {
	...TEXT,
	...BOLD,
	fontSize: 26,
	fontStyle: "italic",
}
const BOWSER: ImageStyle = {
	alignSelf: "center",
	marginVertical: spacing[5],
	maxWidth: "100%",
}
const BUTTON_WRAPPER: ImageStyle = {
	paddingVertical: spacing[4],
}

export const WelcomeScreen = observer(function WelcomeScreen() {
	const navigation = useNavigation()
	const demoScreen = () => navigation.navigate("demo")
	const connectScreen = () => navigation.navigate("connect")

	return (
		<View testID="WelcomeScreen" style={FULL}>
			<Wallpaper />
			<Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
				<Header headerTx="welcomeScreen.poweredBy" style={HEADER} titleStyle={HEADER_TITLE} />
				<Text style={TITLE_WRAPPER}>
					<Text style={TITLE} text="Your new app, " />
					<Text style={ALMOST} text="almost" />
					<Text style={TITLE} text="!" />
				</Text>
				<Text style={TITLE} preset="header" tx="welcomeScreen.readyForLaunch" />
				<Image source={bowserLogo} style={BOWSER} />
				<Text style={CONTENT}>
          This probably isn't what your app is going to look like. Unless your designer handed you
          this screen and, in that case, congrats! You're ready to ship.
				</Text>
				<Text style={CONTENT}>
          For everyone else, this is where you'll see a live preview of your fully functioning app
          using Ignite.
				</Text>
			</Screen>
			<SafeAreaView style={FOOTER}>
				<View style={FOOTER_CONTENT}>
					<View style={BUTTON_WRAPPER}>
						<Button
							testID="next-screen-button"
							style={BUTTON}
							textStyle={BUTTON_TEXT}
							tx="welcomeScreen.continue"
							onPress={demoScreen}
						/>
					</View>
					<View style={BUTTON_WRAPPER}>
						<Button
							testID="connect-screen-button"
							style={BUTTON}
							textStyle={BUTTON_TEXT}
							tx="welcomeScreen.connect"
							onPress={connectScreen}
						/>
					</View>
				</View>
			</SafeAreaView>
		</View>
	)
})
