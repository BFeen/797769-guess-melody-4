import React from "react";
import renderer from "react-test-renderer";
import AuthScreen from "./auth-screen.jsx";


it(`AuthScreen rendering correctly`, () => {
  const tree = renderer.create(
      <AuthScreen
        onSubmit={() => {}}
        onReplayButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
