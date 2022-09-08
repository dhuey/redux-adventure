import React from 'react';
import { renderWithProviders } from '../test/utils';
import configureAppStore from '../store/configureStore';
import { screen, fireEvent } from '@testing-library/react';
import { Welcome } from './Welcome';

const store = configureAppStore();
const renderComponent = () => {
  renderWithProviders((<Welcome />), {store: store});
}
describe("Welcome Component", () => {
  it("renders succesfully", () => {
    renderComponent();
    expect(screen.getByText(/Hello/)).toBeInTheDocument;
  })

  it("sets the formStep when button is clicked", () => {
    renderComponent();
    const button = screen.getByRole('button');
    fireEvent.click(button)
    expect(store.getState().formStep.step).toEqual(1);
  })

})
