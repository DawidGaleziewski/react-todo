import React, {useState} from 'react';
import styled from 'styled-components';

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 20rem;
    margin: 0 auto;
`;

const Form = ({onSubmit})=> {
    const initialRecordState = {
        recordTitle: '',
        recordAuthor: '',
        description: '',
    }

    const [recordState, setRecordState] = useState(initialRecordState);

    const onChangeHandler = e => {
        setRecordState({
            ...recordState,
            [e.target.name]: e.target.value
        });    
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(recordState);
        if(!recordState.recordTitle || !recordState.recordAuthor){
            return;
        }

        //!Important - remember to spread the passed object to clone it and not pass the referance
        onSubmit({...recordState});

        setRecordState(initialRecordState)
    }

    return(
        <FormStyled 
            className="new-record-form" 
            onSubmit={onSubmitHandler}
        >
            <label htmlFor="recordTitle">Record name</label>
            <input
                id="recordTitle" 
                type="text"
                name="recordTitle"
                onChange={onChangeHandler}
                value={recordState.recordTitle}
            />
            <label htmlFor="recordAuthor">Record author</label>
            <input 
                id="recordAuthor"
                type="text"
                name="recordAuthor"
                onChange={onChangeHandler}
                value={recordState.recordAuthor}
            />
            <label htmlFor="description">Record description</label>
            <textarea
                onChange={onChangeHandler} 
                name="description" 
                id="description" 
                cols="30" 
                rows="10"
                value={recordState.description}
                >
            </textarea>

            <button type="submit">Add record</button>
        </FormStyled>
    )
}

export default Form;