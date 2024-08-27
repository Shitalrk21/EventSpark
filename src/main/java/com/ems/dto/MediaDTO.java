package com.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class MediaDTO {
	private boolean photography;
	private boolean videography;
	private boolean album;
	private boolean drone;
	private boolean crane;
	
	
	
	public MediaDTO(boolean photography, boolean videography, boolean album, boolean drone, boolean crane) {
		super();
		this.photography = photography;
		this.videography = videography;
		this.album = album;
		this.drone = drone;
		this.crane = crane;
	}
	
	
	public MediaDTO() {
		super();
		// TODO Auto-generated constructor stub
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


	@Override
	public String toString() {
		return "MediaDTO [photography=" + photography + ", videography=" + videography + ", album=" + album + ", drone="
				+ drone + ", crane=" + crane + "]";
	}
	
	
}
