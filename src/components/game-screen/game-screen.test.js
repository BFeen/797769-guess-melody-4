import React from "react";
import renderer from "react-test-renderer";
import GameScreen from "./game-screen.jsx";
import {GameType} from "../../const.js";


const children = <div className="children-component"></div>;

describe(`GameScreen snapshot test`, () => {
  it(`GameScreen rendering with game type Artist`, () => {
    const tree = renderer.create(
        <GameScreen
          type={GameType.ARTIST}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with game type Genre`, () => {
    const tree = renderer.create(
        <GameScreen
          type={GameType.GENRE}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
