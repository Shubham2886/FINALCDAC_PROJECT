import React, { Component } from 'react'
import BookService from '../services/BookService'
import "../css/SelectBookComponent.css"

export default class SelectBookComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            book_id: this.props.match.params.id,
            title: '',
            author: '',
            description: '',
            edition: '',
            publication: '',
            book_image: '',
            user_id: { userId: '', full_name: '' }
        }
    }
    gotoExchange = (b) => {
        b.preventDefault();
        localStorage.setItem("bookId_lender", this.state.book_id);
        localStorage.setItem("userId_lender", this.state.user_id.userId);
        this.props.history.push('/exchange');
    }
    cancel() {
        this.props.history.push('/books');
    }
    componentDidMount() {
        BookService.getBookById(this.state.book_id).then((res) => {
            let selectedBook = res.data;
            this.setState({
                title: selectedBook.title,
                author: selectedBook.author,
                description: selectedBook.description,
                edition: selectedBook.edition,
                publication: selectedBook.publication,
                book_image: selectedBook.image,
                user_id: { userId: selectedBook.user_id.userId, full_name: selectedBook.user_id.full_name }
                

            }
            );
            
            console.log(this.state.book_image);
        })
    
    }
    render() {
        return (
            <div className="app">
                {/* <div><h4>In Select Book Page</h4></div> */}
                <section className="section-content padding-y bg">


                    <article className="card">
                        <div className="card-body">
                            <div className="row">
                                <aside className="col-md-2">
                                    <article >
                                        <div>
                                    
                                            <img src={this.state.book_image} alt="" width="300" height="300" />
                                            
                                        </div>

                                    </article>
                                </aside>
                                <main className="col-md-10">
                                    <article className="title-float">

                                        <h1 className="title"><h2>{this.state.title}</h2></h1>
                                        <ul><li><h4>Author : {this.state.author}</h4></li>
                                            <li><h4>Edition : {this.state.edition}</h4></li>
                                            <li><h4>Publication : {this.state.publication}</h4></li>
                                            <li><h4>Description : {this.state.description}</h4>
                                            {/* <li><h4>Image : {this.state.book_image}</h4></li>*/}
                                            </li></ul> 


                                    </article>
                                </main>
                            </div>
                        </div>
                    </article>

                </section>
                <hr />
            
                
                {/* <h3>This book belongs to {this.state.user_id.full_name} with Id:{this.state.user_id.userId}</h3> */}
                <button className="btn btn-info" onClick={this.gotoExchange} style={{ marginTop: "10px" }}>Exchange</button>
                <button className="btn btn-info" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px", marginTop: "10px" }}>Rent</button>
            
            </div>
        )
    }
}
