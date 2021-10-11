package com.lithan.KYN.Store.Project.TestJunit;

import static org.junit.Assert.assertEquals;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.data.web.JsonPath;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.result.ModelResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import static org.mockito.Mockito.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lithan.KYN.Store.Project.Users;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class UsersTest {

	private MockMvc mockMvc;

	@Autowired
	private WebApplicationContext context;

	@Autowired
	private ObjectMapper mapper;

	@Before
	public void setup() {
		mockMvc = MockMvcBuilders.webAppContextSetup(context).apply(springSecurity()).build();
	}

	/********** Test Method for user Register *******/

	@WithMockUser
	@Test
	public void testUserRegister() throws Exception {

		// Create Mock User
		Users newUser = new Users(11l, "Rishikesh", "rishi145", "rishikesh@gmail.com", "Rishikesh", "4555-6666");
		String jsonRequest = mapper.writeValueAsString(newUser);
		System.out.println("Mock Register Json Request is " + jsonRequest);

		// Test Post Mapping and check user "Rishikesh" is successfully save or not
		mockMvc.perform(post("/users/api/register").content(jsonRequest).contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk()).andExpect(MockMvcResultMatchers.jsonPath("$.name").value("Rishikesh"));

	}

}
