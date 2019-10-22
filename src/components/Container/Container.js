import React, {Fragment} from 'react';
import Header from './Header/Header';
import Section from './Section/Section';
import Form from './Section/Form/Form';
import List from './Section/List/List';

const Container = ()=> {
    return(
        <Fragment>
            <Header />
            <Section sectionTitle="Input record data">
                <Form/>
            </Section>
            <Section sectionTitle="List of records">
                <List />
            </Section>
        </Fragment>
    )
}

export default Container;