package com.jumzip.arcana.api.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(name = "UserRegisterRequest")
public class UserRegisterRequest {

    @Schema(name = "uid", example = "abcd123456")
    String uid;
    @Schema(name = "email", example = "ssafy@email.com")
    String email;
    @Schema(name = "provider", example = "Google")
    String provider;

}
