import React, { ReactNode } from "react";
import '../src/Modal_design.css';


interface ModalType{
    children?: ReactNode;
    isOpen: boolean;
    toggle: ()=> void;
}


export default function Modal(props: ModalType){

    
    return(
        <>
        {props.isOpen && (

            <div onClick={props.toggle} className="modal-overlay" id="agregarAlmacen">
                <div className="modal-box">
                    {props.children}
                    <div className="modal-header modal-dialog-centered" style={{borderBottomWidth: "medium"}}>
                        <h1  style={{textAlign: "center"}}>Nuevo Almacen</h1>
                    </div>

                    <div className="modal-content">
                        <label>Nombre: </label><br></br>
                        <input type="text" placeholder="Nombre Almacen" style={{}}></input>
                        <br/>
                        <label>Ubicacion: </label><br/>
                        <input type="text" placeholder="Ubicacion Almacen"></input>
                        <br/>
                        <label>Status: </label><br/>
                        <input type="text" placeholder=" ej:Activo/Inactivo"></input>
                    </div>
                    <br></br>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" style={{marginLeft: "10px", marginRight: "10px"}}>Cancelar</button>
                        <button type="button" className="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>

            
        )}
          
        </>
    )
}


/*<form>
<label id="nombre">Nombre</label>
<input  id="nombre" type="text"></input>
</form>
/////////////////
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

            ////////////////////////
            <div onClick={props.toggle} className="modal-overlay" id="agregarAlmacen">

                <div className="modal-box">
                    {props.children}
                    <h1 style={{textAlign: "center"}}>Nuevo Almacen</h1>
                    <div className="App">
                        <label>Nombre: </label><br></br>
                        <input type="text" placeholder="Nombre Almacen" style={{}}></input>
                        <br/>
                        <label>Ubicacion: </label><br/>
                        <input type="text" placeholder="Ubicacion Almacen"></input>
                        <br/>
                        <label>Status: </label><br/>
                        <input type="text" placeholder=" ej:Activo/Inactivo"></input>
                    </div>
                </div>
                
        </div>
        )}

*/