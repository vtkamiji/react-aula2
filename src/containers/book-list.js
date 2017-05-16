import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // qq que retorna aqui será mostrado em props dentro de BookList
    return {
        books: state.books
    };
}

//qq coisa retornado por essa função irá para props no BookList container
function mapDispatchToProps(dispatch) {
    // quando selecTBook for chamado, 
    //o resultado será passado para todos os reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promove BookList de component para container - Precisa saber sobre o novo
//método dispatch ->SelectBook, Fica disponível como props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);