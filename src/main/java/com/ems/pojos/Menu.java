package com.ems.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@Table(name = "menu")
//@AllArgsConstructor
//@NoArgsConstructor
@ToString
public class Menu extends BaseEntity {
	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int menu_id;
//	
	@Enumerated(value = EnumType.STRING)
	private CategoryType category;
	@Enumerated(value = EnumType.STRING)
	@Column(name = "sub_category")
	private SubCategoryType subCategory;
	@NotEmpty(message = "not be Empty")
	@Column(name = "menu_name ", length = 20)
	private String MenuName;
	@Positive
	private double price;
	
	
//	public int getMenu_id() {
//		return menu_id;
//	}
//	public void setMenu_id(int menu_id) {
//		this.menu_id = menu_id;
//	}
	
	
	
	
	public CategoryType getCategory() {
		return category;
	}
	public Menu() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Menu(CategoryType category, SubCategoryType subCategory, @NotEmpty(message = "not be Empty") String menuName,
		@Positive double price) {
	super();
	this.category = category;
	this.subCategory = subCategory;
	MenuName = menuName;
	this.price = price;
}
	public void setCategory(CategoryType category) {
		this.category = category;
	}
	public SubCategoryType getSubCategory() {
		return subCategory;
	}
	public void setSubCategory(SubCategoryType subCategory) {
		this.subCategory = subCategory;
	}
	public String getMenuName() {
		return MenuName;
	}
	public void setMenuName(String menuName) {
		MenuName = menuName;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Menu [category=" + category + ", subCategory=" + subCategory + ", MenuName=" + MenuName + ", price="
				+ price + "]";
	}
	
	
	
//	@ManyToMany(cascade = { CascadeType.ALL },fetch = FetchType.EAGER)
//	@JoinTable(name = "event_menus", joinColumns = { @JoinColumn(name = "menu_id") }, 
//	inverseJoinColumns = {@JoinColumn(name = "event_id") })
//	List<Event> events = new ArrayList<>();
}
