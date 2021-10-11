package com.lithan.KYN.Store.Project;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StoreRepository extends JpaRepository<Store, Integer>{
	  	  
	  @Query(value = 
			  
			  	"SELECT c FROM Store c WHERE c.storeName LIKE '%' || :searchKeyword || '%'"
			  	+ " OR c.storeNumber LIKE '%' || :searchKeyword || '%'"
				+ " OR c.storeLocation LIKE '%' || :searchKeyword || '%'"
				
			  )
	  
	  public List<Store> searchForstores(@Param("searchKeyword") String searchKeyword);
	 
}
