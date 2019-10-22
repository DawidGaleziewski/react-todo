import React, {useState} from 'react';

const Form = ()=> {

    const initialRecordState = {
        recordTitle: '',
        recordAuthor: '',
        description: ''
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
    }

    return(
        <form 
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
                rows="10">
            </textarea>

            <button type="submit">Add record</button>
        </form>
    )
}

export default Form;