Registration Form Project

A responsive and interactive registration form with real-time validation and data persistence features.


Reflection:

How did event.preventDefault() help in handling form submission?

event.preventDefault() was crucial for stopping the default form submission behavior that would refresh the page. This allowed me to implement custom validation logic and display immediate feedback to users without disrupting their interaction with the form.

What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

HTML5 validation provides basic, built-in checks that work automatically, while JavaScript validation allows for more complex custom rules and better user feedback. I used both to leverage HTML5's simplicity for fundamental requirements like email format, while using JavaScript for advanced password requirements and real-time validation messaging. It's about using the right tool for each job.

Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

I used localStorage to save the username when the form was successfully submitted and retrieve it when the page loaded, prefilling the field for returning users. The main limitation is that localStorage is accessible through browser developer tools and offers no encryption, making it completely unsuitable for passwords or personal information.

Describe a challenge you faced in implementing the real-time validation and how you solved it.

The main challenge was managing multiple validation functions and ensuring they triggered at the right times without conflicts. I solved this by carefully organizing the event listeners and validation logic, making sure each field had its own dedicated validation function that coordinated with the overall form submission process.

How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

Error messages were designed to be clear and specific, explaining exactly what needed to be fixed in straightforward language. They displayed immediately when users interacted with each field and cleared once the input met requirements, providing contextual guidance that actually helps rather than frustrates users.

Technologies Used

HTML5,  CSS3, JavaScript ES6, DOM Manipulation, Browser APIs
