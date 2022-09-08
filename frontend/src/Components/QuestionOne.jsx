import React from 'react';
import { useDispatch } from 'react-redux';
import { updatedQuestionOne } from '../store/formContent';
import { nextStep, prevStep } from '../store/formSteps';
import { Button } from './Button';

export const QuestionOne = () => {
  const dispatch = useDispatch();
  const setQuestionOne = value => {
    dispatch(updatedQuestionOne(value));
    dispatch(nextStep());
  }
  
  return(
    <div>
      <p>
        Question one: do you prefer mountains, or the beach?
      </p>
      <div className="button-list">
        <Button text="Mountains!" handleClick={() => setQuestionOne("mountains")} />
        <Button text="Beach!" handleClick={() => setQuestionOne("beach")} />
      </div>
      <div className="button-list">
        <Button text="Go back" handleClick={() => dispatch(prevStep())} />
      </div>
    </div>
  )
}
