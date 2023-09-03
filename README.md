# Trello 2.0 _(A GPT powered clone)_

This is a fully functional **Trello Clone** written in **NextJS-TypeScript** using frameworks like **TailwindCSS, Zustand, Appwrite Cloud (Database)**, and also the **GPT-4 model** to summarize your daily ToDos. The webapp if fully _**responsive**_, with built-in _**drag-n-drop**_ functionality to reflect the actual working of Trello. There is also additional functionality to _**upload**_ task related _**images**_ seamlessly in addition to a search bar that helps _**filter**_ tasks from all three categories based on the search query!

The website looks something like this:

![App Screenshot](https://github.com/aryan-mehta05/Images-for-projects/blob/main/trello-clone/Trello-website-screenshot.png?raw=true)

To make this project your own, follow the steps below.

1. You can either download the zipped folder or clone this repository into your new project folder.

   To clone this repository, run the following command:
   
   `git clone https://github.com/aryan-mehta05/trello-clone.git`

2. Next, install all the dependencies for this project using npm or yarn.

   `npm install` **OR** `yarn install`

3. ***This is the most important step.***
   
   Make an account on **(a) Appwrite** and **(b) OpenAI** to use the database and GPT APIs respectively.

   After that is done, you need to configure 4 local environment variables in a _new file_ named, <br>
   `.env.local`

   After this, configure the following 4 variables with your respective credentials: <br>

      1. NEXT_PUBLIC_APPWRITE_PROJECT_ID
      2. NEXT_PUBLIC_DATABASE_ID
      3. NEXT_PUBLIC_TODOS_COLLECTION_ID
      4. OPENAI_API_KEY

4. Finally, once all these things have been set up, you can run this project with,
   
   `npm run dev`

   This will start a server on the default port of _**3000**_.

### Post Note
If this is not the case for you, then check which port your project is running on and enter this link in your browser to see your project run (http://localhost:<your_port_number>)

## CHEERS! ENJOY YOUR BUILD!🍺✨