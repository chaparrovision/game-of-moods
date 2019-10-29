import * as React from 'react';
import Axios from 'axios';
//import { async } from 'q';
export interface IGameProps {}
export interface IGameState{
    mood: string,
    statement: string;
}
export default class Game extends React.Component<IGameProps, IGameState>{
    constructor(props: IGameProps) {
        super(props);
        this.state = {
            mood: "",
            statement: ""
        };
    }

    handleClick() {
        const moodUrl = `https://scarlet-db-01.herokuapp.com/api/v1/mood`;
        const statementUrl = `https://scarlet-db-01.herokuapp.com/api/v1/statement`;
        let mood = "";
        let statement = "";

        Axios({
            method: "get",
            url: moodUrl
        })
            .then(async res=> {
                let index = Math.floor(Math.random() * res.data.length);
                console.log(`mood index: ${index}`);
                this.setState({
                    mood: await res.data[index].mood
                })
                return res.data;
            })
            .catch(err => {
                return err;
            });

        Axios({
            method: 'get',
            url: statementUrl
        })
            .then(async res => {
                let index = Math.floor(Math.random() * res.data.length);
                console.log(`statement index: ${index}`);
                this.setState({
                    statement: await res.data[index].statement
                });
                return res.data;
            })

            .catch(err => {
                return err;
            });

    }

    public render(){
        return(
            <div className="page row" id="add-page">
                {/*<div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2 display-inline"></div> */}
                {/* <div className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8 display-inline" id="app-bg"> */}
                    <div className="col-12" id="state-style">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"  id="prepend-style">Statement</span>
                            </div>
                            <textarea
                                className="form-control" aria-label="With textarea" value={this.state.statement} disabled>
                            </textarea>
                        </div>
                    </div>
                    <div className="col-12" id="mood-style">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="prepend-style">Mood</span>
                            </div>
                            <input
                                type="text" className="form-control" id="text-style" aria-describedby="basic-addon3"
                                value={this.state.mood}
                                disabled
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="button" className="btn btn-primary" id="generate-btn" onClick={() => this.handleClick()} >
                            Generate
                        </button>
                    </div>
                {/* </div> */}
            </div>
        )
    }
}
