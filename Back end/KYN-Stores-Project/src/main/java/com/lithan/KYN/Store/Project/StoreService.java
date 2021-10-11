package com.lithan.KYN.Store.Project;

import java.util.List;
import java.util.Optional;

public interface StoreService {

	public Store addstore(Store store);
	public List<Store> getstores();
	public Optional<Store> findstoreById(int storeId);
	public void  deletestoreById(int id);
	public List<Store> searchForstores(String searchKeyword);
	

}

