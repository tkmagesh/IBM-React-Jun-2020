import React from 'react';
import BugItem from './BugItem';

const BugList = ({ bugs, toggle, remove, removeClosed }) => (
    <section className="list">
        <ol>
            {bugs.map(bug => (<BugItem {...{ bug, remove, toggle }} key={bug.id} />))}
        </ol>
        {bugs.length === 0 ? null :
            (<input
                type="button"
                value="Remove Closed"
                onClick={_ => removeClosed(bugs)}
            />)
        }
    </section>
)

export default BugList;