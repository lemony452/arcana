import React from 'react';
import * as quizStyle from './quiz_style';

function Quiz() {
  return (
    <quizStyle.FullArea>
      <quizStyle.LeftArea>
        <quizStyle.CharacterDialog>오늘도 완주를 향해 화이팅!</quizStyle.CharacterDialog>
        <quizStyle.CharacterArea>hi</quizStyle.CharacterArea>
      </quizStyle.LeftArea>
      <quizStyle.RightArea>
        <quizStyle.TimerArea>존야</quizStyle.TimerArea>
        <quizStyle.PeopleArea>인구수가 꽉 찼습니다.</quizStyle.PeopleArea>
      </quizStyle.RightArea>
    </quizStyle.FullArea>
  );
}

export default Quiz;
