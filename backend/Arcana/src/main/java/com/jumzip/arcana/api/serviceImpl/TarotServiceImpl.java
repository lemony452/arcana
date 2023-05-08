package com.jumzip.arcana.api.serviceImpl;

import com.jumzip.arcana.api.service.TarotService;
import com.jumzip.arcana.db.entity.InstantCard;
import com.jumzip.arcana.db.repository.CardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
@Transactional
@RequiredArgsConstructor
public class TarotServiceImpl implements TarotService {

    private CardRepository cardRepo;

    /* 뽑는 Card 수 cardNum, 메이저/풀덱 총 카드 수 Deck */
    public int[] getCardIdxList(int cardNum, int deck) {

        int[] idxList = new int[cardNum];
        Random r = new Random();

        loop:
        for(int i=0; i<cardNum; i++) {

            // 카드 중 1장을 뽑는다
            int newIdx = r.nextInt(deck);

            // 이전에 뽑은 카드의 번호를 뽑았는지 확인한다
            // 나왔던 카드의 번호라면, 무효처리
            for(int j=0; j<i; j++) {
                if(newIdx == idxList[j]) {i--; continue loop;}
            }

            // 정방향 only 리스트를 만든다
            idxList[i] = newIdx;
        }

        for(int i=0; i<cardNum; i++) {
            // r.nextBoolean() == false 카드를 역방향으로 바꾼다
            if(!r.nextBoolean()) {idxList[i] += 78;}
        }

        return idxList;
    }

    @Override
    public List<InstantCard> getInstantResult(int cardNum) {
        List<InstantCard> cardlist = new ArrayList<>();
        int[] idxList = getCardIdxList(cardNum, 22);

        for(int i=0; i<cardNum; i++) {
            cardlist.set(i, cardRepo.findInstantByCardId(idxList[i]));
        }

        return cardlist;
    }
}
