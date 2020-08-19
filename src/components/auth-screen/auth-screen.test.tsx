import * as React from "react";
import * as renderer from "react-test-renderer";
import AuthScreen from "./auth-screen";
import {noOp} from "../../utils";


it(`AuthScreen rendering correctly`, () => {
  const tree = renderer.create(
      <AuthScreen
        onSubmit={noOp}
        onReplayButtonClick={noOp}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
