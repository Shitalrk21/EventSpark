package com.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ems.pojos.Menu;
import com.ems.services.IMenuServices;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class MenuController {
	@Autowired
	private IMenuServices menuServices;

//	
//	@PostMapping("/submitmenu")
//	public ResponseEntity<?> submitMenu(@RequestBody List<Menu>menuList,HttpServletRequest request){
//		System.out.println("in menu submit"+request.getUserPrincipal().getName());
//		menuList.forEach((m)->System.out.println(m.toString()));
//		return null;
//	}
	
	@PostMapping("/addmenu")
	public ResponseEntity<?> addMenu(@RequestBody Menu menu){
		System.out.println(menu.toString());
		
		return ResponseEntity.ok(menuServices.addMenu(menu));
	}
	
	@GetMapping("/menucategory")
		public List<Menu>getByCategory(@RequestParam String category,@RequestParam String subCategory){
		System.out.println(category+"    "+subCategory);
		if(category.equals("ALL")&&!subCategory.equals("ALL"))
			return menuServices.getBySubCategory(subCategory);
		else if(!category.equals("ALL")&&subCategory.equals("ALL"))
			return menuServices.getByCategory(category);
		else if(category.equals("ALL")&&subCategory.equals("ALL"))
			return menuServices.getAllMenu();
		else
			return menuServices.getByCategoryAndSubCategory(category, subCategory);
		}

	
	
}
