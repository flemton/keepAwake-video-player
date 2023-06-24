import { TouchableOpacity, Text, StyleSheet } from "react-native";



export default function AppButton({ label, onPress }) {
    return <TouchableOpacity style={styles.button} onPress={() => onPress()}>
        <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
}


const styles = StyleSheet.create({
    button: {
        height: 50,
        justifyContent: "center",
        flexWrap: "wrap",
        alignSelf: "center",
        backgroundColor: "#42A5F5",
        borderRadius: 10,
        padding: 16,
        elevation: 4,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    }
});