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
        int[] idxlist = new int[cardNum];
        Random r = new Random();

        for(int i=0; i<cardNum; i++) {
            // major 0~21 중 1장을 뽑는다
            int newidx = r.nextInt(22);

            // 이전에 뽑은 카드의 번호를 뽑았는지 확인한다
            // 나왔던 카드의 번호라면, 무효처리
            for(int j=0; j<i; j++) {
                if(newidx == idxlist[j]) {i--;}
            }

            // major 정방향 only 리스트를 만든다
            idxlist[i] = newidx;
        }

        for(int i=0; i<cardNum; i++) {
            // 랜덤값 false인 카드를 역방향으로 바꾼다
            if(!r.nextBoolean()) {idxlist[i] += 78;}
        }




        return new Card[0];
    }
}
