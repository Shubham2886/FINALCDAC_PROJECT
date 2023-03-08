package com.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Offer;

import com.demo.service.OfferService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class OfferController {

	@Autowired
	OfferService offerService;

	@GetMapping("/offers")
	public ResponseEntity<List<Offer>> getAllOffers() {
		List<Offer> offerList = offerService.getallOffers();
		if (offerList.size()<= 0) {
			return ResponseEntity.notFound().build();
		} else {
			return new ResponseEntity<>(offerList, HttpStatus.OK);
		}

	}
	@GetMapping("/offers/{lender_id}")
	public ResponseEntity<List<Offer>> getByUserId(@PathVariable int lender_id) {
		List<Offer> o = offerService.getOfferByLenderId(lender_id);

		System.out.println(o);
		if (o != null) {
			return new ResponseEntity<>(o , HttpStatus.OK);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}

	}
	@PutMapping("/offers/{id}")
	public ResponseEntity<List<Offer>> DisableOfferId(@PathVariable int id) {
		Offer o = offerService.getOfferById(id);

		System.out.println(o);
		if (o != null) {
			o.setDeActive();
			offerService.saveOffer(o);
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}

	}
	
	
	@PostMapping("/offer")
	public ResponseEntity<Offer> saveOffer(@RequestBody Offer offer) {
		Offer off = offerService.saveOffer(offer);

		HttpHeaders httpHeaders = new HttpHeaders();

		httpHeaders.add("Offer", "p1 added" + off.getOfferId());

		if (off != null) {
			return new ResponseEntity<>(off, httpHeaders, HttpStatus.CREATED);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

}
