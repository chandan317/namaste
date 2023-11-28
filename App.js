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
// --------------------------------------------------

// creating nested React element
// import React from "react";
// import ReactDOM from "react-dom/client";
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "This is namaste react🚀"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
// ]);
// // create react using createRoot
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // passing react element inside Root;

// root.render(parent);
import React from "react";
import ReactDOM from "react-dom/client";

// core react
const heading = React.createElement("h1", { id: "hello" }, "namaste react 🚀");

// console.log(heading);
// root.render(heading);

// jsx --  html like syntax

// jsx(transpiled before it reaches the js) - parcel - babel

// const jsxHeading = <h1 id="helll"> Namaste react using JSX 🚀 </h1>;
// console.log(jsxHeading);

// react element
const jsx = (
  <h2 className="ro" tabIndex="2">
    namaste react jsx
  </h2>
);

// React Component

// class based component - old WAY

// functional component - NEW WAY

const HeadingComponent = () => {
  return (
    <div>
      <h1>Namaste react functional components</h1>
      <h2>fun compononents is a js function which return some jsx code </h2>
      <h2> namaste component should be start with capital</h2>
      <h3>component should be sent to render within angular brackets</h3>
    </div>
  );
};
const SearchBar = () => {
  return (
    <>
      <h2> I'm Search component i'm using normally arrow function </h2>
      <h2>
        Functional component is javascript function whichn return some jsx code
      </h2>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SearchBar />);
