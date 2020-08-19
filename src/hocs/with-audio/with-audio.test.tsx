import * as React from "react";
import * as renderer from "react-test-renderer";
import withAudio from "./with-audio";
import {noOp} from "../../utils";


interface mockProps {
  children: React.ReactNode;
}

const MockComponent = (props: mockProps) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withAudio(MockComponent);

it(`withAudio snapshot testing`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        isPlaying={false}
        onPlayButtonClick={noOp}
        src={``}
      />, {
        createNodeMock() {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
