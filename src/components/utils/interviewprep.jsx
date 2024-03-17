   import React, { useState, useEffect } from 'react';

        const interviewprep = () => {
          const [answers, setAnswers] = useState(Array(10).fill(''));
          const [questions, setQuestions] = useState([]);
        
          useEffect(() => {
            const randomQuestions = [
                "1. Enter the name of your dream company?",
                "2. Enter your dream role?",
            ];
            setQuestions(randomQuestions);
          }, []);
        
          const handleInputChange = (index, event) => {
            const newAnswers = [...answers];
            newAnswers[index] = event.target.value;
            setAnswers(newAnswers);
          };
        
          const handleSubmit = (event) => {
            event.preventDefault();
            console.log('Answers:', answers);
          };
        
          return (
            <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '500px', margin: 'auto' }}>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-600 dark:text-white">Ace The Interview</h2>
              <form onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                  <div key={index} style={{ marginBottom: '15px' }}>
                    <label style={{ fontSize: '16px' }}>{`${question}`}</label>
                    <input
                      type="text"
                      style={{ marginLeft: '10px', padding: '5px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
                      value={answers[index]}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                ))}
                <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
              </form>
            </div>
          );
        };
        
        export default interviewprep;
        
