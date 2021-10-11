package com.lithan.KYN.Store.Project;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepo;

	@Override
	public Users addUser(Users user) {
		Users new_user = userRepo.save(user);
		return new_user;
	}

	@Override
	public List<Users> getUsers() {
		List<Users> users = userRepo.findAll();
		return users;
	}

	@Override
	public Users login(Users user) {

		Users repouser = userRepo.findByuserName(user.getUserName());
		if (repouser == null) {
			// throw new RuntimeException("User does not exist");
			return null;
		}

		if (!repouser.getUserPassword().equals(user.getUserPassword())) {
			// throw new RuntimeException("Password is incorrect");
			return null;
		}

		return repouser;

	}

}
	 


