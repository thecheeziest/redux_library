import React from 'react';
import { BookListBox } from '../styled/libraryStyle';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
    const {libraryList} = useSelector(state => state.library)
    return (
        <BookListBox>
            <table className="book-table">
                <caption>
                    도서 관리 시스템
                </caption>
                <colgroup>
                    <col className="author" />
                    <col className="title" />
                    <col className="bookcode" />
                    <col className="del" />
                </colgroup>
                <thead>
                    <tr>
                        <th>저자</th>
                        <th>도서명</th>
                        <th>책 코드</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody className="book-tbody">
                        {
                            libraryList.map(item => <BookItem key={item.id} item={item} />)
                        }

                </tbody>
            </table>
        </BookListBox>
    );
};

export default BookList;