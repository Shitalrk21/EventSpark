package com.ems.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.dao.MenuDao;
import com.ems.pojos.CategoryType;
import com.ems.pojos.Menu;
import com.ems.pojos.SubCategoryType;

@Service
@Transactional
public class MenuServicesIMPL implements IMenuServices {
	@Autowired
	private MenuDao menuDao;
	

	@Override
	public List<Menu> getAllMenu() {
		return menuDao.findAll();
	}

	@Override
	public List<Menu> getByCategoryAndSubCategory(String category, String subCategory) {
		return menuDao.findByCategoryAndSubCategory(CategoryType.valueOf(category),SubCategoryType.valueOf(subCategory));
	}

	@Override
	public List<Menu> getByCategory(String category) {
		
		return menuDao.findByCategory(CategoryType.valueOf(category));
	}

	@Override
	public List<Menu> getBySubCategory(String subCategory) {
		return menuDao.findBySubCategory(SubCategoryType.valueOf(subCategory));
	}

//	@Override
//	public void submitMenu(List<Menu> list, String email) {
//		User u= userDao.findByEmail(email).orElseThrow();
//		
//		
//	}

	@Override
	public Menu addMenu(Menu menu) {
		
		return menuDao.save(menu);
	}

}
