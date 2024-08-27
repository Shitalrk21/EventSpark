package com.ems.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.dao.StudioDao;
import com.ems.pojos.Event;
import com.ems.pojos.Studio;

@Service
@Transactional
public class StudioServicesIMPL implements IStudioServices {

	@Autowired
	StudioDao studioDao;
	@Autowired
	private EventServicesIMPL es;
	
	@Override
	public List<Studio> getAllStudio() {
		
		return studioDao.findAll();
	}
	@Override
	public void assignStudio(int id, Studio studio) {
		Event e=es.getById(id);
		e.setStudio(studio);
	}
	@Override
	public Studio addStudio(Studio studio) {
		studio.setPhotographycost(10000);
		studio.setVideographycost(30000);
		studio.setAlbumcost(15000);
		studio.setDronecost(35000);
		studio.setCranecost(40000);
		return studioDao.save(studio);
	}

}
