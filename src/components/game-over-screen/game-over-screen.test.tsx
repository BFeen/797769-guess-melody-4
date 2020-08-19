import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import GameOverScreen from "./game-over-screen";
import history from "../../history";
import {noOp} from "../../utils";


it(`GameOverScreen snapshot testing`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <GameOverScreen
          onReplayButtonClick={noOp}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
