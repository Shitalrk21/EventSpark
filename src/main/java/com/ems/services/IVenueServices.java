package com.ems.services;

import java.util.List;

import com.ems.pojos.Venue;

public interface IVenueServices {
	List<Venue> getAllVenues();
	Venue addVenue(Venue venue);
}
