import React, {PureComponent} from "react";
import Player from "../../components/audio-player/audio-player.jsx";
import withAudio from "../with-audio/with-audio.js";


const AudioPlayer = withAudio(Player);

const withAudioPlayer = (Component) => {
  class WithAudioPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        audioPlayerId: 0,
      };
    }

    render() {
      const {audioPlayerId} = this.state;

      return (
        <Component
          {...this.props}
          renderPlayer={(src, id) => {
            return (
              <AudioPlayer
                src={src}
                isPlaying={id === audioPlayerId}
                onPlayButtonClick={() => this.setState({
                  audioPlayerId: audioPlayerId === id ? -1 : id,
                })}
              />
            );
          }}
        />
      );
    }
  }

  WithAudioPlayer.propTypes = {};

  return WithAudioPlayer;
};

export default withAudioPlayer;
