import * as React from "react";
import * as renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen";
import {GameType, QuestionGenre} from "../../types";
import {noOp} from "../../utils";


const question: QuestionGenre = {
  type: GameType.GENRE,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
};

describe(`GenreQuestionScreen snap-testing`, () => {
  it(`GenreQuestionScreen render`, () => {
    const tree = renderer.create((
      <GenreQuestionScreen
        question={question}
        onAnswer={noOp}
        renderPlayer={() => null}
        onChange={noOp}
        userAnswers={[false, false, false, false]}
      />
    ), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
