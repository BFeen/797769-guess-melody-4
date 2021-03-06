import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player";


configure({adapter: new Adapter()});

it(`Click by play button calls callback`, () => {
  const handlePlayButtonClick = jest.fn();
  const wrapper = shallow(
      <AudioPlayer
        isLoading={false}
        isPlaying={false}
        onPlayButtonClick={handlePlayButtonClick}
      >
        <audio />
      </AudioPlayer>
  );

  wrapper.find(`.track__button`).simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
