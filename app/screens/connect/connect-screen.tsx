import React from "react"
import {observer} from "mobx-react-lite"
import {View, ViewStyle, TextStyle} from "react-native"
import {Screen, Wallpaper, Header} from "../../components"
import {useNavigation} from "@react-navigation/native"
import {color, spacing} from "../../theme"

const FULL: ViewStyle = {flex: 1}
const CONTAINER: ViewStyle = {
	backgroundColor: color.transparent,
	paddingHorizontal: spacing[4],
}
const BOLD: TextStyle = {fontWeight: "bold"}
const HEADER: TextStyle = {
	paddingTop: spacing[3],
	paddingBottom: spacing[5] - 1,
	paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
	...BOLD,
	fontSize: 12,
	lineHeight: 15,
	textAlign: "center",
	letterSpacing: 1.5,
}

export const ConnectScreen = observer(function ConnectScreen() {
	const navigation = useNavigation()
	const goBack = () => navigation.goBack()
	return (
		<View testID="ConnectScreen" style={FULL}>
			<Wallpaper/>

			<Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
				<Header
					headerTx="connectScreen.headerText"
					leftIcon="back"
					onLeftPress={goBack}
					style={HEADER}
					titleStyle={HEADER_TITLE}
				/>
			</Screen>
		</View>

	)
})
