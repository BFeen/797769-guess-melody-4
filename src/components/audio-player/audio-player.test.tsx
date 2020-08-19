import * as React from "react";
import * as renderer from "react-test-renderer";
import AudioPlayer from "./audio-player";
import {noOp} from "../../utils";


describe(`AudioPlayer snapshot test`, () => {
  it(`AudioPlayer is rendered correctly`, () => {
    const tree = renderer.create(
        <AudioPlayer
          isPlaying={false}
          isLoading={true}
          onPlayButtonClick={noOp}
        >
          <audio />
        </AudioPlayer>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
