import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";


describe(`WelcomeScreen component tests`, ()=> {
  it(`Render WelcomeScreen`, () => {
    const tree = renderer
      .create(<WelcomeScreen
        errorsCount = {3}
        onWelcomeButtonClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
