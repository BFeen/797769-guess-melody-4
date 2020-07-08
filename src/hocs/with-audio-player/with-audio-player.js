import React, {PureComponent} from "react";
import AudioPlayer from "../../components/audio-player/audio-player.jsx";


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
