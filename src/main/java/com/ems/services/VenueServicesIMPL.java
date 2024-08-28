package com.ems.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.dao.VenueDao;
import com.ems.pojos.Venue;

@Service
@Transactional
public class VenueServicesIMPL implements IVenueServices {

	@Autowired
	private VenueDao venueDao;
	@Override
	public List<Venue> getAllVenues() {
		
		return venueDao.findAll();
	}
	@Override
	public Venue addVenue(Venue venue) {
		
		return venueDao.save(venue);
	}

}
