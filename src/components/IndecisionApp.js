import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";


class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteSelect = () => {
        this.setState(()=>{
            return{
                selectedOption: undefined
            };
        });
    }

    handleDeleteOptions = () => {
        this.setState( () => {
            return{
                options: []
            };
        });
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => {
            return{
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option ;
                })   
            };
            })
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>{
            return {
                selectedOption: option
            };
        });
    };

    handleAddOptions = (option) => {
        if(!option){
            return "invalid input";
        }
        else 
        if(this.state.options.indexOf(option) > -1){
            return "already exists";
        }
        this.setState((prevState)=>{
            return {
                options: prevState.options.concat(option)
            };
        });
    };
    
    //LifeCycle Functions
    componentDidMount(){
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
    
            if(options){ // set state only if options is not null, otherwise use the default value of empty array 
                this.setState(() => {
                    return {
                        options: options
                    };
                });
            }
        }
        catch(e){
            //do nothing, if some faulty json object is passed, catch that error and do nothing with it, let default value be stored
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    componentWillUnmount(){
        console.log("Unmounting");
    }

    

    render(){
        const subtitle = "Put your life in the hands of a computer";
        return(
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions={this.handleDeleteOptions} 
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOptions={this.handleAddOptions}/>
                    </div>
                </div>  
                <OptionModal selectedOption={this.state.selectedOption} handleDeleteSelect={this.handleDeleteSelect}/>
            </div>
        );
    }
}

export default IndecisionApp;