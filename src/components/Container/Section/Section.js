import React from 'react';


const Section = ({children, sectionTitle})=> {
    return(
        <section className="main-section">
            <h2>{sectionTitle}</h2>
            {children}
        </section>
    )
}

export default Section;