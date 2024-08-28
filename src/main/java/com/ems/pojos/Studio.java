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
@Table(name = "studio")
public class Studio extends BaseEntity {
	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int studio_id;
//	
	@Column(length = 20)
	@NotEmpty(message = "cannot be empty")
	private String name;
	@Column(length = 10)
	@Size(min = 10,max = 10)
	private String Contact;
//	@Positive
//	private double cost;
	private double photographycost;
	private double videographycost;
	private double albumcost;
	private double dronecost;
	private double cranecost;
	
	
//	public int getStudio_id() {
//		return studio_id;
//	}
//	public void setStudio_id(int studio_id) {
//		this.studio_id = studio_id;
//	}
	
	
	
	public String getName() {
		return name;
	}
	public Studio() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Studio(@NotEmpty(message = "cannot be empty") String name, @Size(min = 10, max = 10) String contact,
		double photographycost, double videographycost, double albumcost, double dronecost, double cranecost) {
	super();
	this.name = name;
	Contact = contact;
	this.photographycost = photographycost;
	this.videographycost = videographycost;
	this.albumcost = albumcost;
	this.dronecost = dronecost;
	this.cranecost = cranecost;
}
	public void setName(String name) {
		this.name = name;
	}
	public String getContact() {
		return Contact;
	}
	public void setContact(String contact) {
		Contact = contact;
	}
	public double getPhotographycost() {
		return photographycost;
	}
	public void setPhotographycost(double photographycost) {
		this.photographycost = photographycost;
	}
	public double getVideographycost() {
		return videographycost;
	}
	public void setVideographycost(double videographycost) {
		this.videographycost = videographycost;
	}
	public double getAlbumcost() {
		return albumcost;
	}
	public void setAlbumcost(double albumcost) {
		this.albumcost = albumcost;
	}
	public double getDronecost() {
		return dronecost;
	}
	public void setDronecost(double dronecost) {
		this.dronecost = dronecost;
	}
	public double getCranecost() {
		return cranecost;
	}
	public void setCranecost(double cranecost) {
		this.cranecost = cranecost;
	}
	@Override
	public String toString() {
		return "Studio [name=" + name + ", Contact=" + Contact + ", photographycost=" + photographycost
				+ ", videographycost=" + videographycost + ", albumcost=" + albumcost + ", dronecost=" + dronecost
				+ ", cranecost=" + cranecost + "]";
	}
	
	
	
//
//	@OneToMany(mappedBy = "studio", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
//	List<Event> bookedByEvent = new ArrayList<>();
}
