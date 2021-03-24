import { TextStyle, ViewStyle } from "react-native"
import { color } from "./color"
import { spacing } from "./spacing"
import { typography } from "./typography"

/*
* Main Layout
*/
export const FULL: ViewStyle = { flex: 1 }
export const CONTAINER: ViewStyle = {
	backgroundColor: color.transparent,
	paddingHorizontal: spacing[4],
}
export const FOOTER: ViewStyle = { backgroundColor: "#20162D", marginBottom: 64 }
export const FOOTER_CONTENT: ViewStyle = {
	paddingVertical: spacing[4],
	paddingHorizontal: spacing[4],
}

/*
* Base Text Styles
*/
export const BOLD: TextStyle = { fontWeight: "bold" }
export const TEXT: TextStyle = {
	color: color.palette.white,
	fontFamily: typography.primary,
}
export const BLACK_TEXT: TextStyle = {
	...TEXT,
	color: "black"
}

/*
* Main Text Styles
*/
export const HEADER: TextStyle = {
	paddingTop: spacing[3],
	paddingBottom: spacing[5] - 1,
	paddingHorizontal: 0,
}
export const HEADER_TITLE: TextStyle = {
	...BOLD,
	fontSize: 12,
	lineHeight: 15,
	textAlign: "center",
	letterSpacing: 1.5,
}
export const TITLE_WRAPPER: TextStyle = {
	...TEXT,
	textAlign: "center",
}
export const TITLE: TextStyle = {
	...TEXT,
	...BOLD,
	fontSize: 28,
	lineHeight: 38,
	textAlign: "center",
}
export const CONTENT: TextStyle = {
	...TEXT,
	color: "#BAB6C8",
	fontSize: 15,
	lineHeight: 22,
	marginBottom: spacing[5],
}

/*
* Common Component Styles
*/
// Button
export const BUTTON: ViewStyle = {
	paddingVertical: spacing[4],
	paddingHorizontal: spacing[4],
	backgroundColor: "#5D2555",
}
export const BUTTON_TEXT: TextStyle = {
	...TEXT,
	...BOLD,
	fontSize: 13,
	letterSpacing: 2,
}

// Flat List
export const LIST_CONTAINER: ViewStyle = {
	alignItems: "center",
	flexDirection: "row",
	padding: 10,
}
export const FLAT_LIST: ViewStyle = {
	paddingHorizontal: spacing[4]
}
export const LIST_TEXT: TextStyle = {
	marginLeft: 10,
	flexWrap: "wrap",
	flexShrink: 1,
}
