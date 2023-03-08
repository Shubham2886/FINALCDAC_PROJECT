import React, { Component } from 'react'
import OfferService from '../services/OfferService'
import {withRouter} from 'react-router-dom'
import BookService from '../services/BookService'
import "../css/OfferComponent.css"


class OfferComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            offers:[]
        }
        this.acceptOffer=this.acceptOffer.bind(this);
        this.declineOffer=this.declineOffer.bind(this);

    }
    
    acceptOffer(id1,id2) {
        
        alert("Offer Accepted ")
        
        BookService.deactiveBookById(id1);
        BookService.deactiveBookById(id2);
        
        this.props.history.push("/books")
    }
    declineOffer(id) {
        OfferService.deactiveOfferById(id)
        this.props.history.push("/offer")
    }
    componentDidMount(){
        let borrower_id=localStorage.getItem("userId_borrower");
        OfferService.getOffer(borrower_id).then((res) => {
            this.setState({offers: res.data});
        })
        
    }
    render() {
        return (
            <div className="text">
                <h2 className="text-center">List of Offers</h2>
                <div className ="row">
                    <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            
                            <th>Your Book</th>
                            <th>Offered Book</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.offers.map(
                                offers =>
                                <tr key={offers.offerId}>
                                
                                <td>{offers.lender_book_id.title}</td>
                                <td>{offers.borrower_book_id.title}</td>
                                <td><button onClick={() => this.acceptOffer(offers.lender_book_id.book_id,offers.borrower_book_id.book_id)} className="btn btn-success" >Accept </button> {''} 
                                <button onClick={() => this.declineOffer(offers.offerId)} className="btn btn-danger">Decline</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default withRouter(OfferComponent)

