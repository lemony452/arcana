package com.jumzip.arcana.api.serviceImpl;

import com.jumzip.arcana.api.service.TarotService;
import com.jumzip.arcana.db.entity.InstantCard;
import com.jumzip.arcana.db.entity.LuckyCard;
import com.jumzip.arcana.db.entity.TimeCard;
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

    private final CardRepository cardRepo;

    /* 뽑는 Card 수 cardNum, 메이저/풀덱 총 카드 수 Deck */
    /* 정방향 카드 idx 리스트 */
    public int[] UprightCardList(int cardNum, int deck) {

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

        return idxList;
    }

    public int[] CardDirMix(int[] idxList) {

        Random r = new Random();

        for(int i=0; i<idxList.length; i++) {
            // r.nextBoolean() == false 카드를 역방향으로 바꾼다
            if(!r.nextBoolean()) {idxList[i] += 78;}
        }
        return idxList;
    }

    @Override
    public List<InstantCard> getInstantList(int cardNum) {
        List<InstantCard> cardList = new ArrayList<>();
        int[] idxList = UprightCardList(cardNum, 22);


        for(int i=0; i<cardNum; i++) {

            System.out.print(idxList[i]+ " ");
        }
        System.out.println();

        for(int i=0; i<cardNum; i++) {
            InstantCard instant = cardRepo.findInstantByCardId(idxList[i]);
            cardList.add(i, instant);
        }

        return cardList;
    }

    /* 테스트용 */
    @Override
    public InstantCard getInstantData(int card_idx) {
        InstantCard ic = cardRepo.findInstantByCardId(card_idx);
        System.out.println(ic);
        return ic;
    }

    @Override
    public List<TimeCard> getTimeList(int cardNum) {
        List<TimeCard> cardList = new ArrayList<>();
        int[] idxList = CardDirMix(UprightCardList(cardNum, 78));

        for(int i=0; i<cardNum; i++) {

            System.out.print(idxList[i]+ " ");
        }
        System.out.println();

        for(int i=0; i<cardNum; i++) {
            TimeCard time = cardRepo.findTimeByCardId(idxList[i]);
            cardList.add(i, time);
        }

        return cardList;
    }

    @Override
    public TimeCard getTimeData(int card_idx) {
        TimeCard tc = cardRepo.findTimeByCardId(card_idx);
        System.out.println(tc);
        return tc;
    }

    @Override
    public LuckyCard getLuckyData() {
        Random r = new Random();
        int card_idx = r.nextInt(22);

        LuckyCard lc = cardRepo.findLuckyByCardId(card_idx);
        return lc;
    }

}
