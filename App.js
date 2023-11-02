const headingReact = React.createElement("h1", {
    id: "headingReact"
}, "Hello World by React");

const nestedReact = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "Example of Nested React Elements - Child 1"),
        React.createElement("h2", {}, "Sibling 1")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "Example of Nested React Elements - Child 2"),
        React.createElement("h2", {}, "Sibling 2")
    ])
]);

console.log(nestedReact);
const rootReact = ReactDOM.createRoot(document.getElementById("root_react"));
const rootReactNested = ReactDOM.createRoot(document.getElementById("root_react_nested"));

rootReact.render(headingReact);
rootReactNested.render(nestedReact);
