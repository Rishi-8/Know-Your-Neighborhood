package com.lithan.KYN.Store.Project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.lithan.KYN.Store.Project.KynStoreProjectApplication;

@SpringBootApplication
@ComponentScan("com.lithan")
@EntityScan("com.lithan")
@EnableJpaRepositories("com.lithan")
public class KynStoreProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(KynStoreProjectApplication.class, args);
    }

}