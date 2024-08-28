package com.ems.pojos;




import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
@Entity
@Table(name = "venue")
public class Venue extends BaseEntity{
	

	@Column(length = 50)
	@NotEmpty(message = "name required")
	private String name;

	@NotEmpty(message = "location required")
	@Column(length = 20)
	private String location;

	@NotEmpty(message = "address required")
	@Column(length = 200)
	private String address;

	@Column(name = "max_capacity")
	@Positive
	@NotNull(message = "max capacity required")
	private int maxCapacity;
	
	@Column(length = 200)
	private String description;
	
	@Column(length = 20)
	@NotEmpty(message = "category required")
	private String category;
	
	@Column(length = 20)
	@Size(min = 10,max = 10)
	private String contact;
	
	@Column
	@Positive
	private double cost;

	
//	public int getVenue_id() {
//		return venue_id;
//	}
//
//	public void setVenue_id(int venue_id) {
//		this.venue_id = venue_id;
//	}

	
	
	
	
	public String getName() {
		return name;
	}

	public Venue() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Venue(@NotEmpty(message = "name required") String name, @NotEmpty(message = "location required") String location,
		@NotEmpty(message = "address required") String address,
		@Positive @NotNull(message = "max capacity required") int maxCapacity, String description,
		@NotEmpty(message = "category required") String category, @Size(min = 10, max = 10) String contact,
		@Positive double cost) {
	super();
	this.name = name;
	this.location = location;
	this.address = address;
	this.maxCapacity = maxCapacity;
	this.description = description;
	this.category = category;
	this.contact = contact;
	this.cost = cost;
}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getMaxCapacity() {
		return maxCapacity;
	}

	public void setMaxCapacity(int maxCapacity) {
		this.maxCapacity = maxCapacity;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	@Override
	public String toString() {
		return "Venue [name=" + name + ", location=" + location + ", address=" + address + ", maxCapacity="
				+ maxCapacity + ", description=" + description + ", category=" + category + ", contact=" + contact
				+ ", cost=" + cost + "]";
	}


	
	
//	@OneToMany(mappedBy = "bookedVenue",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//	private List<Event> BookedVenueByEvent= new ArrayList<Event>();
//	
	
}
