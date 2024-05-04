import { useState } from 'react';
import { questions } from '../custom.jsx/data';
import SingleQuestion from './SingleQuestion';
const Questions = ({ activeID, toggleQuestion }) => {
  const [question, setQuestion] = useState(questions);
  return (
    <section className="my-[5rem]  p-[1.5rem]   ">
      {question.map((qst) => {
        return (
          <SingleQuestion
            {...qst}
            key={qst.id}
            activeID={activeID}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};
export default Questions;
