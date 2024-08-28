package com.ems.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.dao.CatererDao;
import com.ems.pojos.Caters;
import com.ems.pojos.Event;

@Service
@Transactional
public class CatersServicesIMPL implements ICatersServices{
	@Autowired
	private CatererDao caterDao;
	
	@Autowired
	private EventServicesIMPL es;
	
	@Override
	public List<Caters> getAllCaters() {
	
		return caterDao.findAll();
	}

	@Override
	public void assignCaterer(int id, Caters cater) {
		Event e=es.getById(id);
		e.setBookedCater(cater);	
	}

	@Override
	public Caters addCaterer(Caters cater) {
		
		return caterDao.save(cater);
	}
	
	
}
