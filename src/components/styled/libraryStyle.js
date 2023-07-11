import styled from 'styled-components'

// LibraryWrap
export const LibraryWrap = styled.div`
width: 100%;
min-height: 100vh;
background: rgb(82,183,136);
background: radial-gradient(circle, rgba(82,183,136,1) 29%, rgba(64,145,108,1) 63%, rgba(45,106,79,1) 100%);
button { cursor: pointer; &:hover {background: #FFF; color: #000;} }
.main-book {
    background-image: url(../images/book.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
    min-height: 100vh;
    .show {
        width: 100%;
        height: 50px;
        margin: 30px 0;
        font-size: 20px;
        text-align: center;
        line-height: 50px;
        opacity: 0;
        transition: 0.3s;
        &.on {
            opacity: 1;
            background: #f0f3bd;
        }
        &.off {
            background: #cae9ff;
            opacity: 1;
        }
    }
    h2 {
        text-align: center; font-size: 40px; font-weight: 700;
        padding: 50px 0;
        color: #d8f3dc;
    }
    .inner {
            width: 1400px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            > div {
                width: 49%;
                padding: 30px;
                box-sizing: border-box;
                border-radius: 5px;
            }
        }
}
`

// BookInputBox
export const BookInputBox = styled.div`
width: 49%;
padding: 30px;
box-sizing: border-box;
border-radius: 5px;
.book-form {
    border: 5px solid #1b4332;
    border-radius: 25px;
    padding: 30px 50px;
    box-sizing: border-box;
    p {
        margin-bottom: 20px;
        color: #d8f3dc;
        label {
            display: block;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        input {
            width: 100%; height: 45px;
            border: 1px solid #40916c;
            padding: 0 10px;
            box-sizing: border-box;
            border-radius: 5px;
        }
    }
    button {
        display: block;
        width: 100%; height: 50px;
        background: #081c15;
        border: none;
        color: #FFF;
        font-size: 18px; font-weight: 700;
        margin-top: 40px;
        cursor: pointer;
        border-radius: 25px;
        &:hover {background: #FFF; color: #000;}
    }
}
`

// BookListBox
export const BookListBox = styled.div`
max-width: 600px;
.book-table {
    border: 5px solid #1b4332;
    width: 600px;
    margin: auto;
    caption {
        font-size: 22px;
        font-weight: 700;
        color: #1b4332;
        margin-top: -5px;
        margin-bottom: 20px;
    }
    .title {width: 20%;}
    .author {width: 30%;}
    .bookcode {width: 30%;}
    th, td {
        height: 50px;
        text-align: center;
        border-bottom: 1px solid #2d6a4f;
        vertical-align: middle;
        font-size: 18px;
        color: #d8f3dc;
    }
    th {
        font-weight: 600;
        border-bottom: 1px solid  #2d6a4f;
        background: #1b4332;
    }
    tr {
        td {
            color: #1b4332;
            background: #FFF;
        }
        &:nth-child(odd) td {
            background: #95d5b2;
        }
    }
    button {
        width: 35px; height: 35px;
        border: none;
        background: #081c15;
        color: #FFF;
        vertical-align: middle;
        &:hover {background: #FFF; color: #000;}
    }
}
`

// BookMsgBox
export const BookMsgBox = styled.div`
width: 100%;
height: 50px;
margin: 30px 0;
font-size: 20px;
text-align: center;
line-height: 50px;
opacity: 0;
transition: 0.3s;
background-color: black;
&.on {
    opacity: 1;
    background: #f0f3bd;
}
&.off {
    background: #cae9ff;
    opacity: 1;
}
`