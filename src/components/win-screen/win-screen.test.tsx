import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import WinScreen from "./win-screen";
import history from "../../history";
import {noOp} from "../../utils";


describe(`WinScreen snapshot testing`, () => {
  it(`WinScreen rendering correctly with 3 questions`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <WinScreen
            questionsCount={3}
            mistakesCount={3}
            onReplayButtonClick={noOp}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`WinScreen rendering correctly with 1 mistake`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <WinScreen
            questionsCount={3}
            mistakesCount={1}
            onReplayButtonClick={noOp}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe(`With 2 questions`, () => {
    it(`With 0 mistake`, () => {
      const tree = renderer.create(
          <Router history={history}>
            <WinScreen
              questionsCount={2}
              mistakesCount={0}
              onReplayButtonClick={noOp}
            />
          </Router>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistake`, () => {
      const tree = renderer.create(
          <Router history={history}>
            <WinScreen
              questionsCount={2}
              mistakesCount={1}
              onReplayButtonClick={noOp}
            />
          </Router>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
