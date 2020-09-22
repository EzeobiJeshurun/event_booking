import React from "react";
import Card from "../Card";
import renderer from "../../util/renderer";

describe("decribes Card Component", () => {
  it("Should render Card", () => {
    const { getByTestId } = renderer(
      <Card
        userImage={"https://"} 
        email={"evelyn@gmail.com"} 
        firstName={"Evelyn"} 
        lastName={"Juliet"}
        id={4}
      />
    );

    const cardContainer = getByTestId("card-container");
    expect(cardContainer).toBeInTheDocument();
  });

  it("Should render text on search field", () => {
    const { getByText } = renderer(
      <Card
        userImage={"https://"} 
        email={"evelyn@gmail.com"} 
        firstName={"Evelyn"} 
        lastName={"Juliet"}
        id={4}
      />
    );

    const searchText = getByText("Evelyn Juliet");
    expect(searchText.textContent).toContain("Evelyn Juliet");
  });
});
