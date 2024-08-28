package com.ems.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.pojos.Event;

public interface EventDao extends JpaRepository<Event, Integer> {
}
