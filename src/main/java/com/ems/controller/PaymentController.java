package com.ems.controller;

import org.json.JSONObject;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.razorpay.*;
import com.ems.pojos.Event;

@RestController
@RequestMapping
@CrossOrigin(origins  = "http://localhost:3000")
public class PaymentController {
	
	@PostMapping("/payment")
	public String Payment(@RequestBody Event event) {
		try {	
		RazorpayClient  client= new RazorpayClient("rzp_test_iU4N0Hfz8SDIJU","C1yqmUwGJQ6oH0qHcqYxl4O6");
		JSONObject ob=new JSONObject();
		ob.put("amount",(event.getTotalCost()*100));
		ob.put("currency", "INR");
		ob.put("receipt", "txn_12345");
		System.out.println("in paymnrt");
		System.out.println(ob);
		Order create = client.Orders.create(ob);
		return create.toString();
		}catch (RazorpayException e) {
			return "bad_Request";
			}
	}
	
	@PostMapping("/changeStatus")
	public void storePaymentDetails(@RequestBody Event event) {

		
	}
}
