import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import BookService from '../services/BookService'
import OfferService from '../services/OfferService';
import '../css/ExchangeBookComponent.css'

class ExchangeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            book_id: '',
            title: '',
            author: '',
            description: '',
            edition: '',
            publication: '',
            book_image: '',
            borrowerBooks: []
        }
    }  
    offerBook(id) {
        localStorage.setItem("bookId_borrower",id);
        
        var date =new Date().toISOString().slice(0, 19).replace('T', ' ');

        let offerData={borrower_book_id:{book_id:localStorage.getItem("bookId_borrower")},borrower_id:{userId:localStorage.getItem("userId_borrower")},lender_book_id:{book_id:localStorage.getItem("bookId_lender")},lender_id:{userId:localStorage.getItem("userId_lender")},exchange_date:date};
        console.log(offerData);
        OfferService.setOffer(offerData);
        alert("Offer submitted");
        this.props.history.push('/books');
    }
    componentDidMount() {
        let lenderbookid = localStorage.getItem("bookId_lender");
        BookService.getBookById(lenderbookid).then((res) => {
            let selectedBook = res.data;
            this.setState({
                title: selectedBook.title,
                author: selectedBook.author,
                description: selectedBook.description,
                edition: selectedBook.edition,
                publication: selectedBook.publication,
                book_image: selectedBook.book_image
            }
            );
           
        })
        let borroweruserid = localStorage.getItem("userId_borrower");
        BookService.getBookByUserId(borroweruserid).then((res => {
            this.setState({ borrowerBooks: res.data });
        }))
    }
    render() {
        return (
            <div className="app">
                {/* <div><h4>In Exchange Book Page</h4></div> */}
                <section class="section-content padding-y bg">
                    <div class="container">

                        <article class="card">
                            <div class="card-body">
                                <div class="row">
                                <aside className="col-md-2">
                                    <article >
                                        <div>
                                        <img src="song_of_ice_and_fire.jpeg" alt="" width="300" height="300" />
                                            {/* <img src={this.state.book_image} alt="" width="300" height="300" /> */}
                                            
                                        </div>

                                    </article>
                                </aside>
                                    <main class="col-md-10">
                                        <article className="title-float">

                                        <h1 className="title"><h2>{this.state.title}</h2></h1>
                                        <ul><li><h4>Author : {this.state.author}</h4></li>
                                            <li><h4>Edition : {this.state.edition}</h4></li>
                                            <li><h4>Publication : {this.state.publication}</h4></li>
                                            <li><h4>Description : {this.state.description}</h4>
                                            <li><h4>Image : {this.state.book_image}</h4></li></li></ul>
                                        </article>
                                    </main>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <hr />
                <h3>List of users who has this book will come here</h3>
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>

                            <th>Book Title</th>
                            <th>Book Author</th>
                            <th>Book Description</th>
                            <th>Book Edition</th>
                            <th>Book Publication</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.borrowerBooks.map(
                                borrowerBooks =>
                                    <tr key={borrowerBooks.book_id}>

                                        <td>{borrowerBooks.title}</td>
                                        <td>{borrowerBooks.author}</td>
                                        <td>{borrowerBooks.description}</td>
                                        <td>{borrowerBooks.edition}</td>
                                        <td>{borrowerBooks.publication}</td>
                                        <td><button onClick={() => this.offerBook(borrowerBooks.book_id)} className="btn btn-info">Offer</button></td>

                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default withRouter(ExchangeComponent)