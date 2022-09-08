import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act, waitFor } from 'react-dom/test-utils';
import App from '../../Components/App';

describe("walking through the form process", () => {
  let firstButton;

  const getNewButtonAndClick = async (repeats) => {
    for (let i=1; i <= repeats; i++) {
      firstButton = screen.getAllByRole('button')[0];
      fireEvent.click(firstButton);
    }
  };

    beforeEach(async () => {
      await act(() => {
        render(<App />)
      })
    })

  it("renders properly", ()=> {
    expect(screen.getByText(/Hello/)).toBeInTheDocument
  })

  it("renders the first question properly", ()=> {
    getNewButtonAndClick(1);
    expect(screen.getByText(/Question one/)).toBeInTheDocument
  })

  it("renders the second question properly", ()=> {
    getNewButtonAndClick(2);
    expect(screen.getByText(/Question two/)).toBeInTheDocument
  })

  it("renders the third question properly", ()=> {
    getNewButtonAndClick(3);
    expect(screen.getByText(/Question three/)).toBeInTheDocument
  })

  it("gets the name and renders the end properly", async ()=> {
    getNewButtonAndClick(4);
    screen.debug()
    expect(await screen.getByText(/Dalton Huey/)).toBeInTheDocument
  })
})


