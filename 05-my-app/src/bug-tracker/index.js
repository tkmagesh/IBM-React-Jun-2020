import React from 'react';
import './index.css';

import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';

const BugTracker = ({ bugs, addNew, remove, toggle, removeClosed }) => (
    <div>
        <h1>Bug Tracker</h1>
        <hr />
        <BugStats bugs={bugs} />
        <BugSort />
        <BugEdit addNew={addNew} />
        <BugList {...{ bugs, toggle, remove, removeClosed }} />
    </div>
);

export default BugTracker;