

document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    [
      "Arrays",
      "Determine whether an integer is a palindrome. Do this without extra space.",
      "Return false if the integer is negative. Write another function to reverse the integer using modulo and dividing by 10. Check if the reverse is equal to the number.",
      "./images/integerpalindrome.png"
    ],
    [
      "Arrays",
      "Given a 32-bit signed integer, reverse digits of an integer.",
      "Assign an integer to check for negativity. Set x to absolute power. add x modulo 10 to array and divide x by 10 till x=0. Reverse the array and loop through it adding the element times 10 to the power of i. Check that the number is still a 32 bit signed integer and return it.",
      "./images/reverseinteger.png"
    ],
    [
      "Arrays",
      "How do you rotate a matrix 90 degrees in place?",
      "Take it's transpose using map twice then reverse each row.",
      "./images/rotateimage.png"
    ],
    [
      "Arrays",
      "Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.",
      "Define a boolean oneOff. Cycle through the sequence. Check if the current number is greater than the next number. Return false if the previous number is less than the current number. If oneOff is already true return false. Otherwise set oneOff to true and check if the previous element is greater than or equal to the next element. If so return true if you're at the end of the sequence.",
      "./images/almostincreasingsequence.png"
    ],
    [
      "Arrays",
      "Given an array find the first duplicate. That is the first second occurence of an element",
      "Make a hash to keep track of the occurence of elements. Return the first element with count=2.",
      "./images/firstduplicate.png"
    ],
    [
      "Strings",
      "Given a string, find and return the first instance of a non-repeating character in it.",
      "Use a hash to store the count of different characters then run through the string again to return the first character that has count=1",
      "./images/firstnotrepeatingcharacter.png"
    ],
    [
      "Graphs",
      "What is a graph?",
      "A graph is a pair of sets (V, E), where V is the set of vertices and E is the set of edges.",
      ""
    ],
    [
      "Graphs",
      "What is a vertex?",
      "Each node of a graph is represented as a vertex.",
      ""
    ],
    [
      "Graphs",
      "What is an edge?",
      "Edge represents a path between two vertices.",
      ""
    ],
    [
      "Graphs",
      "What is adjacency?",
      "Two vertices are adjacent if they are connected by an edge.",
      ""
    ],
    [
      "Graphs",
      "What is a path?",
      "Path represents a sequence of edges between two vertices.",
      ""
    ],
    [
      "Strings",
      "Given two strings, find the number of common characters between them.",
      "Create a hash for each string to count the characters in the string. Create a counter. Loop through the keys for one to check if it's in the other and add the lower occurence of the character.",
      "./images/commoncharactercount.png"
    ],
    [
      "JavaScript",
      "Explain prototypes in JavaScript",
      "All JavaScript objects inherit properties and methods from a prototype. Object.prototype is on the top of the inheritance chain.",
      "./images/prototype.png"
    ],
    [
      "APIs",
      "What does it mean to be RESTful",
      "RESTful APIs are commonly used by browsers and companies that connect and interact with cloud services. A RESTful API breaks down a transaction to create a series of small modules which address particulat underlying parts of the transaction. All RESTful calls are stateless and can be freely deployed if something fails as well as sale to accomodate load changes.",
      "./images/restful.jpg"
    ],
    [
      "Internet",
      "List the key benefits of HTML5",
      "1: Responsive design makes it easy to create mobile ready projects \n 2: Cross browser support \n 3: Game development using <canvas> tag \n 4: Better interactions such as drag and drop and canvas \n 5: Local storage feature allows for storage across multiple windows \n 6: Video and Audio support with <video> and <audio> tags",
      ""
    ],
    [
      "CSS",
      "How do media queries work?",
      "Media queries are useful when you want to apply CSS styles depending on a device's general type (such as print vs. screen), specific characteristics (such as the width of the browser viewport), or the environment (such as as ambient light conditions).",
      ""
    ],
    ["JavaScript",
    "What is a potential pitfall with using typeof bar === 'object' to determine if bar is an object? How can this pitfall be avoided?",
    "Although tyepof bar === 'object' is effective, null is also considered an object so make sure that the object is not null as well",
    ""],
    ["JavaScript",
    "What does var a = b = 3 really mean?",
    "b = 3, var a = b, b ends up being a global variable, a is a local variable",
    ""],
    ["JavaScript",
    "What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?",
    "Popular amongst JavaScript libraries, creates a closure around the contents of the file which stops potential name clashes between different JavaScript modules and libraries",
    ""],
    ["JavaScript",
    "What is the significance, and what the the benefits, of including 'use strict' at the beginning of a JavaScript source file?",
    "'use strict' is a way to voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime. (makes debugging easier, prevents accidental globals)",
    ""],
    ["JavaScript",
    "What is NaN? What is its type? How can you reliably test if a value is equal to NaN?",
    "Not a number. ES6 has a Number.isNaN() which is probably the most reliably way to determing this.",
    ""],
    ["CSS",
    "What are CSS pseudo selectors?",
    "They define a state in a selected element that can be used to modify the style in that particular state. This is especially useful when creating user-interactive elements that provide feedback to the user (:hover)",
    ""
  ],
    ["CSS",
    "What are keyframes?",
    "They allow you to gradually change the css of a selected element from one style to another. Keyframes are utilized in animations to define the style at different times of the animation. For example, you can simply define a start and end style of an animation or go further and define what happens at the halfway point of the animation using keyframes",
    ""
  ],
  ["CSS",
   "What is a CSS preprocessor? Could you give one example? What is the benefit of using one?",
   "A CSS preprocessor extends standard CSS with quite a few assets that make styling definitions more streamline and resuable. One example is SASS. Since classing CSS is fairly limited in what it can offer with regards to syntax and definining styles, SASS allows you to add variable declarations, nested styling, etc",
   ""
 ],
  ["JavaScript",
  "What are the advantages of using JavaScript?",
  "Lightweight: JavaScript can be executed within the user's browser/doesn't need to talk to backend, opens the door to many other UI/UX optimizations",
  ""],
  ["JavaScript",
  "What are the disadvantages of using JavaScript?",
  "Main weakness is security! Aldo its versatility can lead to inconsistent performance across different platforms.",
  ""
],
  ["JavaScript",
  "Explain the difference between classical inheritance and prototypal inheritance.",
  "Classical: A constructor function instantiates an instance via the 'new' keyword. This new instance inherits properties from parent class, Prototypal Inheritance: An instance is created by cloning na existing object that serves as a prototype(Usually created through a factory method(can have selective inheritance from many different objects))",
  ""],
  ["JavaScript",
  "Give an example of a time that you used functional programming in JavaScript",
  "functional purity, first-class functions, higher-order functions, or using functions as arguments and values",
  ""
],
  ["JavaScript",
  "Give an example of a time that your used Prototypal OO is JavaScript.",
  "Objects linked to other objects - when and where to use prototypes, liberal use of 'Object.assign()', or mixins",
""],

