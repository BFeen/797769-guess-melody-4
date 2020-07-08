import {reducer, ActionType, ActionCreator} from "./reducer.js";


describe(`Reducer testing`, () => {
  it(`Reducer without additional parameters shouldd return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      step: -1,
      mistakes: 0,
    });
  });

  it(`Reducer should increment current step by a given value`, () => {
    expect(reducer({
      step: -1,
      mistakes: 0,
    }, {
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    })).toEqual({
      step: 0,
      mistakes: 0,
    });

    expect(reducer({
      step: -1,
      mistakes: 0,
    }, {
      type: ActionType.INCREMENT_STEP,
      payload: 0,
    })).toEqual({
      step: -1,
      mistakes: 0,
    });
  });

  it(`Reducer should increment number of mistakes by a given value`, () => {
    expect(reducer({
      step: -1,
      mistakes: 0,
    }, {
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    })).toEqual({
      step: -1,
      mistakes: 1,
    });
  
    expect(reducer({
      step: -1,
      mistakes: 0,
    }, {
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0,
    })).toEqual({
      step: -1,
      mistakes: 0,
    });
  });
});

describe(`ActionCreators works correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    });
  });
});