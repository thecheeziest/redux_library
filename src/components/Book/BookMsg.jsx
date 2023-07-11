import React, { useEffect } from 'react';
import { BookMsgBox } from '../styled/libraryStyle';
import { useDispatch, useSelector } from 'react-redux';
import { showMsg } from '../../store/modules/librarySlice';


const BookMsg = () => {
    const {msgBox, show} = useSelector(state => state.library)
    const dispatch = useDispatch()

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(showMsg(false))
        }, 2000);
        return() => clearTimeout(timer);
    }, [msgBox])

    return (
        <BookMsgBox className={msgBox ? 'on' : ''}>
            {
                show ? '도서가 수정되었습니다.' : '도서가 등록되었습니다.'
            }
        </BookMsgBox>
    );
};

export default BookMsg;