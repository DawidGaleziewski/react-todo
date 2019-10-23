import React from 'react';

const List = ({records})=> {
    return (
        <ul>
            {records.map(record=> {
                return (
                    <ul key={record.recordTitle}>
                        <li>{record.recordTitle}</li>
                        <li>{record.recordAuthor}</li>
                        <li>{record.description}</li>
                    </ul>
                )
            })}
        </ul>
    )
}

export default List;