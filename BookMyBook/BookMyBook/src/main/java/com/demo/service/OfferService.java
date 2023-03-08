package com.demo.service;

import java.util.List;
import java.util.Optional;

import com.demo.beans.Books;
import com.demo.beans.Offer;

public interface OfferService {

	List<Offer> getallOffers();

	Offer saveOffer(Offer offer);

	List<Offer> getOfferByLenderId(int lender_id);

	Offer getOfferById(int lender_id);

	

}
