import React,{Component} from "react";
import {connect} from "react-redux";
import  * as actions from "./actions/actions";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/form";
import Modal from "react-bootstrap/Modal";

class App extends React.Component{

constructor(){
    super();
    this.state = {
        status : false,
        updatePopup : false,
        insertPopup : false
    };
};


//making the get request
 componentDidMount(){
    this.props.getProducts();
  };

  showPopup = (msg)=>{
      if(msg === "update"){
          this.setState({
              status : true,
              updatePopup:true,
              insertPopup:false
          })
      }

      if(msg === "insert"){
          this.setState({
              status : true,
              insertPopup:true,
              updatePopup:false
          })
      };
      
      
  };
//delete request
  deleteProduct = (p_id)=>{
      this.props.deleteProduct(p_id);
  };

  closePopup = ()=>{
        this.setState({
            status : false,
            insertPopup : false,
            updatePopup : false
        })
  };

  save = ()=>{
      if(this.state.updatePopup){
        
        this.props.updateProduct({"p_id":this.refs.p_id.value,
                                "p_name":this.refs.p_name.value,
                                "p_cost":this.refs.p_cost.value});
      }else if(this.state.insertPopup){
        this.props.addProduct({"p_id":this.refs.p_id.value,
                                  "p_name":this.refs.p_name.value,
                                  "p_cost":this.refs.p_cost.value});
        }
      this.closePopup();

  };



  render(){
      return(
        <Container  fluid  className="mt-5">
            <Button className="float-right" onClick={ ()=>{this.showPopup("insert") }}>
                Add<i className="fas fa-plus"></i>
            </Button>
                
                {/**********modal popu code ***************/}
                <Modal show={this.state.status}
                       onHide={this.closePopup}
                       size="sm"
                       centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add/Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>P_ID</Form.Label>
                                <Form.Control type="number"
                                              placeholder="p id"
                                              ref="p_id"></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>P_NAME</Form.Label>
                                <Form.Control type="text"
                                              placeholder="product name"
                                              ref="p_name"></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>P_COST</Form.Label>
                                <Form.Control type="number"
                                              placeholder="product cost"
                                              ref="p_cost"></Form.Control>
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                         <Button variant="success" onClick={()=>{this.save()}}>Add/Update</Button>
                         <Button variant="danger" onClick={this.closePopup}>Close</Button>
                    </Modal.Footer>
                </Modal>
        
        
            <Table bordered
                   hover
                   striped
                   size="sm"
                   variant="dark">
                  <thead>
                      <tr>
                         <th>SNO</th>
                         <th>P_ID</th>
                         <th>P_NAME</th>
                         <th>P_COST</th>
                         <th>EDIT</th>
                         <th>DELETE</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.props.data.map((element,index)=>(
                          <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.p_id}</td>
                            <td>{element.p_name}</td>
                            <td>{element.p_cost}</td>
                            <td><i className="fas fa-edit" onClick={()=>{this.showPopup("update")}}></i></td>
                            <td><i className="fas fa-trash-alt" 
                                 onClick={ ()=>{this.deleteProduct(element.p_id)} }></i></td>
                          </tr>
                      ))}
                  </tbody>
            </Table>
        </Container>
      )

  }

}
const receive=(state)=>{
    
    if(state.hasOwnProperty("status")){
        if(state.status.update === "success"){
            state.data.forEach((element,index)=>{
                if(element.p_id == state.status.record.p_id){
                    element.p_name = state.status.record.p_name;
                    element.p_cost = state.status.record.p_cost;
                }
            });
            
        };
        
        if(state.status.delete === "success"){
            let id = state.data.findIndex((element,index)=>{
                return element.p_id === state.status.p_id;
            })
            state.data.splice(id,1);
        }
        if(state.status.insert === "success"){
            state.data.push(state.status.record);
        }

    }
   
    return{
        data:state.data,
        status : state.status
    }
}
const send=(dispatch)=>{
    return{
      getProducts:()=>{ dispatch(actions.getProducts()) },
      deleteProduct : (id)=>{ dispatch(actions.deleteProduct({"p_id":id})) },
      addProduct : (record)=>{ dispatch(actions.addProduct(record)) },
      updateProduct : (record)=>{ dispatch(actions.updateProduct(record)) }
    }
}
export default connect(receive,send)(App);