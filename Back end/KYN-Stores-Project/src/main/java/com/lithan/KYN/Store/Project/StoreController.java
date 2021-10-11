package com.lithan.KYN.Store.Project;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/store_controller")
public class StoreController {

	@Autowired
	private StoreService storeService;	
	
	@PostMapping("/api/stores")
	public  Store poststores(@RequestBody Store store)
	{	return storeService.addstore(store);
	}
	
	@GetMapping("/api/stores")
	public List<Store> getstores()
	{	List<Store> stores = storeService.getstores();
		return stores;
	}	
		
	@DeleteMapping(value = "/api/stores/{id}")
	public void deleteStore(@PathVariable Integer id)
	{	storeService.deletestoreById(id);
	}
	
	@GetMapping(value = "/api/stores/{storeId}")
	public Optional<Store> findstoreById(@PathVariable Integer storeId) {
		System.out.println("Get store By Id");
		return storeService.findstoreById(storeId);
	}
	
	@RequestMapping(value = "/api/stores/{storeId}", 
			  produces = "application/json", 
			  method=RequestMethod.PUT)
			public Store updatestore(@RequestBody Store store,@PathVariable Integer storeId) {
				Optional<Store> oldstore=storeService.findstoreById(storeId);
				if(oldstore.isPresent())
				{
					Store obj=oldstore.get();
					obj.setstoreName(store.getstoreName());
					obj.setstoreNumber(store.getstoreNumber());
					obj.setstoreLocation(store.getstoreLocation());
					
					return storeService.addstore(obj);
					
				}	
				else 
				{	return storeService.addstore(store);
				}
			}
	
	 @GetMapping("/api/search_stores/{searchKeyword}") 
	 public List<Store> searchForstores(@PathVariable("searchKeyword") String searchKeyword) {
		 List<Store> stores = storeService.searchForstores(searchKeyword); 
		 return stores; 
	 }
	 
	 
}
