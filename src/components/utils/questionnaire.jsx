import React, { useState, useEffect } from 'react';

const Questionnaire = () => {
  const [answers, setAnswers] = useState(Array(10).fill(''));
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const randomQuestions = [
      "1. What are your main interests or passions?",
      "2. What subjects or topics did you enjoy the most during your education?",
      "3. What skills or talents do you believe you possess?",
      "4. How would you describe your personality traits?",
      "5. What motivates you the most when considering a career?",
      "6. Have you had any part-time jobs, internships, or volunteer experiences? If so, what did you enjoy most about them?",
      "7. What are your short-term career goals?",
      "8. What are your long-term career goals?",
      "9. Are there any specific industries or fields that intrigue you?",
      "10. How do you envision your ideal work environment?",
      "11. Are there any role models or mentors whose career paths you admire or wish to emulate?",
      "12. What challenges do you anticipate facing in your career journey?",
      "13. Have you considered further education or professional certifications to enhance your skills and career prospects?"
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
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-600 dark:text-white">Questionnaire</h2>
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

export default Questionnaire;
