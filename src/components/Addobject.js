export default function AddObject({ showAddButton, add, handleInput, AddObject }) {



  if (add) {

    return (
      <div className="row w-50">
        <div className="input-group mb-3">
          <input onInput={(e) => handleInput(e)} type="text" className="form-control" placeholder="New object" aria-label="Button" aria-describedby="" />
          <input onClick={AddObject} className="btn btn-primary" type="button" value="AddObject" />
          <input onClick={showAddButton} className="btn btn-secondary" type="button" value="Cancel" />
        </div>
      </div>
    );

  } else {

    return (<div className="row w-50">
      <div className="input-group mb-3">
        <table>          
        </table>
        <input onClick={showAddButton} className="btn btn-primary" type="button" value="New" />
      </div>
    </div>
    );
  }
}