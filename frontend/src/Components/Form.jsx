import React from 'react';
import { useSelector } from 'react-redux';
import { getStep } from '../store/formSteps';
import { Welcome } from './Welcome';
import { QuestionOne } from './QuestionOne';
import { QuestionTwo } from './QuestionTwo';
import { QuestionThree } from './QuestionThree';
import { End } from './End';

const Form = () => {
  const step = useSelector(getStep);

  let content;
  switch(step) {
    case 0:
      content = <Welcome />
      break;
    case 1:
      content = <QuestionOne />
      break;
    case 2:
      content = <QuestionTwo />
      break;
    case 3:
      content = <QuestionThree />
      break;
    case 4:
      content = <End />
      break;
    default:
      content = <Welcome />
      break;
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default Form;
