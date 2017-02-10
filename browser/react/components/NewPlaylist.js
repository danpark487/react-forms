import React from 'react';

const NewPlaylist = (props) => {
    const inputLength = props.inputValue.length;
    // const showWarning = props.inputEntered && (inputLength > 15 || inputLength < 1);
    return (
        <div className="well">
            <form className="form-horizontal" onSubmit={props.handleSubmit}>
                <fieldset>
                    <legend>New Playlist</legend>
                    { props.showWarning ?
                        <div className="alert alert-warning">Please enter a name</div>
                        : null}
                    <div className="form-group">
                        <label className="col-xs-2 control-label">Name</label>
                        <div className="col-xs-10">
                            <input
                                value={props.inputValue}
                                className="form-control" 
                                type="text" 
                                onChange={props.handleChange} 
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-10 col-xs-offset-2">
                            <button disabled={inputLength > 15 || inputLength < 1} type="submit" className="btn btn-success">Create Playlist</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default NewPlaylist;
