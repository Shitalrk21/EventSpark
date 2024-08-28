package com.ems.services;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {
	@Autowired
	private JavaMailSender mailsender;
	
	public void sendMail(String toEmail,String subject,String body) throws MessagingException {
		javax.mail.internet.MimeMessage mimeMessage = mailsender.createMimeMessage();
        MimeMessageHelper message = new MimeMessageHelper(mimeMessage);
//		SimpleMailMessage message=new SimpleMailMessage();
		message.setFrom("shubhevents.off@gmail.com");
		message.setTo(toEmail);
		message.setText(body,true);
		message.setSubject(subject);
		mailsender.send(mimeMessage);
		System.out.println("Email sent successfully");
	}

}
