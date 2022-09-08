import React from 'react';
import { renderWithProviders } from '../test/utils';
import configureAppStore from '../store/configureStore';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe("App component", () => {
  it("renders properly", ()=> {
    render(<App />);
    expect(screen.getByText(/Hello/)).toBeInTheDocument
  })
})

