import * as React from "react";
import * as renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen";
import {GameType, QuestionArtist} from "../../types";
import {noOp} from "../../utils";


const question: QuestionArtist = {
  type: GameType.ARTIST,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `https://api.adorable.io/avatars/128/0`,
    artist: `John Snow`,
  }, {
    picture: `https://api.adorable.io/avatars/128/1`,
    artist: `Jack Daniels`,
  }, {
    picture: `https://api.adorable.io/avatars/128/2`,
    artist: `Jim Beam`,
  }],
};

describe(`ArtistQuestionScreen snap-test`, () => {
  it(`ArtistQuestionScreen render`, () => {
    const tree = renderer.create(
        <ArtistQuestionScreen
          question={question}
          onAnswer={noOp}
          renderPlayer={noOp}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
