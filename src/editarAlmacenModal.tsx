import React from "react";

export default function editarAlmacenModal(){
    return(
        <>
            <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-conent">
                        <div className="modal-header">
                            <h5 className="modal-tittle" id="exampleModalLabel">Editar Almacen</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>editar almacen</p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">close</button>
                            <button type="button" className="btn btn-primary">Save</button>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}