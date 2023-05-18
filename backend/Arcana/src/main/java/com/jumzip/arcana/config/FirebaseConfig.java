package com.jumzip.arcana.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import javax.annotation.PostConstruct;
import java.io.*;

@Configuration
public class FirebaseConfig {

    @PostConstruct
    public void init() throws IOException {

        Resource resource = new ClassPathResource("firebaseKEY.json");
        InputStream is = resource.getInputStream();

        File jsonFile = File.createTempFile("firebaseKEY", ".json");

        try (FileOutputStream fos = new FileOutputStream(jsonFile)) {
            int read;
            byte[] bytes = new byte[1024];

            while ((read = is.read(bytes)) != -1) {
                fos.write(bytes, 0, read);
            }
        }

        try {
            FileInputStream serviceAccount = new FileInputStream(jsonFile);
            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .build();
            FirebaseApp.initializeApp(options);
        }
        catch (FileNotFoundException e) { e.printStackTrace(); }
        catch (IOException e) { e.printStackTrace(); }
    }
}
