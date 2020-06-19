import React from 'react';
class BugStats extends React.Component {
    render = () => {
        const { bugs } = this.props;
        const closedCount = bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
        return (
            <section className="stats">
                <span className="closed">{closedCount}</span>
                <span> / </span>
                <span>{bugs.length}</span>
            </section>
        )
    }
}
export default BugStats;