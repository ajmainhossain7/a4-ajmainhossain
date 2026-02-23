1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:  getElementById() selects a single element using a specific id and returns only one element, getElementsByClassName() selects all elements with a specific class name and returns a live collection (meaning it updates automatically when the DOM changes), querySelector() uses a CSS selector to return the first matching element, and querySelectorAll() uses a CSS selector to return all matching elements but returns a static collection and it does not update automatically.We can use forEach() in querySelectorAll().querySelector methods are more flexible because they support full CSS selectors.

2. How do you create and insert a new element into the DOM?

Ans: In JavaScript, we use the document.createElement() method to create a new HTML element dynamically. After creating the element, we can add text or HTML content to it using properties like innerText (for plain text) or innerHTML (for HTML content). Finally, to inside a element in the DOM, we use methods such as appendChild() or append().
Example: const div = document.createElement("div");
         div.innerText = "Hello World";
         document.body.appendChild(div);