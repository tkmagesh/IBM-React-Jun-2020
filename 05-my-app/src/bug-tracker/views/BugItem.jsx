import React from 'react';

const BugItem = ({ bug, remove, toggle }) => (
    <li>
        <span
            className={'bugname' + (bug.isClosed ? ' closed' : '')}
            onClick={_ => toggle(bug)}
        >
            {bug.name}
        </span>
        <div className="datetime">{bug.createdAt.toString()}</div>
        <input type="button" value="Delete" onClick={_ => remove(bug)} />
    </li>
)

export default BugItem;