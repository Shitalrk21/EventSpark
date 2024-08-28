package com.ems.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "caters")
public class Caters extends BaseEntity {
	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int caters_id;
//	
	@Column(length = 20)
	@NotEmpty(message = "cannot be empty")
	private String name;

	@Column(length = 20, name = "contact_number")
	@Size(min = 10,max = 10)
	private String contactNumber;
	@Column(length = 30)
	@NotEmpty(message = "cannot be empty")
	private String speciality;
	
//	public int getCaters_id() {
//		return caters_id;
//	}
//	public void setCaters_id(int caters_id) {
//		this.caters_id = caters_id;
//	}
	
//	public Caters() {
//		super();
//	}
	
	
	
	public String getName() {
		return name;
	}
	public Caters() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Caters(@NotEmpty(message = "cannot be empty") String name, @Size(min = 10, max = 10) String contactNumber,
		@NotEmpty(message = "cannot be empty") String speciality) {
	super();
	this.name = name;
	this.contactNumber = contactNumber;
	this.speciality = speciality;
}
	public void setName(String name) {
		this.name = name;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getSpeciality() {
		return speciality;
	}
	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
	@Override
	public String toString() {
		return "Caters [name=" + name + ", contactNumber=" + contactNumber + ", speciality=" + speciality + "]";
	}
		
	
	
//	@OneToMany(mappedBy = "bookedCater",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.EAGER)
//	private List<Event> BookedEvents;
	
	
}
