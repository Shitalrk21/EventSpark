package com.ems.services;

import java.util.List;
import com.ems.pojos.Studio;

public interface IStudioServices {
	List<Studio> getAllStudio();
	void assignStudio(int id,Studio studio);
	Studio addStudio(Studio studio);
}
