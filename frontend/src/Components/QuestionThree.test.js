import React from 'react';
import { renderWithProviders } from '../test/utils';
import configureAppStore from '../store/configureStore';
import { screen, fireEvent } from '@testing-library/react';
import { nextStep } from '../store/formSteps';
import { QuestionThree } from './QuestionThree';

let store = configureAppStore();
const renderComponent = () => {
  renderWithProviders((<QuestionThree />), {store: store});
}

describe("QuestionThree Component", () => {
  beforeEach(() => {
    store = configureAppStore();
    store.dispatch(nextStep())
    store.dispatch(nextStep())
  })

  it("renders succesfully", () => {
    renderComponent();
    expect(screen.getByText(/Question three/)).toBeInTheDocument;
  })

  it("sets the formStep when button is clicked", () => {
    renderComponent();
    const button = screen.getAllByRole('button')[0];
    fireEvent.click(button)
    expect(store.getState().formStep.step).toEqual(3);
  })

  it("sets the formContent question value when button is clicked", () => {
    renderComponent();
    const button = screen.getAllByRole('button')[0];
    fireEvent.click(button)
    expect(store.getState().formContent.questionThree).toEqual("African swallow");
  })

  it("decrements the formStep when back button is clicked", () => {
    renderComponent();
    const button = screen.getAllByRole('button')[2];
    fireEvent.click(button)
    expect(store.getState().formStep.step).toEqual(1);
  })
})


