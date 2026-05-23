import React from "react";
import { shallow, mount } from "enzyme";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";

describe("WithLogging tests", () => {
  it("logs Component on mount and unmount when wrapping pure HTML", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const NewComponent = WithLogging(() => <p />);
    const wrapper = shallow(<NewComponent />);

    expect(spy).toHaveBeenCalledWith("Component Component is mounted");
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith("Component Component is going to unmount");
    spy.mockRestore();
  });

  it("logs Component Login on mount and unmount when wrapping Login", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const NewComponent = WithLogging(Login);
    const wrapper = shallow(<NewComponent />);

    expect(spy).toHaveBeenCalledWith("Component Login is mounted");
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith("Component Login is going to unmount");
    spy.mockRestore();
  });
});
