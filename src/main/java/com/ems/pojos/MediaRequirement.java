//package com.ems.pojos;
//
//import javax.persistence.Embeddable;
//import javax.persistence.Entity;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.MapsId;
//import javax.persistence.OneToOne;
//import javax.persistence.Table;
//
//import lombok.Data;
//import lombok.EqualsAndHashCode;
//
//@Data
//@EqualsAndHashCode(callSuper=false)
//public class MediaRequirement extends BaseEntity{
//private boolean photography;
//private boolean videography;
//private boolean album;
//private boolean drone;
//private boolean crane;
//
//@OneToOne
//@JoinColumn(name = "media_id",nullable = false)
//@MapsId
//private Event event;
//
//@ManyToOne
//@JoinColumn(name = "studio_id",nullable = false)
//private Studio studio;
//}
