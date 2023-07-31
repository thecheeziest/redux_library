import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookInputBox } from '../styled/libraryStyle';
import { addBook, authorInput, bookcodeInput, editBook, msgText, showMsg, titleInput } from '../../store/modules/librarySlice';

const BookInput = () => {
    const dispatch = useDispatch();
    const {title, author, bookcode, edit} = useSelector(state => state.library)

    const onSubmit = e => {
        e.preventDefault();
        if ( !title || !author || !Number(bookcode) ) return;
        edit ? dispatch(editBook({title, author, bookcode})) : dispatch(addBook({title, author, bookcode}));
        dispatch(titleInput(''));
        dispatch(authorInput(''));
        dispatch(bookcodeInput(''));
        dispatch(showMsg(true));
        dispatch(msgText(edit));
    }

    return (
        <BookInputBox>
            <form className="book-form" onSubmit={onSubmit} >
                <p>
                    <label>저자</label>
                    <input type="text" name='title' placeholder='저자를 입력해 주세요. (ex. 어니스트 헤밍웨이)' value={title} onChange={e => dispatch(titleInput(e.target.value))} maxLength='10' />
                </p>
                <p>
                    <label>도서명</label>
                    <input type="text" name='author' placeholder='도서명을 입력해 주세요. (ex. 노인과 바다)' value={author} onChange={e => dispatch(authorInput(e.target.value))} maxLength='10' />
                </p>
                <p>
                    <label>책 코드</label>
                    <input type="text" name='bookcode' placeholder='책 코드를 숫자로 입력해 주세요. (ex. 00001)' value={bookcode} onChange={e => dispatch(bookcodeInput(e.target.value))} maxLength='5' />
                </p>
                <p><button className='btn' type='submit'>
                {
                    edit ? "수정하기" : "등록하기"
                }
                </button></p>
            </form>
        </BookInputBox>
    );
};

export default BookInput;