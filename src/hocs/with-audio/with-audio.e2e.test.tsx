import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import withAudio from "./with-audio";
import {noOp} from "../../utils";


configure({adapter: new Adapter()});

interface PlayerProps {
  children: React.ReactNode;
  onPlayButtonClick: () => void;
}

const Player = (props: PlayerProps) => {
  const {onPlayButtonClick, children} = props;

  return (
    <div>
      <button onClick={onPlayButtonClick} />
      {children}
    </div>
  );
};

describe(`HOC with-audio e2e checking`, () => {
  it(`Checks that HOC's callback turn on audio (play)`, () => {
    const PlayerWrapped = withAudio(Player);
    const wrapper = mount(<PlayerWrapped
      isPlaying={false}
      onPlayButtonClick={noOp}
      src=""
    />);

    window.HTMLMediaElement.prototype.play = () => Promise.resolve();

    const {audioRef} = wrapper.instance();

    const spy = jest.spyOn(audioRef.current, `play`);

    audioRef.current.play();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it(`Checks that HOC's callback turn off audio (pause)`, () => {
    const PlayerWrapped = withAudio(Player);
    const wrapper = mount(<PlayerWrapped
      isPlaying={true}
      onPlayButtonClick={noOp}
      src=""
    />);

    window.HTMLMediaElement.prototype.pause = noOp;

    const {audioRef} = wrapper.instance();

    const spy = jest.spyOn(audioRef.current, `pause`);

    audioRef.current.pause();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
