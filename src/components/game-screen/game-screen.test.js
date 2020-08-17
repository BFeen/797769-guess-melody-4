import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {GameScreen} from "./game-screen.jsx";
import {GameType} from "../../const.js";
import history from "../../history.js";


const children = <div className="children-component"></div>;

describe(`GameScreen snapshot test`, () => {
  it(`GameScreen rendering with game type Artist`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <GameScreen
            goToWelcome={() => {}}
            type={GameType.ARTIST}
            mistakes={3}
          >
            {children}
          </GameScreen>
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with game type Genre`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <GameScreen
            goToWelcome={() => {}}
            type={GameType.GENRE}
            mistakes={3}
          >
            {children}
          </GameScreen>
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
