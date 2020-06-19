import React from 'react';

class BugEdit extends React.Component {
    state = {
        newBugName: ''
    };
    render = () => {
        const { addNew } = this.props;
        return (
            <section className="edit">
                <label htmlFor="">Bug Name :</label>
                <input type="text" onChange={evt => this.setState({ newBugName: evt.target.value })} />
                <input type="button" value="Add New" onClick={_ => addNew(this.state.newBugName)} />
            </section>
        )
    }
}

export default BugEdit;