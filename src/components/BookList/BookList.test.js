import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import BookList from "./BookList";

describe("BookList Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<BookList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
