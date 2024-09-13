# swivl-test-task - GitHub Users Search Tool
 This is a test assignment for the Frontend Developer role at Swivl

# Requirements
You need to create a GitHub users search tool. 
On the main page there should be an input field where you need to enter a username. 
Below should be a filtered list of users. 
There should be an implementation of pagination (infinite scroll). 

Clicking on a row should open the user&#39;s page with additional information about him:
 - avatar image, 
 - name, 
 - followers, 
 - following, 
 - company, 
 - email, 
 - blog

This project should be written using React and Typescript.
We would also appreciate the use of any state management and UI libraries.

REST API doc: https://docs.github.com/en/rest
Graphql API doc: https://api.github.com/graphql

# Implementation
The project utilizes React and Typescript, enabling users to conveniently search for other people on GitHub by providing their login or name. Users are loaded infinitely until there are no new results available. Each user has its details page where one can see their profile details, top repositories, blog, followers, and following. Followers and following are likewise loaded infinitely until exhausted.

# Features
- **Searching**: On the main page, a search input can be utilized for searching users. The list properly handles loading and no result states.
- **Detailed view**: By clicking on the search result one can view the available user&#39;s profile details such as:
	- Avatar
	- Login
	- Name
	- Company
	- Date of registration
	- Location
	- Email
	- Blog page
	- Followers & Following
	- Top repositories **(additional functionality)**
- **Infinite loading**: All lists are infinitely loaded in chunks until exhaused, providing a seamless user experience.
- **Localization**: The application is localized for English and Ukrainian **(additional functionality)**

# Tech Stack
- React
- TypeScript
- GraphQL
- Apollo Client
- Mantine
- Vite

# Setting up the project
1. Clone the repository via `git clone <url>` and open it.
2. In the root folder create `.env` file with the contents of `.env.example` file. Make sure to replace the `github-token` with your actual GitHub PAT.
3. Install dependencies via `yarn install`
4. Run the project via `yarn dev`
