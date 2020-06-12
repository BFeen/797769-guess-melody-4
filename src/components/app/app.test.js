import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";


describe(`App component tests`, ()=> {
  it(`Render App`, () => {
    const tree = renderer
      .create(<App
        errorsCount = {3}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
