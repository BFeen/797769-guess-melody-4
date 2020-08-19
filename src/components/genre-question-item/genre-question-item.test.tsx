import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionItem from "./genre-question-item.jsx";


const answerMock = {
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  genre: `rock`,
};

it(`GenreQuestionItem snapshot testing`, () => {
  const tree = renderer.create(
      <GenreQuestionItem
        answer={answerMock}
        id={0}
        onChange={() => {}}
        renderPlayer={() => {}}
        userAnswer={false}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
