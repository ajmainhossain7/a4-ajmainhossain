1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    Ans :  getElementById() selects a single element using a specific id and returns only one element, getElementsByClassName() selects all elements with a specific class name and returns a live collection (meaning it updates automatically when the DOM changes), querySelector() uses a CSS selector to return the first matching element, and querySelectorAll() uses a CSS selector to return all matching elements but returns a static collection and it does not update automatically. We can use forEach() in querySelectorAll().querySelector methods are more flexible because they support full CSS selectors.

2. How do you create and insert a new element into the DOM?

   Ans :  In JavaScript, we use the document.createElement() method to create a new HTML element dynamically. After creating the element, we can add text or HTML content to it using properties like innerText (for plain text) or innerHTML (for HTML content). Finally, to inside a element in the DOM, we use methods such as appendChild() or append().

   -Example: 
       
       const div = document.createElement("div");
       div.innerText = "Hello World";
       document.body.appendChild(div);

3. What is Event Bubbling? And how does it work?

    Ans :  Event bubbling is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements.(parent → grandparent → body → document)
Example: If a button inside a div is clicked, the first button handler runs, then div handler runs.(button → div)


4. What is Event Delegation in JavaScript? Why is it useful?

    Ans :  Event Delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received. The useful things are that fewer event listeners are required, performance is improved, and dynamic elements can be handled.


5. What is the difference between preventDefault() and stopPropagation() methods?

    Ans :  event.preventDefault() stops the browser's default behavior for a specific event, while event.stopPropagation() stops the event from propagating through the DOM tree to parent or child elements.

       