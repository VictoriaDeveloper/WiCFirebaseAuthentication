# WiC Firebase Authentication Workshop

On October 3rd, 2024 I attended an event hosted by Women in Computer Science at UCSD. The event was a technical workshop called "Firebase Authentication Workshop." The goal of the workshop is to learn how to implement authentication signup/login system using Firebase. This was achieved through the workshop leader leading us through the Firebase Authentication SDK documentation & implementing it using a provided template repository via GitHub.

After the event I decided to do more research on Firebase & reflect on my code. My findings proved to be really interesting. For starters I wanted to make a connection to microservices because the first time I heard the term was from a Udemy course called "React Front to Back" by Brad Traversy. After discussing with ChatGPT 40 I was able to confirm that the Firebase Authentication Software Developer Kit is a microservice. This sparked me to grasp for a deeper understanding of the relationship between the Firebase Authentication SDK & Firebase. As a result, I learned that Firebase is an ecosystem that provides, manages, & integrates microservices.

Furthermore, while I was reflecting & commenting my code I was curious about getAuth() & the Auth object from the Firebase Authentication SDK. What I discovered was that the auth object is a singleton as part of the Singleton Pattern used by the Firebase Authentication & it's job is to represent the current authentication state and provide API methods to use the Firebase Authentication microservice.

In conclusion, I was able to learn how to use the Firebase Authentication SDK to implement an authentication signup/login system.

Link to Dev.to post https://dev.to/victoriadeveloper/wic-firebase-authentication-workshop-10m3
