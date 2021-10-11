package com.lithan.KYN.Store.Project;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class StoreServiceImpl implements StoreService{

	@Autowired
	StoreRepository storeRepo;
	
	@Override
	public Store addstore(Store store) {
		return storeRepo.save(store);
	}
	
	@Override
	public List<Store> getstores() {
		List <Store> stores = storeRepo.findAll();
		return stores;
	}
	
	@Override
	public void deletestoreById(int id) {
		storeRepo.deleteById(id);
	}


	@Override
	public Optional<Store> findstoreById(int storeId) {
		return storeRepo.findById(storeId);
	}

	
	 @Override 
	 public List<Store> searchForstores(String searchKeyword) { 
	 List<Store> stores = storeRepo.searchForstores(searchKeyword); return stores; 
	 
	 }
	 
}

