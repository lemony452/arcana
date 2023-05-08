package com.jumzip.arcana.api.serviceImpl;

import com.jumzip.arcana.api.service.TarotService;
import com.jumzip.arcana.db.entity.Card;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Random;

@Service
@Transactional
@RequiredArgsConstructor
public class TarotServiceImpl implements TarotService {


    @Override
    public Card[] getInstantResult(int cardNum) {
        Card[] cardlist = new Card[cardNum];

        Random r = new Random();

        // 랜덤 내가 돌림! 0~43 중 숫자 cardNum개 뽑고 배열에 나온 순서대로 넣기
        for(int i=0; i<cardNum; i++) {
            cardlist[] = r.nextInt(44);

        }


        return new Card[0];
    }
}
