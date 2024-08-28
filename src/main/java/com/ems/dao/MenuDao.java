package com.ems.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.pojos.CategoryType;
import com.ems.pojos.Menu;
import com.ems.pojos.SubCategoryType;

public interface MenuDao extends JpaRepository<Menu,Integer> {
	List<Menu> findByCategoryAndSubCategory(CategoryType category,SubCategoryType subCategory);
	List<Menu> findBySubCategory(SubCategoryType subCategory);
	List<Menu> findByCategory(CategoryType Category);
}
