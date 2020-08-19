import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActivePlayer from "./with-active-player.js";


configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActivePlayer(MockComponent);

it(`withActivePlayer HOC e2e testing`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().audioPlayerId).toEqual(0);
});
