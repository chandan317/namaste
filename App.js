//Manipulate html dom using javascript

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello from javascript";
// const root = document.getElementById("root");
// root.appendChild(heading);
// ---------------------------------------------
// Manipulate the html dom using React

// const heading = React.createElement(
//   "h1",
//   { id: "title", xyz: "abc" },
//   "Hello world from React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 *
 * <div id="parent">
 *    <div ="child">
 *        <h1>hi I'm h1 tag</h1>
 *    </div>
 * </div
 */
// ----------------------------------------------------

// create nested React element
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "i'm h1 tag")
//   )
// );
// ----------------------------------------------------

// creating nested React element

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);
// create react using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside Root;
root.render(parent);
