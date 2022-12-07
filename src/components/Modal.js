export default function Modal({selectedObject ,deleteObject , updateObject, handleInput}) {
    //console.log(selectedObject);
    function resetModal(){

    }
    return (
        <>           
           {/*  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>
 */}
           
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">{selectedObject.object}</h5>
                            <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <form action="">
                        <div className="modal-body">
                          <input   className="form-control" placeholder="Modification de object..." onInput={(e)=>handleInput(e)}/>
                        </div>
                        <div className="modal-footer">
                        <input value="Delete" onClick={deleteObject} data-bs-dismiss="modal" type="reset" className="btn btn-danger"/>
                            <input value = "Modify" onClick={updateObject} type="reset" data-bs-dismiss="modal" className="btn btn-primary" />
                            <input value = "Cancel" type="reset" className="btn btn-secondary" data-bs-dismiss="modal"/>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}