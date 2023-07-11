import React from 'react';
import BookList from '../components/Book/BookList';
import BookMsg from '../components/Book/BookMsg';
import BookInput from '../components/Book/BookInput';
import { LibraryWrap } from '../components/styled/libraryStyle';

const Library = () => {
    return (
        <LibraryWrap>
            <section id='content' className='main-book'>
                <h2>BOOK-CAFE ! 도서 관리 시스템</h2>
                <div className="inner">
                    <BookInput />
                    <BookList />
                </div>
                <BookMsg />
            </section>
        </LibraryWrap>
    );
};

export default Library;