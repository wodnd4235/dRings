package com.design.rings.test.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	
	@GetMapping("/api/test")
    public ResponseEntity<String> hello() {
    	return new ResponseEntity<>("ok", HttpStatus.OK);
    }
	
}