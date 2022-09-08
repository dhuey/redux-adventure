import React from 'react';
import { useDispatch } from 'react-redux';
import { updatedQuestionTwo } from '../store/formContent';
import { nextStep, prevStep } from '../store/formSteps';
import { Button } from './Button';

export const QuestionTwo = () => {
  const dispatch = useDispatch();
  const setQuestionTwo = value => {
    dispatch(updatedQuestionTwo(value));
    dispatch(nextStep())
  }

  return(
    <div>
      <p>
        Question two: do you prefer hot weather or cold weather?
      </p>
      <div className="button-list">
        <Button text="Hot weather!" handleClick={() => setQuestionTwo("hot weather")} />
        <Button text="Cold weather!" handleClick={() => setQuestionTwo("cold weather")} />
      </div>
      <div className="button-list">
        <Button text="Go back" handleClick={() => dispatch(prevStep())} />
      </div>
    </div>
  )
}
