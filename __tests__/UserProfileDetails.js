import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../client/store";
import UserProfileDetails from "../client/components/UserProfileDetails";

describe("Unit Testing Profile", () => {
  let text;
  let testCase = {
    _id: "1234",
    name: "test",
    username: "test",
    password: "test",
    profilePicture: "none",
    wins: [],
    loss: [],
    totalWins: 0,
    totalLosses: 0,
    _v: 0,
    age: 12,
    fightingStyle: "test",
    height: 1,
    sex: "female",
    weight: 1,
    location: "NY",
  };

  beforeEach(() => {
    text = render(
      <Provider store={store}>
        <UserProfileDetails value={testCase.fightingStyle} />
      </Provider>
    );
  });
  test("renders the component with the correct fighting style value", () => {
    const fightingStyleElement = text.getByText("Fighting Style:");
    const valueElement = text.getByText(testCase.fightingStyle);

    expect(fightingStyleElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
