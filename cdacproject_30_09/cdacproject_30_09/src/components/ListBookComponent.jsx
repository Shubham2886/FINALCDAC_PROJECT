import React, { Component } from 'react'
import BookService from '../services/BookService'
import { withRouter } from "react-router-dom"
import '../css/ListBookComponent.css'

class ListBookComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             books:[]
        }

        this.selectBook = this.selectBook.bind(this);

    }
    selectBook(id) {
        this.props.history.push(`/book/${id}`)
        //<Redirect to="/book/:id"/>;
        console.log("Book id selected : "+id);
    }
    
    componentDidMount(){
        BookService.getBooks().then((res) => {
            this.setState({books: res.data});
        })
    }
    render() {
        return (
            <div className="text">
                <div><h2 className="text-center">List of Books</h2></div>
                <div className ="row">
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
                            this.state.books.map(
                                books =>
                                <tr key={books.book_id}>
                                   
                                <td>{books.title}</td>
                                <td>{books.author}</td>
                                <td>{books.description}</td>
                                <td>{books.edition}</td>
                                <td>{books.publication}</td>
                                <td><button onClick={() => this.selectBook(books.book_id)} className="btn btn-info">Select</button></td>

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

export default withRouter(ListBookComponent)
