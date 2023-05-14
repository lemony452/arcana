package com.jumzip.arcana.api.serviceImpl;

import com.jumzip.arcana.api.service.QuizService;
import com.jumzip.arcana.db.entity.Quiz;
import com.jumzip.arcana.db.repository.QuizRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class QuizServiceImpl implements QuizService {

    private QuizRepository quizRepo;

    @Override
    public List<Quiz> getQuizList(int quizNum) {

        List<Quiz> quizList = new ArrayList<>();

        int allQuizNum = quizRepo.findQuizNum().size();
        int[] idxList = new int[quizNum];
        Random r = new Random();

        loop:
        for(int i=0; i<quizNum; i++) {

            // 전체 퀴즈 중 1개 선택
            int newIdx = r.nextInt(allQuizNum);

            // 중복 제거
            for (int j = 0; j < i; j++) {
                if (newIdx == idxList[j]) { i--; continue loop; }
            }

            idxList[i] = newIdx;
        }

        for(int i=0; i<quizNum; i++) {
            Quiz quiz = quizRepo.findQuizById(idxList[i]);
            quizList.add(i, quiz);
        }

        return quizList;
    }
}
