import React from 'react';
import { useDispatch } from 'react-redux';
import { updatedQuestionThree } from '../store/formContent';
import { nextStep, prevStep } from '../store/formSteps';
import { Button } from './Button';

export const QuestionThree = () => {
  const dispatch = useDispatch();
  const setQuestionThree = value => {
    dispatch(updatedQuestionThree(value));
    dispatch(nextStep())
  }
  
  return(
    <div>
      <p>
        Question three: what is the airspeed velocity of an unladen swallow? You choose the country of origin. 
      </p>
      <div className="button-list">
        <Button text="African swallow!" handleClick={() => setQuestionThree("African swallow")} />
        <Button text="European swallow!" handleClick={() => setQuestionThree("European swallow")} />
      </div>
      <div className="button-list">
        <Button text="Go back" handleClick={() => dispatch(prevStep())} />
      </div>
    </div>
  )
}
