import React from "react";

const Blogs = () => {
  return (
    <div className="w-[80%] mx-auto my-20">
      <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x bg-gray-900 text-gray-100 divide-gray-700">
        <div className="flex flex-1 flex-col p-4 border-l-8 border-green-600">
          <span className="text-2xl">
            What are the different ways to manage a state in a React application?
          </span>
          <span className="text-lg mt-3 dark:text-gray-400">
            A state of React application is manageable some different ways. There are Four Kinds of
            React State to Manage Local state. Global state. Server state. URL state.
          </span>
        </div>
      </div>
      <div className="flex shadow-md gap-6 my-10 rounded-lg overflow-hidden divide-x bg-gray-900 text-gray-100 divide-gray-700">
        <div className="flex flex-1 flex-col p-4 border-l-8 border-green-600">
          <span className="text-2xl">How does prototypical inheritance work? </span>
          <span className="text-lg mt-3 text-justify dark:text-gray-400">
            The Prototypal Inheritance is a feature in javascript used to add methods and properties
            in objects. It is a method by which an object can inherit the properties and methods of
            another object. Traditionally, in order to get and set the prototype of an object, we
            use Object. getPrototypeOf and Object.
          </span>
        </div>
      </div>
      <div className="flex shadow-md gap-6 my-10 rounded-lg overflow-hidden divide-x bg-gray-900 text-gray-100 divide-gray-700">
        <div className="flex flex-1 flex-col p-4 border-l-8 border-green-600">
          <span className="text-2xl">What is a unit test? Why should we write unit tests? </span>
          <span className="text-lg mt-3 text-justify dark:text-gray-400">
            Unit Testing is a type of software testing where individual units or components of a
            software are tested. The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an important step in the
            development process, because if done correctly, it can help detect early flaws in code
            which may be more difficult to find in later testing stages.
          </span>
        </div>
      </div>
      <div className="flex shadow-md gap-6 my-10 rounded-lg overflow-hidden divide-x bg-gray-900 text-gray-100 divide-gray-700">
        <div className="flex flex-1 flex-col p-4 border-l-8 border-green-600">
          <span className="text-2xl">React vs Angular vs Vue? </span>
          <span className="text-lg mt-3 text-justify dark:text-gray-400">
            Both - Angular JS and React JS frameworks are used to create web interfaces for front
            end development. Angular is Google's matured and advanced JavaScript framework based on
            TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework
            created by Evan You
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
