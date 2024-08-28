package com.ems.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ems.dao.UserDao;
import com.ems.pojos.User;

@Service
public class UserDetailServiceImpl implements UserDetailsService {

	@Autowired
	private UserDao userDao;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user=userDao.findByEmail(username).orElseThrow(()->new UsernameNotFoundException("Resourse Not Found"));
		if(user==null) {
			throw new UsernameNotFoundException(username+"not found");
		}
		return new UserDetailImpl(user);
	}
	
	

}
