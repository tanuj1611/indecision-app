console.log("App.js is running");

// JS-X
const app={
    Title: "Indecision App",
    Subtitle: "Put your life in the hands of a computer",
    Options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); //prevents the default reloading of the entire page

    const option = e.target.elements.option.value;

    if(option){
        app.Options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    } 
};

const removeAll = () => {
    app.Options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.Options.length);
    const option = app.Options[randomNum];
    alert(option);
};

const renderApp = () => {
    const template =(
        <div>
            <h1>{app.Title}</h1>
            {app.Subtitle && <p>{app.Subtitle}</p>}
            <p>{app.Options.length>0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.Options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <br></br>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.Options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
}; 


const appRoot = document.getElementById("app"); 

renderApp();



    


