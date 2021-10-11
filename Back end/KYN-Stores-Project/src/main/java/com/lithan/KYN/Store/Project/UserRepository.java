package com.lithan.KYN.Store.Project;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Long>{

	Users findByuserName(String userName);

}
