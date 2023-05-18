package com.jumzip.arcana.api.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class UpdateNicknameRequest {
    @Schema(example = "2785092517")
    String uid;

    @Schema(example = "의젓한 황금펭귄")
    String nickname;
}
