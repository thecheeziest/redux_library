import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeBook, delBook } from '../../store/modules/librarySlice';

const BookItem = ({item}) => {
    const {id, title, author, bookcode} = item;
    const dispatch = useDispatch();
    const [current, setCurrent] = useState({id, title, author, bookcode});



    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{bookcode}</td>
            <td>
                <button onClick={() => dispatch(changeBook(id))}>✎</button>
                <button onClick={() => dispatch(delBook(id))}>X</button>
            </td>
        </tr>
    );
};

export default BookItem;