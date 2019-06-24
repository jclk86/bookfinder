import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Form from "./Form";

describe(`Form component`, () => {
  it("renders the complete form", () => {
    const wrapper = shallow(<Form />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
