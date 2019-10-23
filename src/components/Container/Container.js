import React, {Fragment, useState} from 'react';
import Header from './Header/Header';
import Section from './Section/Section';
import Form from './Section/Form/Form';
import List from './Section/List/List';

// const initialRecordState = [
//     {
//         id: 1,
//         recordTitle: 'test1',
//         recordAuthor: 'D\'Caprio',
//         description: 'Awesome record'
//     },
//     {   
//         id: 2,
//         recordTitle: 'test2',
//         recordAuthor: 'Deniro',
//         description: 'Meh record'
//     },
//     {   
//         id: 3,
//         recordTitle: 'test3',
//         recordAuthor: 'Johny B',
//         description: 'Kinda good'
//     }
// ];

const Container = ()=> {
    const [records, setRecords] = useState([]);
    const onSubmitHandler = record => {
        //Remember to spread the record and add the entry (same as in form control)
        setRecords([...records, record]);
    }

    return(
        <Fragment>
            <Header />
            <Section sectionTitle="Input record data">
                <Form onSubmit={onSubmitHandler}/>
            </Section>
            <Section sectionTitle="List of records">
                <List records={records} />
            </Section>
        </Fragment>
    )
}

export default Container;