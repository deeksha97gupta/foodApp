import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe("header component", () => {
    it('should render header component with login button', () => {
        // render
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole('button',{ name: 'Login' });

        //assertion
        expect(loginButton).toBeInTheDocument();

    });

    it('should render header component with cart item 0', () => {
        // render
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const cartItemLengthText = screen.getByText('Cart(0)');

        //assertion
        expect(cartItemLengthText).toBeInTheDocument();

    });

    it('should change login button to logout', () => {
        // render
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole('button',{ name: 'Login' });
    
        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole('button',{ name: 'Logout' });

        //assertion
        expect(logoutButton).toBeInTheDocument();

    });
}) 
