import React from 'react';
import { renderWithProviders } from '../test/utils';
import configureAppStore from '../store/configureStore';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { nextStep } from '../store/formSteps';
import { End } from './End';

const renderComponent = () => {
  renderWithProviders((<End />), {store: store});
}

let store;


describe("End component", () => {
  beforeEach(() => {
    store = configureAppStore();
    store.dispatch(nextStep())
    store.dispatch(nextStep())
  })

  it("renders properly", async ()=> {
    await act(() => {
      renderComponent()
    });
    expect(await screen.getByText(/Dalton Huey/)).toBeInTheDocument
  })
})

