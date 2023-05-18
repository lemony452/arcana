package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.AnimalNickname;

public interface AnimalNicknameRepository {
    AnimalNickname findByAnimalNicknameIdx(int animalNicknameIdx);

}
