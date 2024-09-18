# Repo guide
1. Next.js automatically maps the files within the src/app/ directory to routes in the application. 
- Each directory within app/ corresponds to a URL path, and each page.tsx file within those directories serves as the content for that route. 
- eg The page.tsx file located in /src/app/about/ would load when you visit /about in the browser.

2. Key Routing Folders:
	- src/app/faq/page.tsx → /faq
	- src/app/demo-day/page.tsx → /demo-day
	- src/app/hackathon/page.tsx → /hackathon
	- src/app/opening-ceremony/page.tsx → /opening-ceremony
	- src/app/workshops/page.tsx → /workshops
	- src/app/workshops/day1/page.tsx → /workshops/day1
	- src/app/workshops/day2/page.tsx → /workshops/day2
	- src/app/workshops/day3/page.tsx → /workshops/day3
	- src/app/registration/page.tsx → /registration
	- src/app/sponsors/page.tsx → /sponsors

3. Components for each page are in src/app/components/(page)

# Setting up + Running Locally
1. fork the repo [https://github.com/marcusjhang/fintech-summit]
2. git clone (URL)
3. cd fintech-summit/nextjs-frontend
4. npm install
5. npm run dev

# Github Workflow
1. git add *
2. git commit -m "(message)"
3. git push
4. make a pull request