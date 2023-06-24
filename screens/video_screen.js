import { View, StyleSheet } from "react-native";
import { downloadAsync, cacheDirectory, getInfoAsync } from "expo-file-system";
import React, { useState, useEffect } from "react";
import ProgressIndicator from "../components/progress_indicator";
import { Video } from "expo-av";
import { activateKeepAwakeAsync, deactivateKeepAwake } from "expo-keep-awake";

const videoSource =
  "https://player.vimeo.com/external/387242416.hd.mp4?s=b21342e26b86ebb098e8c7a3ea29bd09a6831141&profile_id=174&oauth2_token_id=57447761";

export default function VideoPlayerScreen() {
  const [isBuffering, setBuffering] = useState(true);
  const [videoUri, setVideoUri] = useState(null);
  const [playbackStatus, setPlaybackStatus] = useState(false);
  const handlePlaybackStatus = (newPlaybackStatus) => {
    setPlaybackStatus(newPlaybackStatus.isPlaying);
  };

  useEffect(() => {
    const cacheVideo = async () => {
      const cachedVideoUri = `${cacheDirectory}/demo-video.mp4}`;
      const fileInfo = await getInfoAsync(cachedVideoUri);
      if (fileInfo.exists) {
        setVideoUri(cachedVideoUri);
      } else {
        const { uri } = await downloadAsync(videoSource, cachedVideoUri);
        setVideoUri(uri);
      }
    };
    cacheVideo();
  }, []);

  useEffect(() => {
    const enableKeepAwake = async () => {
      await activateKeepAwakeAsync();
    };
    if (playbackStatus) {
      enableKeepAwake();
    } else {
      deactivateKeepAwake();
    }
  }, [playbackStatus]);

  return (
    <View style={styles.container}>
      {isBuffering && <ProgressIndicator />}
      <Video
        style={styles.video}
        source={{ uri: videoUri }}
        isLooping
        shouldPlay
        resizeMode="cover"
        useNativeControls
        onLoadStart={() => setBuffering(true)}
        onReadyForDisplay={() => setBuffering(false)}
        onPlaybackStatusUpdate={handlePlaybackStatus}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  video: {
    height: 400,
  },
});
