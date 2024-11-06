// src/components/LessonPage.js
import React from 'react';
import { Quiz } from './Quiz';

const LessonPage = ({ lesson, onComplete }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{lesson.title}</h2>
      <div 
        className="lesson-content mb-8"
        dangerouslySetInnerHTML={{ __html: lesson.content }} 
      />
      <Quiz 
        questions={lesson.quiz.questions}
        onComplete={onComplete}
      />
    </div>
  );
};
