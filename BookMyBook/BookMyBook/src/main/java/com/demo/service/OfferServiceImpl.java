package com.demo.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.demo.beans.Offer;
import com.demo.dao.OfferDao;

@Service
public class OfferServiceImpl implements OfferService{

	@Autowired
	private OfferDao offerDao;

	@Override
	public List<Offer> getallOffers() {
		
		return offerDao.findAll();
	}

	@Override
	public Offer saveOffer(Offer offer) {
		
		return offerDao.save(offer);
	}

	@Override
	public List<Offer> getOfferByLenderId(int lender_id) {
		
		return offerDao.findofferbylenderId(lender_id);
	}

	@Override
	public Offer getOfferById(int id) {
		return offerDao.getById(id);
	}

	
	

}
