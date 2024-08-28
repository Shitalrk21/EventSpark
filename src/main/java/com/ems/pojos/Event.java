package com.ems.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@Entity
//@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
@Table(name = "event")
public class Event extends BaseEntity{
	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int event_id;
//	
	@Column(length = 20)
//	@NotBlank(message = "Enter Name")
	private String name;
	
	@Enumerated(value = EnumType.STRING)
	private EventType type;
//	@Future(message = "Date must be after today")
//	@NotNull(message = "Enter Date")
	private LocalDate date;

	@Column(name="guest_count")
	/*
	 * @Positive
	 * 
	 * @NotEmpty
	 */
	private int guestCount;
	
	@Column(name = "total_cost")
	private double totalCost;
	@Column(length = 20)
	private String status;
	@Column(length = 20)
	private String progress;
	private boolean photography;
	private boolean videography;
	private boolean album;
	private boolean drone;
	private boolean crane;
	@Column(name="customer_email")
	private String customerEmail;

	@ManyToOne
	@JoinColumn(name = "studio_id")
	private Studio studio;
	
	@ManyToOne
	@JoinColumn(name = "venue_id")
	private Venue bookedVenue;

	@ManyToOne
	@JoinColumn(name = "cater_id")
	private Caters bookedCater;
	
//	@ManyToMany(mappedBy = "regevents")
//    private List<User> users = new ArrayList<>();

	@ManyToMany(cascade = { CascadeType.PERSIST,CascadeType.REMOVE },fetch = FetchType.EAGER)
	@JoinTable(name = "event_menus", joinColumns = { @JoinColumn(name = "event_id") }, 
	inverseJoinColumns = {@JoinColumn(name = "menu_id") })
	List<Menu> menus = new ArrayList<>();
	
//	@ManyToMany(mappedBy="events")
//	List<Menu> menus = new ArrayList<>();

	
	
	
	public Event(String name, EventType type, LocalDate date, int guestCount, boolean photography, boolean videography,
			boolean album, boolean drone, boolean crane, Venue bookedVenue) {
		super();
		this.name = name;
		this.type = type;
		this.date = date;
		this.guestCount = guestCount;
		this.photography = photography;
		this.videography = videography;
		this.album = album;
		this.drone = drone;
		this.crane = crane;
		this.bookedVenue = bookedVenue;
	}

	
//	
//	public int getEvent_id() {
//		return event_id;
//	}
//
//
//
//	public void setEvent_id(int event_id) {
//		this.event_id = event_id;
//	}



	public Event() {
		super();
		// TODO Auto-generated constructor stub
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public EventType getType() {
		return type;
	}


	public void setType(EventType type) {
		this.type = type;
	}


	public LocalDate getDate() {
		return date;
	}


	public void setDate(LocalDate date) {
		this.date = date;
	}


	public int getGuestCount() {
		return guestCount;
	}


	public void setGuestCount(int guestCount) {
		this.guestCount = guestCount;
	}


	public double getTotalCost() {
		return totalCost;
	}


	public void setTotalCost(double totalCost) {
		this.totalCost = totalCost;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getProgress() {
		return progress;
	}


	public void setProgress(String progress) {
		this.progress = progress;
	}


	public boolean isPhotography() {
		return photography;
	}


	public void setPhotography(boolean photography) {
		this.photography = photography;
	}


	public boolean isVideography() {
		return videography;
	}


	public void setVideography(boolean videography) {
		this.videography = videography;
	}


	public boolean isAlbum() {
		return album;
	}


	public void setAlbum(boolean album) {
		this.album = album;
	}


	public boolean isDrone() {
		return drone;
	}


	public void setDrone(boolean drone) {
		this.drone = drone;
	}


	public boolean isCrane() {
		return crane;
	}


	public void setCrane(boolean crane) {
		this.crane = crane;
	}


	public String getCustomerEmail() {
		return customerEmail;
	}


	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}


	public Studio getStudio() {
		return studio;
	}


	public void setStudio(Studio studio) {
		this.studio = studio;
	}


	public Venue getBookedVenue() {
		return bookedVenue;
	}


	public void setBookedVenue(Venue bookedVenue) {
		this.bookedVenue = bookedVenue;
	}


	public Caters getBookedCater() {
		return bookedCater;
	}


	public void setBookedCater(Caters bookedCater) {
		this.bookedCater = bookedCater;
	}


	public List<Menu> getMenus() {
		return menus;
	}


	public void setMenus(List<Menu> menus) {
		this.menus = menus;
	}


	@Override
	public String toString() {
		return "Event [name=" + name + ", type=" + type + ", date=" + date + ", guestCount=" + guestCount
				+ ", totalCost=" + totalCost + ", status=" + status + ", progress=" + progress + ", photography="
				+ photography + ", videography=" + videography + ", album=" + album + ", drone=" + drone + ", crane="
				+ crane + ", studio=" + studio + ", bookedVenue=" + bookedVenue + ", bookedCater=" + bookedCater
				+ ", menus=" + menus + "]";
	}
}
