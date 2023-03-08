import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:8181/api"

class BookService {
    getBooks() {
        return axios.get(BOOK_API_BASE_URL+"/activebook");
    }


    addBook(book,formData) {
        
        return axios.post(BOOK_API_BASE_URL+"/book", book,formData);
        
    }

    getBookById(Bookid){
        return axios.get(BOOK_API_BASE_URL+'/books/'+Bookid)
        
    }

    deactiveBookById(Bookid){
        return axios.put(BOOK_API_BASE_URL+'/books/'+Bookid)
    }

    getBookByUserId(Userid){
        return axios.get(BOOK_API_BASE_URL+'/userbooks/'+Userid)
    }
    deleteById(Bookid){
        return axios.delete(BOOK_API_BASE_URL+'/books/'+Bookid)
    }
}

export default new BookService()