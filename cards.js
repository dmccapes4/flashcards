

document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    [
      "Arrays",
      "Determine whether an integer is a palindrome. Do this without extra space.",
      "Return false if the integer is negative. Write another function to reverse the integer using modulo and dividing by 10. Check if the reverse is equal to the number.",
      "http://res.cloudinary.com/mccapes-construction/image/upload/v1521836571/integerpalindrome_bek2rg.png"
    ],
    [
      "Arrays",
      "Given a 32-bit signed integer, reverse digits of an integer.",
      "Assign an integer to check for negativity. Set x to absolute power. add x modulo 10 to array and divide x by 10 till x=0. Reverse the array and loop through it adding the element times 10 to the power of i. Check that the number is still a 32 bit signed integer and return it.",
      "http://res.cloudinary.com/mccapes-construction/image/upload/v1521836670/reverseinteger_l1itlt.png"
    ],
    [
      "Arrays",
      "How do you rotate a matrix 90 degrees in place?",
      "Take it's transpose using map twice then reverse each row.",
      "http://res.cloudinary.com/mccapes-construction/image/upload/v1521837172/rotateimage_sayoxo.png"
    ],
    [
      "Arrays",
      "Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.",
      "Define a boolean oneOff. Cycle through the sequence. Check if the current number is greater than the next number. Return false if the previous number is less than the current number. If oneOff is already true return false. Otherwise set oneOff to true and check if the previous element is greater than or equal to the next element. If so return true if you're at the end of the sequence.",
      "http://res.cloudinary.com/mccapes-construction/image/upload/v1521837322/almostincreasingsequence_lyqiw2.png"
    ],
    [
      "Arrays",
      "Given an array find the first duplicate. That is the first second occurence of an element",
      "Make a hash to keep track of the occurence of elements. Return the first element with count=2.",
      "http://res.cloudinary.com/mccapes-construction/image/upload/v1521837390/firstduplicate_g0zam7.png"
    ],
    [
      "Arrays",
      "Given a string, find and return the first instance of a non-repeating character in it.",
      "Use a hash to store the count of different characters then run through the string again to return the first character that has count=1",
      "http://res.cloudinary.com/mccapes-construction/image/upload/v1521837455/firstnotrepeatingcharacter_xgq4cl.png"
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
      "http://res.cloudinary.com/mccapes-construction/image/upload/v1521833449/commonCharacterCount_dkwxic.png"
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
  for (let i = 0; i < subjects.length; i++) {
    let item = document.createElement("div")

    let button = document.createElement("button")
    button.innerHTML = subjects[i]

    // Clicking button brings up content
    button.addEventListener("click", () => {
      while (content.firstChild) content.removeChild(content.firstChild)

      // Filter cards by subject
      let subjectCards = cards.filter(card => card[0] === subjects[i])

      // Select a random card from subject
      let randomIndex = parseInt(Math.floor(Math.random() * subjectCards.length))
      let card = subjectCards[randomIndex]

      // Display question
      let question = document.createElement("h3")
      question.innerHTML = card[1]

      // Add question to content
      content.appendChild(question)

      // Display placeholder for solution
      let answer = document.createElement("p")
      answer.class = "solution"
      answer.innerHTML = "Solution"

      // Code element will hold an image of the solution code
      let code = document.createElement("div")

      // Clicking 'solution' prints the solution and code image
      answer.addEventListener("click", () => {
        answer.innerHTML = card[2]

        // Image element holds code image
        let image = document.createElement("img")
        image.setAttribute("src", card[3])
        code.appendChild(image)
      })

      // Add answer and code to content
      content.appendChild(answer)
      content.appendChild(code)
    })

    // Add button to item
    item.appendChild(button)
    // Add item to list
    list.appendChild(item)
  }

})
