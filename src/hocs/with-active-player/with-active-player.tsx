import * as React from "react";
import {Subtract} from "utility-types";
import Player from "../../components/audio-player/audio-player";
import withAudio from "../with-audio/with-audio";


interface State {
  activePlayerId: number;
}

interface InjectingProps {
  renderPlayer: (src: string, id: number) => React.ReactNode;
}

const AudioPlayer = withAudio(Player);

const withAudioPlayer = (Component) => {
  // Получаем props переданного компонента
  type P = React.ComponentProps<typeof Component>;
  /**
   * Вычисляем props, которые нужно передать снаружы в обернутый компонент
   * P - props компонента, InjectingProps - переданные хоком пропсы
   * T - props, которые нужно передать в обернутый хоком компонент
   * Условно: T = P - InjectingProps
   * Например: P = {foo: string, bar: string}, InjectingProps = {bar: string}
   * Тогда: T = {foo: string}
   */
  type T = Subtract<P, InjectingProps>;
  
  class WithAudioPlayer extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0,
      };
    }

    render() {
      const {activePlayerId} = this.state;

      return (
        <Component
          {...this.props}
          renderPlayer={(src, id) => {
            return (
              <AudioPlayer
                src={src}
                isPlaying={id === activePlayerId}
                onPlayButtonClick={() => this.setState({
                  activePlayerId: activePlayerId === id ? -1 : id,
                })}
              />
            );
          }}
        />
      );
    }
  }

  return WithAudioPlayer;
};

export default withAudioPlayer;
