import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    height: 2rem;
    padding: 0 .5rem;
    
    &:focus,
    &:active{
        outline: none;
        box-shadown: none;
    }
`
export const Button = styled.button`
    border: 1px solid #000;
    border-radius: 0 .25rem .25rem 0;
    height: 2rem;
    background: #000;
    color: #fff;
`
export const ErrorMsg = styled.p`
    background: #f7a3a3;
    color: #751414;
    padding: .5rem 1rem;
    border-radius: 5px;
`