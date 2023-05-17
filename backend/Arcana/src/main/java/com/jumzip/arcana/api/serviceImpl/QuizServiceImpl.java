package com.jumzip.arcana.api.serviceImpl;

import com.jumzip.arcana.api.request.QuizAnswerRequest;
import com.jumzip.arcana.api.response.QuizAnswerResponse;
import com.jumzip.arcana.api.service.QuizService;
import com.jumzip.arcana.db.entity.Quiz;
import com.jumzip.arcana.db.entity.QuizAnswer;
import com.jumzip.arcana.db.entity.QuizList;
import com.jumzip.arcana.db.repository.QuizAnswerRepository;
import com.jumzip.arcana.db.repository.QuizListRepository;
import com.jumzip.arcana.db.repository.QuizRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QuizServiceImpl implements QuizService {
    private final Logger logger = LoggerFactory.getLogger(QuizServiceImpl.class);

    private final QuizRepository quizRepo;

    private final QuizListRepository quizListRepository;

    private final QuizAnswerRepository quizAnswerRepository;

    @Override
    public Quiz getQuiz(int quizNum) {
        return quizRepo.findQuizById(quizNum);
    }

    @Override
    public List<Quiz> getQuizList() {
        QuizList quizList = quizListRepository.findTopQuizListOrderByQuizListIdxDesc();
        List<Quiz> quizzes = new ArrayList<>();

        quizzes.add(quizRepo.findQuizById(quizList.getQuiz0Idx()));
        quizzes.add(quizRepo.findQuizById(quizList.getQuiz1Idx()));
        quizzes.add(quizRepo.findQuizById(quizList.getQuiz2Idx()));
        quizzes.add(quizRepo.findQuizById(quizList.getQuiz3Idx()));
        quizzes.add(quizRepo.findQuizById(quizList.getQuiz4Idx()));
        quizzes.add(quizRepo.findQuizById(quizList.getQuiz5Idx()));
        quizzes.add(quizRepo.findQuizById(quizList.getQuiz6Idx()));
        quizzes.add(quizRepo.findQuizById(quizList.getQuiz7Idx()));
        quizzes.add(quizRepo.findQuizById(quizList.getQuiz8Idx()));
        quizzes.add(quizRepo.findQuizById(quizList.getQuiz9Idx()));

        return quizzes;
    }

    @Override
    public QuizList resetQuizList(int quizNum) {
        logger.info("start resetQuizList");

        int allQuizNum = quizRepo.findQuizNum().size();
        logger.info("allQuizNum size is " + allQuizNum);

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

        QuizList quizList = new QuizList();
        quizList.setQuiz0Idx(idxList[0]);
        quizList.setQuiz1Idx(idxList[1]);
        quizList.setQuiz2Idx(idxList[2]);
        quizList.setQuiz3Idx(idxList[3]);
        quizList.setQuiz4Idx(idxList[4]);
        quizList.setQuiz5Idx(idxList[5]);
        quizList.setQuiz6Idx(idxList[6]);
        quizList.setQuiz7Idx(idxList[7]);
        quizList.setQuiz8Idx(idxList[8]);
        quizList.setQuiz9Idx(idxList[9]);

        quizListRepository.saveQuizList(quizList);

        return quizList;
    }

    @Override
    public QuizAnswer updateQuizAnswer(QuizAnswerRequest quizAnswerRequest) {
        int quizIdx = quizAnswerRequest.getQuizIdx();
        int answerIdx = quizAnswerRequest.getAnswerIdx();

        return quizAnswerRepository.updateQuizAnswer(quizIdx, answerIdx);
    }

    @Override
    public List<QuizAnswerResponse> viewQuizAnswer() {
        List<QuizAnswer> quizAnswerList = quizAnswerRepository.findAllQuizAnswer();
        List<QuizAnswerResponse> quizAnswerResponsesList = new ArrayList<>();
        QuizAnswerResponse quizAnswerResponse = new QuizAnswerResponse();
        List<Integer> answerList = new ArrayList<>();

        for (int i = 1; i <= quizAnswerList.size(); i++) {
            if (i % 4 == 1) {
                quizAnswerResponse = new QuizAnswerResponse();
                answerList = new ArrayList<>();

                quizAnswerResponse.setQuizIdx(i / 4 + 1);
                answerList.add(quizAnswerList.get(i -1).getSelector());
            } else if (i % 4 == 0) {
                answerList.add(quizAnswerList.get(i -1).getSelector());
                quizAnswerResponse.setAnswerList(answerList);
                quizAnswerResponsesList.add(quizAnswerResponse);
            } else {
                answerList.add(quizAnswerList.get(i - 1).getSelector());
            }
            
        }
        
        return quizAnswerResponsesList;
    }

}
