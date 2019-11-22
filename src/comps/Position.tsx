//This class is not used.
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
 
 class App extends Component {
    notifyA = () => toast('Wow so easy !', {containerId: 'A'});
    notifyB = () => toast('Wow so easy !', {containerId: 'B'});
 
    render(){
      return (
        <div>
            <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_LEFT} />
            <ToastContainer enableMultiContainer containerId={'B'} position={toast.POSITION.TOP_RIGHT} />
     
            <button onClick={this.notifyA}>Notify A !</button>
            <button onClick={this.notifyB}>Notify B !</button>          
        </div>
      );
    }
  }
 