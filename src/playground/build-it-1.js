console.log("MADA FAKA");

class Details extends React.Component {
    constructor(props){
        super(props);
        this.showDetails = this.showDetails.bind(this);
        this.state = {
            visibility: false
        };
    }

    showDetails(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility app</h1>
                <button onClick={this.showDetails}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && <p>Details</p>}
            </div>
        );
    }
}

ReactDOM.render(<Details />, document.getElementById("app"));










// let visibility = false;
// const visible = {
//     Title: "Visibility",
//     Details: "These are the details"
// };

// const showDetails = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>{visible.Title}</h1>
//             <button onClick={showDetails}>{ visibility ? "Hide Details" : "Show Details"}</button>
//             {visibility && <p>{visible.Details}</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };


// const appRoot = document.getElementById("app");

// render();