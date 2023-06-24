import AppButton from "../components/app_button";
import { View, StyleSheet } from "react-native";


export default function HomeScreen({ navigation }) {
    return <View style={styles.container}>
        <AppButton label={'Video Screen'} onPress={() => navigation.navigate("Video-Screen")}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    }
})