["JavaScript",
"What does 3 + true print?",
"4", ""],
[
  "JavaScript",
  "What is a closure and how are they used?",
  "A closure is the combination of a function and the lexical environment within which that function was declared. Closures are useful because the let you associate some data (the lexical environment) with a function that operates on the data in a similar way to object-oriented programming. This makes closures useful for callback functions executed in response to an event such as a click.",
  ""
],
[
  "CSS",
  "Give a high level overview of how CSS grids work.",
  "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",
  ""
],
[
  "Graphs",
  "What are the steps for DFS on a graph?",
  "Start at the root and explore as far as possible along each branch before backtracking.",
  "./images/graph-dfs.jpeg"
],
[
  "Internet",
  "What happens when you hit type www.google.com and hit enter?",
  "1. Browser checks the cache for a DNS record to find the corresponding IP address of www.google.com \n 2. If requested URL is not in the cache, ISP's DNS server initiatess a DNS query to find the IP address of the server that hosts google.com. \n 3. Browser initiates a TCP connection with the server. \n 5. The browser sends a HTTP request to the web server. \n 6. The server handles the request and sends back a response. \n 7. The server sends out an HTTP response. \n 8. The browser displays the HTML content",
  "./images/whathappensgoogleenter.png"
],
[
  "JavaScript",
  "What's the event loop? How does it work?",
  "The event loop is what allows JavaScript to use callbacks and promises. JavaScript has a single call stack in which it keeps track of what function we're currently executing and what function is to be executed after that. Every time you call a setTimeout function or you do some asyn operation it is added to the Event Table. The Event Table keeps track of events and sends them to the Event Queue. The Event Queue is similar to the stack. The Event Loop is a constantly running process that checks if the call stack is empty and if it is empty it looks into the Event Queue. If there is something waiting on the Event Queue it is put back on the stack.",
  "./images/jsruntime"
],
[
  "Graphs",
  "What are the steps for BFS on a graph?",
  "Start at the tree root and explore the neighbor nodes first before moving to the next level neighbors.",
  "./images/graphbfs.jpeg"
],
[
  "Internet",
  "How does DNS work?",
  "When you enter a URL into your Web browser your DNS server uses it's resources to resolve the name into the IP address for the appropriate Web server.",
  "./images/howdnsworks.png"
],
[
  "React",
  "What lifecycle methods get called in the mounting phase? What are the use cases for each of those methods?",
  "constructor, componentWillMount, render, componentDidMount",
  "./images/reactlifecyclemounting.jpeg"
],
[
  "Graphs",
  "Explain the steps of topological sort.",
  "First find a list of 'start nodes' which have no incoming edges and insert them into a set S; at least one such node must exist in a non-empty acyclic graph. Then:",
  "./images/kahnsalgorithm.jpeg"
],
[
  "Internet",
  "What is TCP? When is it used? How does it work?",
  "Transmission Control Protocol is one of the main protocols of the Internet protocol suite. TCP provides reliable, ordered, and error-checked delivery of a stream of octets (bytes) between applications running on hosts communicating by an IP network. It is used for World Wide Web, email, remote administration and file transfer.",
  "./images/tcp.png"
],
[
  "JavaScript",
  "What's an IFFE? When would you use it?",
  "An immediately-invoked function expression executes immediately after it's created.",
  "./images/iffe.jpeg"
],
[
  "React",
  "What lifecycle methods get called in the update phase? What are the use cases for each of those methods? What method gets called in the unmounting phase?",
  "componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate",
  "./images/reactlifecycleupdate.jpeg"
],
[
  "Graphs",
  "Explain the steps of Djikstra shortest-path algorithm.",
  "define: 's'=source node; 'dist'=array of distances from the 's'; 'Q'=queue of all nodes in the graph; 'S'=an empty set. Algorithm: 1. While Q is not empty, pop the node v, that is not already in S, from Q with the smallest dist(v). 2. Add a node v to S to indicate v has been visited. 3. Update dist values of adjacent nodes of the current node v as follows: for each node u, if dist(v)+weight(u,v)<dist(u) there is a new minimal distance found for u. ;; The algorithm has visited all nodes and found the smalles distance to each node. dist now contains the shortest path from source s.",
  "./images/dijkstrasshortestpath.jpeg"
],
[
  "Internet",
  "What is UDP? When would you use it?",
  "User Datagram Protocol is one of the core members of the Internet protocol suite. UDP uses a simple connectionless communication model with a minimum of protocal mechanism. It provides checksums for data integrity and port numbers for addressing different functions at the source and destination of the datagram. UDP is suitable for purposes where error checking and correction are either not necessary or are performed in the application; UDP avoids the overhead of such processing in the protocol stack.",
  "./images/udp.jpg"
],
[
  "JavaScript",
  "== vs. ===",
  "The identity (===) operator behaves identically to the equality (==) operator except no type conversion is done, and the types must be the same to be considered equal.",
  ""
],
[
  "JavaScript",
  "What is this in JS? What are some common pitfalls with this?",
  "In most cases, the value of 'this' is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the 'bind' method to set the value of a function's 'this' regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own 'this' binding (it retains the 'this' value of the enclosing lexical context).",
  ""
],
[
  "JavaScript",
  "Describe event bubbling and capturing",
  "Bubbling: When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on it's ancestors. ;; Target: The most deeply nested element that caused the event is called a 'target' element, accessible as 'event.target'. ;; Capturing: The event going down to target (rarely used).",
  "./images/bubblingcapturing.png"
]
]


  // List element will contain a list of subjects
  const list = document.getElementById("list")

  // Content element will contain the question, answer and code
  const content = document.getElementById("content")

  // Prompt is the initial element that instructs the user to select a Subject
  const prompt = document.getElementById("prompt")
  // Clicking prompt gives further instructions
  prompt.addEventListener("click", () => {
    if (content.childNodes.length < 4) {
      const promptDetail = document.createElement("h3")
      promptDetail.innerHTML = "Subjects are listed on the left"
      content.appendChild(promptDetail)
    }
  })

  // Get the subjects from cards by reducing them into a hash and using the keys
  let subjects = cards.reduce((obj, card) => {
    if (!obj[card[0]]) obj[card[0]] = 0
    obj[card[0]]++
    return obj
  }, {})
  subjects = Object.keys(subjects)

  // Populate list with subjects
  for (let i = -1; i < subjects.length; i++) {
    let item = document.createElement("div")

    let button = document.createElement("button")
    if (i === -1) {
      button.innerHTML = "Random"
    } else {
      button.innerHTML = subjects[i]
    }

    // Clicking button brings up content
    button.addEventListener("click", () => {
      while (content.firstChild) content.removeChild(content.firstChild)

      // Filter cards by subject
      let subjectCards = cards.filter(card => card[0] === subjects[i])
      // Random is all cards
      if (subjectCards.length === 0) subjectCards = cards;

      // Select a random card from subject
      let randomIndex = parseInt(Math.floor(Math.random() * subjectCards.length))
      let card = subjectCards[randomIndex]

      // Display question
      let question = document.createElement("h3")
      question.innerHTML = card[1]

      // Add question to content
      content.appendChild(question)

      // Display placeholder for solution
      let solution = document.createElement("p")
      solution.className = "solution";
      solution.innerHTML = "Solution"
      content.appendChild(solution);
      // Code element will hold an image of the solution code
      let code = document.createElement("div")

      // Clicking 'solution' prints the solution and code image
      solution.addEventListener("click", () => {
        content.removeChild(solution);
        let answer = document.createElement("p")
        answer.innerHTML = card[2]

        // Image element holds code image
        let image = document.createElement("img")
        image.setAttribute("src", card[3])
        code.appendChild(image)
        // Add image without duplicating
        content.appendChild(answer)
        content.appendChild(code)
      })

      // Add answer and code to content

    })

    // Add button to item
    item.appendChild(button)
    // Add item to list
    list.appendChild(item)
  }

})
