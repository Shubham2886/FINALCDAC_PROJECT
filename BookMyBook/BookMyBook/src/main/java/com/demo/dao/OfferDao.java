package com.demo.dao;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.demo.beans.Offer;


@Repository
public interface OfferDao extends JpaRepository<Offer ,Integer>{

	@Query(value="select * from offer where lender_id=? and is_active=1", nativeQuery=true)
	List<Offer> findofferbylenderId(int lender_id);

}
