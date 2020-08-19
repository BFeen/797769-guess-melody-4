import * as React from "react";
import {shallow, configure} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";


configure({
  adapter: new Adapter()
});

describe(`WelcomeScreen e2e checking`, () => {
  it(`Should welcome button be pressed`, () => {
    const onWelcomeButtonClick = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen
          errorsCount={3}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
    );

    const welcomeButton = welcomeScreen.find(`button.welcome__button`);

    welcomeButton.simulate(`click`);
    // welcomeButton.props().onClick();

    expect(onWelcomeButtonClick).toHaveBeenCalledTimes(1);
  });
});
