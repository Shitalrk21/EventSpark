package com.ems.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.pojos.Venue;

public interface VenueDao extends JpaRepository<Venue, Integer> {
	
}
