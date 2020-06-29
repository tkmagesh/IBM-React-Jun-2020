import React, { useState } from 'react';


const BugSort = ({sort}) => {
    const [sortAttr, setSortAttr] = useState('id');
    const [isDesc, setIsDesc] = useState(false);

    const onSortAttrChange = (evt) => {
        setSortAttr(evt.target.value);
        sort(evt.target.value, isDesc);
    }

    const onIsDescChange = (evt) => {
        setIsDesc(evt.target.checked);
        sort(sortAttr, evt.target.checked);
    }

    return (
        <section className="sort">
            <label htmlFor="">Order By :</label>
            <select onChange={onSortAttrChange}>
                <option value="id">Id</option>
                <option value="name">Name</option>
                <option value="isClosed">Status</option>
                <option value="createdAt">Created</option>
            </select>
            <label htmlFor="">Descending ? :</label>
            <input type="checkbox" onChange={onIsDescChange} />
        </section>
    )
};

export default BugSort;