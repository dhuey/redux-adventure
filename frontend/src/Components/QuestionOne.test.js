import React from 'react';
import { renderWithProviders } from '../test/utils';
import configureAppStore from '../store/configureStore';
import { screen, fireEvent } from '@testing-library/react';
import { nextStep } from '../store/formSteps';
import { QuestionOne } from './QuestionOne';

let store = configureAppStore();
const renderComponent = () => {
  renderWithProviders((<QuestionOne />), {store: store});
}

describe("QuestionOne Component", () => {
  beforeEach(() => {
    store = configureAppStore();
    store.dispatch(nextStep())
  })

  it("renders succesfully", () => {
    renderComponent();
    expect(screen.getByText(/Question one/)).toBeInTheDocument;
  })

  it("sets the formStep when button is clicked", () => {
    renderComponent();
    const button = screen.getAllByRole('button')[0];
    fireEvent.click(button)
    expect(store.getState().formStep.step).toEqual(2);
  })

  it("sets the formContent question value when button is clicked", () => {
    renderComponent();
    const button = screen.getAllByRole('button')[0];
    fireEvent.click(button)
    expect(store.getState().formContent.questionOne).toEqual("mountains");
  })

  it("decrements the formStep when back button is clicked", () => {
    renderComponent();
    const button = screen.getAllByRole('button')[2];
    fireEvent.click(button)
    expect(store.getState().formStep.step).toEqual(0);
  })
})
