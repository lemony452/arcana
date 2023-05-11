package com.jumzip.arcana.api.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.core.io.Resource;

@Tag(description = "이미지 API", name = "IMAGE")
@RestController
@RequestMapping("/api/v1/images")
public class ImageController {
    private final Logger logger = LoggerFactory.getLogger(ImageController.class);

    @Operation(summary = "image View, Download", description = "이미지를 src 태그로 부르거나 다운로드 하는 기능 "
        + " \n 0.png ~ 155.png 중 하나를 입력값으로 넣어주세요")
    @GetMapping("/{fileName}")
    public ResponseEntity<Resource> getImageFile(@PathVariable String fileName) throws FileNotFoundException {
        String path = "./images/" + fileName;
        logger.info("filePath - " + path);

        InputStreamResource inputStreamResource = new InputStreamResource(new FileInputStream(path));

        try {
            return ResponseEntity
                .ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(inputStreamResource);
        } catch (Exception e) {
            logger.info("get image file error - " + e.getMessage(), e);

            return ResponseEntity
                .badRequest()
                .contentType(MediaType.APPLICATION_JSON)
                .body(null);
        }

    }

}
