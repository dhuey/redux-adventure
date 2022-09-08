import React from 'react';
import { Button } from './Button';
import { useDispatch } from 'react-redux';
import { nextStep } from '../store/formSteps';

export const Welcome = () => {
  const dispatch = useDispatch();
    
  return(
    <>
      <p>Hello, there! I have a quest for you. But, as they say, it’s dangerous to go alone, so you ought to take a partner with you. Thankfully, I know a group of adventurers who fit the bill for this mission. Allow me to ask you a few questions, so I might determine who might be best to join your party.</p>
      <div className="button-list">
        <Button text="Okay, let's begin!" handleClick={() => dispatch(nextStep())} />
      </div>
    </>
  )
}
