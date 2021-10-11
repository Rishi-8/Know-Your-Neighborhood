package com.lithan.KYN.Store.Project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired 
    private BCryptPasswordEncoder bCryptPasswordEncoder;

	@PostMapping("/api/register")
    public Users addUser(@RequestBody Users users) {
        users.setUserPassword(bCryptPasswordEncoder.encode(users.getUserPassword()));
            return userService.addUser(users);
    }
	
	
	
	@PostMapping("/api/login")
	public Users login(@RequestBody Users user) 
	{
		Users login_user = userService.login(user);
		
		return login_user;
	}
	
}
