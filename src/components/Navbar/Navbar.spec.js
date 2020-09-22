import React from "react";
import Navbar from "../Navbar";
import renderer from "../../util/renderer";

describe("decribes app navbar", () => {
  it("Should render Navbar", () => {
    const { getByTestId } = renderer(
      <Navbar
        valueSearch={"testing navbar"}
      />
    );

    const appbar = getByTestId("appbar-container");
    expect(appbar).toBeInTheDocument();
  });

  it("Should render text on search field", () => {
    const { getByPlaceholderText } = renderer(
      <Navbar
        valueSearch={"testing navbar"}
      />
    );

    const searchText = getByPlaceholderText("Search");
    expect(searchText.value).toContain("testing navbar");
  });
});
