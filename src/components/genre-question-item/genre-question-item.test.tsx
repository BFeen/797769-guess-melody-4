import * as React from "react";
import * as renderer from "react-test-renderer";
import GenreQuestionItem from "./genre-question-item";
import {noOp} from "../../utils";


const answerMock = {
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  genre: `rock`,
};

it(`GenreQuestionItem snapshot testing`, () => {
  const tree = renderer.create(
      <GenreQuestionItem
        answer={answerMock}
        id={0}
        onChange={noOp}
        renderPlayer={() => null}
        userAnswer={false}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
