package com.lithan.KYN.Store.Project;

import java.util.List;

public interface UserService {
	public Users addUser(Users user);
	public Users login(Users user);
	public List<Users> getUsers();
}
