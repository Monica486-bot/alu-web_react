import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });

  it("should render Notifications component", () => {
    const component = shallow(<App />);
    expect(component.find(Notifications).length).toBe(1);
  });

  it("should render Header component", () => {
    const component = shallow(<App />);
    expect(component.find(Header).length).toBe(1);
  });

  it("should render Footer component", () => {
    const component = shallow(<App />);
    expect(component.find(Footer).length).toBe(1);
  });

  it("does not render CourseList when logged out", () => {
    const component = shallow(<App />);
    expect(component.find(CourseList).length).toBe(0);
  });

  describe("when isLoggedIn is true", () => {
    it("does not render Login", () => {
      const component = shallow(<App isLoggedIn={true} />);
      expect(component.find(Login).length).toBe(0);
    });

    it("renders CourseList", () => {
      const component = shallow(<App isLoggedIn={true} />);
      expect(component.find(CourseList).length).toBe(1);
    });
  });
});
