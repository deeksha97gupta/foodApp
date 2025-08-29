import { fireEvent, render, screen } from "@testing-library/react";
import BodyContainer from "../BodyContainer";
import '@testing-library/jest-dom';
import MOCK_DATA from "./mockData/mockResList.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("should render the body component with search", async() => {
    await act(async() => render(<BrowserRouter>
        <BodyContainer />
    </BrowserRouter>))

    const searchButton = screen.getByRole('button', { name: "Search"});
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger"}});
    fireEvent.click(searchButton);

    const cards = screen.getAllByTestId("resCards");
    expect(cards.length).toBe(2);
    expect(searchButton).toBeInTheDocument();
})