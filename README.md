## Purpose:

Build a small product list with searchbar and a demonstrate React and JavaScript/TypeScript fundamentals.

Time
~60 minutes

### Tech

_React (with or without TypeScript)_

Optional: Tailwind or Material UI (or plain CSS)

### What to build

1. Render a list of products from this service: https://fakestoreapi.com/products at "/products".
2. Search by product name.
3. Create a detail page with a description and an image at "/products/:id".

### Submission

Share a StackBlitz/CodeSandbox link or a public GitHub repo with brief notes (what you implemented and trade‑offs).

### Notes

1. You may use Google/AI, but be ready to explain your code and choices.
2. API Docs if you need it: https://fakestoreapi.com/docs


### Additional Notes

- I decided to focus on fetching the data first and take care of the UI changes once I've made sure the API was well integrated with the App. 

- To optimize development time, I  chose to implement Tanstack React-Query to handle API fetching, using query function helpers. 

- I implemmented a simple debounced keystroke client-side filter for the products. 

- I created a Product domain model class that encapsulates product data with private fields and getter methods, providing a clear, immutable interface for accessing product properties.
This approach improves type safety, enforces data consistency, and separates raw API data (ProductDTO) from the app’s domain logic.