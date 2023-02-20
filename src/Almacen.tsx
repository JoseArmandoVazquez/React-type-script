import React from "react";
import axios from "axios";
import '../src/interface';
import 'bootstrap';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "./Modal";


import useModal from "./useModal";
import { AlmacenInterface } from "../src/interface";

interface IState{
    list: AlmacenInterface[];
}

export default function Almacen (){
   
    
    
    const {isOpen, toggle} = useModal();
    return(
        <>
            <div style={{ width: "550px", height: "40px", float: "right"}} className="input-group mb-3">
                <input type="text" style={{height: "35px", marginTop: "8px"}} className="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="button-addon2"></input>
                <div style={{fontSize: "30px", fontStyle: "normal"}}className="navbar-brand text-white align-bottom">  
                    <img style={{marginRight: "3px"}} className="input-group-appened"/>
                    <button className="btn btn-primary" type="button" id="button-addon2">Button</button>
                    <button style={{marginLeft: "10px", marginRight: "10px", width: "110px"}} type="button" className="btn btn-primary" id="Agregar"  onClick={toggle}>Agregar</button>
                </div>
                
                
            </div>
            
            <Modal isOpen={isOpen} toggle={toggle}></Modal>
           <div>
                <table className="table table-striped table-bordered" style={{borderCollapse: "collapse"}}>
                    <thead style={{borderBottomWidth: "3px", borderBottomColor: "black"}}>
                        <tr>
                            <th>
                                <span className="custom-checkbox">
                                    <input type="checkbox" id="selectAll"></input>
                                    <label htmlFor="selectAll"></label>
                                </span>
                            </th>
                            <th scope="col">#</th>
                            <th scope="col" className="col-md-8">Almacen</th>
                            <th scope="col">Opciones</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {}
                            <td>    
                                <span className="custom-checkbox">
                                    <input type="checkbox" id="checkbox1" value="1"></input>
                                    <label htmlFor="checkbox1"></label>
                                </span>
                            </td>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>
                                <a style={{marginRight: "5px",textDecoration: "none"}} href="#verAlmacenModal" className="ver"  data-toggle="modal">Ver</a>
                                <a style={{textDecoration: "none", marginRight: "5px"}} data-target="#exampleModal" href="#exampleModal" onClick={toggle} className="edi" data-toggle="modal"> Editar</a>
                                <a style={{textDecoration: "none"}} href="#eliminarAlmacenModal" className="delete" data-toggle="modal"> Eliminar</a>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>    
                                <span className="custom-checkbox"> 
                                    <input type="checkbox" id="checkbox2" value="2"></input>
                                    <label htmlFor="checkbox2"></label>
                                </span>
                            </td>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>
                                <a style={{marginRight: "5px",textDecoration: "none"}} href="#verAlmacenModal" className="ver" data-toggle="modal">Ver</a>
                                <a style={{textDecoration: "none", marginRight: "5px"}} href="#editarAlmacenModal" className="edi" data-toggle="modal">Editar</a>
                                <a style={{textDecoration: "none"}} href="#eliminarAlmacenModal" className="delete" data-toggle="modal"> Eliminar</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
           </div>

        </>
    )
}




/*<nav className="menu-nav">
                   
                   <img src="https://dev.azure.com/becario-msw/018eeb21-b398-42ed-bcf2-b4156ea9266b/_apis/git/repositories/31fd6618-2984-417f-9b69-2792627a14d8/Items?path=/.attachments/diamanteAleante-9e8a9255-aeb3-4e0a-bee1-12f53d6a5a31.ico&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster" width="130px" height="140px" ></img> 
                   <p className="text">ALEANTE</p>
               </nav>
               
               <div class="input-group">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control"></input>
                    <label class="form-label" for="form1">Search</label>
                </div>
                <button type="button" class="btn btn-primary">
                    <i class="fas fa-search"></i>
                </button>

            
                </div>
            
<input type="image" src="https://bit.ly/3i38DsL" style={{border: "double", height: "40px", width: "40px"}}></input>


//////////////////////////////////////////////////
                 <nav className="navbar navbar-expand navbar-light bg-black">
                
                <a style={{fontSize: "30px", fontStyle: "normal"}}className="navbar-brand text-white align-bottom"  href="#" >  
                    <img style={{marginRight: "5px"}}className="img-fluid" src="https://dev.azure.com/becario-msw/018eeb21-b398-42ed-bcf2-b4156ea9266b/_apis/git/repositories/31fd6618-2984-417f-9b69-2792627a14d8/Items?path=/.attachments/diamanteAleante-9e8a9255-aeb3-4e0a-bee1-12f53d6a5a31.ico&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster" width="50" height="50" ></img>                 
                    ALEANTE
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
           

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link text-secondary" href="#">Home</a>
                        <a className="nav-item nav-link activate text-white" href="#">Almacen</a>
                        <a className="nav-item nav-link text-secondary" href="#">Proveedor</a>
                        <a className="nav-item nav-link text-secondary" href="#">Area</a>
                        <a className="nav-item nav-link text-secondary" href="#">Trabajador</a>
                        <a className="nav-item nav-link text-secondary" href="#">Articulos</a>
                        <a className="nav-item nav-link text-secondary" href="#">Remision</a>
                    </div>
                    
                </div>
            </nav>
            <br></br><br></br>
            <div style={{ width: "550px", height: "40px", float: "right"}} className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="button-addon2"></input>
                <div style={{fontSize: "30px", fontStyle: "normal"}}className="navbar-brand text-white align-bottom">  
                    <img style={{marginRight: "3px"}} className="input-group-appened"/>
                    <button className="btn btn-primary" type="button" id="button-addon2">Button</button>
                    <button style={{marginLeft: "10px"}} type="button" className="btn btn-primary" id="button-addon2">Agregar</button>
                </div>
                
            </div>
            
            */