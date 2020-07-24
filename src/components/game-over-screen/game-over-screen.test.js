import React from "react";
import renderer from "react-test-renderer";
import GameOverScreen from "./game-over-screen.jsx";


it(`GameOverScreen snapshot testing`, () => {
  const tree = renderer.create(
      <GameOverScreen
        onReplayButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
