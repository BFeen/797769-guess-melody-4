import * as React from "react";
import * as renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";
import {noOp} from "../../utils";


describe(`WelcomeScreen component tests`, ()=> {
  it(`Render WelcomeScreen`, () => {
    const tree = renderer
      .create(<WelcomeScreen
        errorsCount = {3}
        onWelcomeButtonClick={noOp}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
