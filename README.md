# TASK 
Implement a code that will look for the top 10 results in the Wikipedia API (sample query: https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=%22Liverpool%22&srlimit=10)

## Requirements:
- The view should contain the “search phrase” input field, “replace with” input field and three buttons: search, replace, replace all.
- Results should be displayed as a list and should include result title and snipped fields.
- Search matches within each result snipped should be highlighted.
- The request should be invoked on search button click and while typing in search field (not on every key pressed)
- Replace should replace the first highlighted search match with a phrase taken from “replace with” field.
- Replace all should replace every highlighted search match.
- Allowed technologies: React  

# Scripts
  Run with `yarn start`
# To do:

- `const variables` organization in `.env` file (like `API_ROOT` etc.)
- Better styles
- Better `useFetch` custom hook with `React.useReducer()`
- App profiling to make optimisations
- More types with `Flow`
