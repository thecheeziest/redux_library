import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    libraryList: [],
    title: '', author: '', bookcode: '', id: '',
    edit: false, msgBox: false, show: false
}

export const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        titleInput(state, action) {
            state.title = action.payload
        },
        authorInput(state, action) {
            state.author = action.payload
        },
        bookcodeInput(state, action) {
            state.bookcode = action.payload
        },
        addBook(state, action) {
            const newBook = {
                id: state.libraryList.length + 1,
                ...action.payload
            };
            state.libraryList = [...state.libraryList, newBook];
        },
        delBook(state, action) {
            state.libraryList = state.libraryList.filter(item => item.id !== action.payload)
        },
        changeBook(state, action) {
            const books = state.libraryList.find(item => item.id === action.payload)
            state.title = books.title;
            state.author = books.author;
            state.bookcode = books.bookcode;
            state.id = action.payload;
            state.edit = true;
        },
        editBook(state, action) {
            state.libraryList = state.libraryList.map(item => item.id === state.id ? {...item, ...action.payload} : item);
            state.edit = false;
        },
        showMsg(state, action) {
            state.msgBox = action.payload
        },
        msgText(state, action) {
            state.show = action.payload
        }
    }
})

export const {titleInput, authorInput, bookcodeInput, addBook, delBook, changeBook, editBook, showMsg, msgText} = librarySlice.actions
export default librarySlice.reducer