import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getName } from '../store/formContent';

export const End = () => {
  const dispatch = useDispatch();
  const requestStatus = useSelector(state => state.formContent.status);
  const error = useSelector(state => state.formContent.error);
  const answers = useSelector(state => state.formContent);

  useEffect(() => {
    if (requestStatus === "idle") {
      dispatch(getName());
    }
  }, [dispatch, requestStatus])

  let content;

  if (requestStatus === "loading" || requestStatus === "idle") {
    content = <p>Hmm, I'm thinking... {requestStatus}</p>;
  } else if (requestStatus === "succeeded") {
    content = <>
      <p>Because you chose {answers.questionOne}, {answers.questionTwo}, and the {answers.questionThree}, I think you should go on an adventure with:</p>
      <p><em>{answers.name}</em></p>
    </>
  } else if (requestStatus === "failed") {
    content = <p>I'm not sure. {error}</p>
  }

  return(
    <div>
      {content}
    </div>
  )
}

