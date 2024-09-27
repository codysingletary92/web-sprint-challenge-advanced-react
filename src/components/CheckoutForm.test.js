import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstName = screen.getByLabelText(/First Name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);    
    const submit = screen.getByRole('button', /checkout/i);
    


    userEvent.type(firstName, 'Gabriel')
    userEvent.type(lastName, 'Tando')
    userEvent.type(address, '111 fake street')
    userEvent.type(city, 'fakecity')
    userEvent.type(state, 'fakestate')
    userEvent.type(zip, '00000')
    userEvent.click(submit)
    const successmessage = screen.getByTestId("successMessage");
    expect(successmessage).toBeVisible();
});
