import * as React from 'react';
import Axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';

//Create and export a new interface called IAddState
export interface IAddState {
    addTo: string;
    addVal: string;
    //message: string;
}

//Create and export a new class called Add, which extends React.Component
export default class Add extends React.Component<any, IAddState>{
    constructor(props: any){
        super(props);
        this.state = {
            addTo: "",
            addVal: ""
            //message: ""
        };
    }
//Updates the state
    updateState(e: any) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    handleClick() {
        let data = 
            this.state.addTo === "statement"
            ? {statement: this.state.addVal}
            : {mood: this.state.addVal};

        const url = ` https://scarlet-db-01.herokuapp.com/api/v1/${this.state.addTo}`;

        Axios({
            method:"post",
            url: url,
            data: data
        })
        .then(response => {
            if (response.status === 200) {
               //console.log("Successful input dudes!");
               toast.success("Your mood or statement has been added to the Game of Moods.", {
                   position: toast.POSITION.TOP_CENTER
               });
            }
        })
    }

    public render() {
        return(
            <div className="page row" id="add-page-b">
                {/*<div className="col-1 col-sm-1 col-md-2 col-lg-3 col-xl-3 display-inline"></div> */}
                {/*<div className="col-10 col-sm-10 col-md-8 col-lg-6 col-xl-6 display-inline" id="app-bg"> */}
                    <form id="new-form">
                        <div className="col-12" id="add-input">
                            <div className="col-12">
                                <input className="form-control mb-2"
                                    type="text"
                                    name="addVal"
                                    id="inlineFormInput"
                                    placeholder="Enter Mood or Statement here:"
                                    onChange={(e:any) => this.updateState(e)}
                                    />
                            </div>
                        </div>
                        <div className="btn-group col-12" role="group" id="select-submit">
                            <select className="custom-select" name="addTo"
                                    id="post-type" onChange={(e: any) => this.updateState(e)}>
                                <option>Choose between Mood or Statement...</option>
                                <option value="mood">Mood</option>
                                <option value="statement">Statement</option>
                            </select>                          
                        </div><br />
                        <button type="button" id="mood-btn" className="btn btn-primary form-control col-3"
                                    onClick={() => this.handleClick()}>
                                Submit
                         </button>
                    </form>
                    <div><ToastContainer className={"toaster"} autoClose={3500} /></div>
                {/*</div> Sunday, put the line of code here*/}
                
            </div>
        );
    }
}