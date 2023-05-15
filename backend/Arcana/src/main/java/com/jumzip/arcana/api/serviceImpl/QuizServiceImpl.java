package com.jumzip.arcana.api.serviceImpl;

import com.jumzip.arcana.api.request.QuizRequest;
import com.jumzip.arcana.api.service.QuizService;
import com.jumzip.arcana.db.entity.Quiz;
import com.jumzip.arcana.db.entity.QuizList;
import com.jumzip.arcana.db.entity.User;
import com.jumzip.arcana.db.repository.QuizListRepository;
import com.jumzip.arcana.db.repository.QuizRepository;
import com.jumzip.arcana.db.repository.UserRepository;
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

    private final UserRepository userRepository;

    @Override
    public Quiz getQuiz(int quizNum) {
        return quizRepo.findQuizById(quizNum);
    }

    @Override
    public QuizList getQuizList() {
        return quizListRepository.findTopQuizListOrderByQuizListIdxDesc();
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
    public User updateUserTicket(QuizRequest quizRequest) {
        String uid = quizRequest.getUid();

        return userRepository.updateUserTicket(uid);
    }

}
