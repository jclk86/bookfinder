import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import BookDetails from "./BookDetails";

describe("BookDetails Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<BookDetails />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
