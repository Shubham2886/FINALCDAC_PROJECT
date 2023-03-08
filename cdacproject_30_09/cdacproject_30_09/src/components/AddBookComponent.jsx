import React, { Component } from 'react'
import BookService from '../services/BookService';

import {withRouter} from "react-router-dom"

 class AddBookComponent extends Component {
    constructor(props) {
        super(props)
         
        this.state = {
            user_id:'',
            title: '',
            author: '',
            description: '',
            edition: '',
            publication: '',
            
        }
        let ifLogin=localStorage.getItem("userId_borrower");
            if (ifLogin==='') {
                alert("Please Login first")
                this.props.history.push('/login')
            } else {

                this.state.user_id=localStorage.getItem("userId_borrower");
               
                
            }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeEditionHandler = this.changeEditionHandler.bind(this);
        this.changePublicationHandler = this.changePublicationHandler.bind(this);
    }
    
    saveBook = (b) => {
        b.preventDefault();
        let books = {user_id:{userId:this.state.user_id}, title: this.state.title, author: this.state.author, description: this.state.description, edition: this.state.edition, publication: this.state.publication };
        console.log('Books => ' + JSON.stringify(books));

        BookService.addBook(books).then((res) => {
            let Imgbook_id=res.data.book_id;
            console.log(Imgbook_id);
            localStorage.setItem("uploadImgBookId",Imgbook_id)
            this.props.history.push('/upload')
          
        });
    }
    cancel() {
        this.props.history.push('/books');
    }


    changeTitleHandler = (event) => {
        this.setState({ title: event.target.value });
    }
    changeAuthorHandler = (event) => {
        this.setState({ author: event.target.value });
    }
    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }
    changeEditionHandler = (event) => {
        this.setState({ edition: event.target.value });
    }
    changePublicationHandler = (event) => {
        this.setState({ publication: event.target.value });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" >Add Book</h3>
                            <div >
                                <form>
                                    <div className="form-group">
                                        <label> Title: </label>
                                        <input placeholder="Title" name="title" className="form-control"
                                            value={this.state.title} onChange={this.changeTitleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Author: </label>
                                        <input placeholder="Author" name="author" className="form-control"
                                            value={this.state.author} onChange={this.changeAuthorHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Description: </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                            value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Edition: </label>
                                        <input placeholder="Edition" name="edition" className="form-control"
                                            value={this.state.edition} onChange={this.changeEditionHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Publication: </label>
                                        <input placeholder="Publication" name="publication" className="form-control"
                                            value={this.state.publication} onChange={this.changePublicationHandler} />
                                    </div>
                                    

                                    <button className="btn btn-success" onClick={this.saveBook} style={{ marginTop: "10px" }}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px", marginTop: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}
export default withRouter(AddBookComponent)