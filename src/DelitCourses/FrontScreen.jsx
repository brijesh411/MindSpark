import { useState } from 'react';

// css
import './FrontScreen.css';
import options from './options.json';

const CATEGORY_SELECTION = 'CATEGORY_SELECTION';
const RULES_DISPLAY = 'RULES_DISPLAY';

const QuizSelectionScreen = ({ getSelectedCategory }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [view, setView] = useState(CATEGORY_SELECTION);

  const letMeInHandler = () => {
    if (!selectedOption) return;
    setView(RULES_DISPLAY);
  };

  const RulesComponent = () => {
    return (
      <>


      
      
        <div className="section">
        <div className="question">
            <h1> Select an Option: 
              <br></br>
              If It Turns <span style={{color: "rgb(19, 158, 6" }}>Green</span>, Congratulations! You've Chosen the Correct Answer. 
              <br></br>
              If It Turns <span style={{color: "rgb(255, 51, 0)" }}>Red</span>, Keep Exploring – It's Not the Right Path Yet. Unleash Your Wisdom and Journey Through the Quiz! 
            </h1>
          </div>
          </div>
          

        <div className="front-footer">
          <button onClick={() => getSelectedCategory(selectedOption)}>Yes, Lets Start!</button>
        </div>

        <div>
          <button className="back" onClick={() => setView(CATEGORY_SELECTION)}>
            &#171; Back
          </button>
        </div>
      </>
    );
  };

  const CategorySelector = () => {
    return (
      <>
        <p>
          The Quiz app requires to have a specefic category in order to start with. Select one of
          the below options in which you have expertise in.
        </p>
        <div className="selectable-options">
          {options.map((option) => {
            return (
              <div
                className={`single-selection ${selectedOption === option.id && 'active-selected'}`}
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
              >
                {option.name}
              </div>
            );
          })}
        </div>
        <div className="front-footer">
          <button onClick={letMeInHandler}>Let me in</button>
        </div>
      </>
    );
  };

  const renderView = view === CATEGORY_SELECTION;

  return (
    <div className="fun-quiz-main">
      <div className="main-child">
        <h1>{!renderView ? 'Quiz Rules' : 'Quiz App'}</h1>
        {renderView && <CategorySelector />}
        {!renderView && <RulesComponent />}
      </div>
    </div>
  );
};

export default QuizSelectionScreen;