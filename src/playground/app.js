class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

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

    handleDeleteOptions(){
        this.setState( () => {
            return{
                options: []
            };
        });
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => {
            return{
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option ;
                })   
            };
            })
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOptions(option){
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
    }

    render(){
        const subtitle = "Put your life in the hands of a computer";
        return(
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOptions={this.handleAddOptions}/>
            </div>
        );
    }
}


const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: "Indecision"
};

// class Header extends React.Component{
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I Do?</button>
        </div>
    );
};

// class Action extends React.Component{
//     render(){
//         return (
//             <div>
//                 <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I Do?</button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please enter an option to get started!</p>}
        {
            props.options.map((option) => (
                <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }         
        </div>
    );
};

// class Options extends React.Component{
//     render(){
//         return (
//             <div>
//             {
//                 this.props.options.map((option) => <Option key={option} optionText={option}/>)
//             }
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button 
                onClick={(e)=>{
                    props.handleDeleteOption(props.optionText)
                }}
            >
                Remove
            </button>
        </div>
    );
};

// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option);
        

        this.setState(()=>{
            return {
                error: error
            };
        });

        if(!error){
            e.target.elements.option.value = "";
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


//stateless functional component

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));