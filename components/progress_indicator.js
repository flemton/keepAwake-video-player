import { ActivityIndicator, StyleSheet } from "react-native";


export default function ProgressIndicator() {
    return <ActivityIndicator color={"blue"} size={"large"} style={styles.indicator}/>;
}

const styles = StyleSheet.create({
    indicator: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center"
    }
});