import React from "react";
import { fireEvent } from "@testing-library/react";
import TimePickerTab from "../TimePickerTab";
import renderer from "../../util/renderer";

describe("decribes TimePickerTab component", () => {

  it("Should open confirm TimePickerTab dialog", async () => {
    const { findByTestId } = renderer(
      <TimePickerTab
        text={"8"} 
        availability={true} 
        userId={2} 
        time={"8"} 
        schedule={{}}
      />
    );

    const inputText = await findByTestId("tab-picker-container");
    fireEvent.click(inputText);
    const confirmDialog = await findByTestId("tab-picker-dialog");
    expect(confirmDialog).toBeInTheDocument();

  });


  it("Should render TimePickerTab", () => {
    const { getAllByTestId } = renderer(
      <TimePickerTab
       text={"8"} 
       availability={true} 
       userId={2} 
       time={"8"} 
       schedule={{}}

      />
    );

    const container = getAllByTestId("tab-picker-container");
    expect(container[0]).toBeInTheDocument();
  });

  it("Should render text in TimePickerTab", () => {
    const { getByText } = renderer(
      <TimePickerTab
        text={"8"} 
        availability={true} 
        userId={2} 
        time={"8"} 
        schedule={{}}
      />
    );

    const inputText = getByText("8");
    expect(inputText.textContent).toContain("8");
  });

  
});
