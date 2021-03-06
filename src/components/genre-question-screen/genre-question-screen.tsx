import * as React from "react";
import GenreQuestionItem from "../genre-question-item/genre-question-item";
import {QuestionGenre} from "../../types";


interface Props {
  question: QuestionGenre;
  userAnswers: boolean[];
  onAnswer: () => void;
  onChange: () => void;
  renderPlayer: (src: string, id: number) => void;
}

class GenreQuestionScreen extends React.PureComponent<Props, {}> {
  render() {
    const {
      onAnswer,
      onChange,
      question,
      renderPlayer,
      userAnswers,
    } = this.props;
    const {answers, genre} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer();
          }}
        >
          {answers.map((answer, i) => (
            <GenreQuestionItem
              key={`${i}-${answer.src}`}
              answer={answer}
              id={i}
              onChange={onChange}
              renderPlayer={renderPlayer}
              userAnswer={userAnswers[i]}
            />
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

export default GenreQuestionScreen;
