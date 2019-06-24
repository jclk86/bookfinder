import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import BookItem from "./BookItem";

describe("BookItem Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<BookItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
