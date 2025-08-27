import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import RestroCard from "../RestroCard";
import reCardMock from "./mockData/resCardMock.json"

it("should render the correct restaurant card with prop data", () => {
    //render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <RestroCard restroInfo={reCardMock}/>
            </Provider>
        </BrowserRouter>
    )

    //query
    const cardName = screen.getByText("Burger King");
    
    //assertion
    expect(cardName).toBeInTheDocument();
}) ;