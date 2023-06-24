import { View, StyleSheet } from "react-native";
import React, { useState} from "react";
import ProgressIndicator from "../components/progress_indicator"
import { Video } from "expo-av";

const videoSource = "https://player.vimeo.com/external/387242416.hd.mp4?s=b21342e26b86ebb098e8c7a3ea29bd09a6831141&profile_id=174&oauth2_token_id=57447761"

export default function VideoPlayerScreen() {
  const [isBuffering, setBuffering] = useState(true);
    return <View style={styles.container}>
        {
            isBuffering && <ProgressIndicator />
        }
        <Video style={styles.video}
            source={{ uri: videoSource }}
            isLooping
            shouldPlay
            resizeMode="cover"
            useNativeControls
            onLoadStart={() => setBuffering(true)}
            onReadyForDisplay={() => setBuffering(false)} 
            />
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
    },
    video: {
        height: 400
    }
})