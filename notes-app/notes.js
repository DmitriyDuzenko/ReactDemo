var Note = React.createClass({
    render: function () {
        var style = { backgroundColor: this.props.color };
        return(
            <div className="note" style={style}>{this.props.children}</div>
        );
    }
});

var NoteEditor = React.createClass({
    getInitialState: function () {
        return{
            text: ''
        }
    },

    handleTextChange: function(event){
        this.setState({text: event.target.value })
    },

    render: function () {
        return(
            <div className="note-editor">
                <textarea
                    placeholder="Enter your notehere..."
                    rows={5}
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <button className="add-button">Add</button>
            </div>
        );
    }
});

var NotesGrid = React.createClass({
    componentDidMount: function () {
        var grid = this.refs.grid;
        var msnry = new Masonry(grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10
        });
    },
    render: function () {
        return(
            <div className="notes-grid" ref="grid">
                {
                    this.props.notes.map(function (note) {
                        return <Note key={note.id} color={note.color}> {note.text} </Note>
                    })
                }
            </div>
        );
    }
});

var NotesApp = React.createClass({
    getInitialState: function () {
        return {
            notes: [{
                id:0 ,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                + "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                + "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                color: "#68ffbd"
            },
                {
                    id:1 ,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    + "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    color: "#333bff"
                },
                {
                    id:2 ,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    + "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    color: "#fffeda"
                }
            ]
        }
    },

    render: function () {
        return(
            <div className="notes-app">
                NotesApp
                <NoteEditor/>
                <NotesGrid notes={this.state.notes}/>
            </div>
        );
    }
});

ReactDOM.render(
    <NotesApp/>,
    document.querySelector("#mount-point")
);


