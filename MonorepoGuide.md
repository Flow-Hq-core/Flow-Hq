You are a senior software architect and monorepo engineer.
Your task is to convert the empty Flow-Hq repository into the main monorepo for the Flow-HQ platform.
The migration must preserve the existing functionality while restructuring the project into a scalable architecture.
Do NOT create placeholder applications that don't correspond to existing repositories. Build the structure around the existing repositories and prepare empty modules only where necessary.
Existing Repositories
Repository 1
https://github.com/RashidJK/flow-hq-build-scale
Contains:
Marketing Website
Flow Roadmaps application
Repository 2
https://github.com/RashidJK/roadmaps-to-growth
Contains:
Flow Project application
Repository 3
Flow Business AI
Not yet created
Repository 4
Flow Playlist
Not yet created
Main Repository
https://github.com/Flow-Hq-core/Flow-Hq
Currently empty.
This must become the permanent monorepo.
Goal
Create a professional Turborepo-based monorepo.
The finished architecture should look like:
Flow-Hq

apps
    marketing
    app

packages
    ui
    shared
    ai
    auth
    database
    config

docs

package.json
turbo.json
pnpm-workspace.yaml
README.md
Step 1
Initialize the monorepo.
Use:
Turborepo
pnpm workspaces
Next.js App Router
TypeScript
Tailwind
ESLint
Prettier
Configure everything properly.
Step 2
Clone both repositories into a temporary folder.
For example
temp/

flow-hq-build-scale

roadmaps-to-growth
These folders are temporary.
After migration they should not remain.
Step 3
Marketing Website
Inside
flow-hq-build-scale
identify the marketing website.
Move it into
apps/marketing
This application will become
flowhq.com
Keep:
Landing page
Pricing
About
Resources
Authentication buttons
Everything related to marketing.
Do NOT place Roadmap application code inside marketing.
Step 4
Flow Roadmaps
Inside
flow-hq-build-scale
identify the Flow Roadmaps application.
Move it into
apps/app
This becomes the SaaS application.
Do NOT rename components unnecessarily.
Keep the application functional.
This application will eventually run on
app.flowhq.com
Step 5
Flow Project
Clone
roadmaps-to-growth
This is NOT another standalone application.
Instead,
extract its functionality and integrate it into
apps/app/app/projects
The dashboard, pages, components and logic should become a module inside the main application.
Do not create another Next.js application.
Flow Project becomes a feature of the platform.
Step 6
Create future modules
Inside
apps/app/app
Create
business-ai

playlists
These should contain simple placeholder pages saying
"Coming Soon"
Do not implement functionality.
Step 7
Create Explore page
Inside
apps/app/app/explore
Create an Explore page.
It should become the central hub of Flow.
Cards:
Business Roadmaps
Business AI
Projects
Playlists
Templates
Industries
Popular
Recent
This page will connect every module.
Step 8
Dashboard
Create or update dashboard.
Navigation:
Dashboard
Explore
Roadmaps
Business AI
Projects
Playlists
Settings
Billing
Everything should use the same authentication.
Step 9
Extract Shared Components
After migration,
identify duplicated components.
Move reusable components into
packages/ui
Examples:
Button
Card
Modal
Dialog
Sidebar
Navbar
Accordion
Progress
Tables
Roadmap Nodes
Import them from packages/ui.
Step 10
Shared Utilities
Create
packages/shared
Move
Types
Hooks
Utilities
Constants
Enums
Shared functions
here.
Step 11
AI Package
Create
packages/ai
This package should contain:
Roadmap AI
Business AI
Playlist AI
Workflow Generator
Prompt Templates
No implementation yet.
Just architecture.
Step 12
Database Package
Create
packages/database
Prepare
Prisma
Supabase
Models
Client
Schemas
No business logic required.
Step 13
Authentication
Create
packages/auth
Prepare authentication architecture.
No implementation required.
Step 14
Configuration
Create
packages/config
Shared
Tailwind
TypeScript
ESLint
Prettier
Configuration
Step 15
Documentation
Create
docs/
Include:
Architecture.md
FolderStructure.md
Roadmaps.md
BusinessAI.md
Projects.md
Playlists.md
DevelopmentGuide.md
README.md
Explain the architecture for future developers.
Routing
Marketing
/
Pricing
About
Resources
Roadmaps
Business AI
Projects
Playlists
Application
/dashboard

/explore

/roadmaps

/business-ai

/projects

/playlists

/settings
Migration Rules
Do not rewrite working code unless necessary.
Do not redesign the UI.
Do not break existing functionality.
Focus on moving code into the correct architecture.
If duplicate dependencies exist,
merge them.
If duplicate Tailwind configurations exist,
unify them.
If duplicate TypeScript configurations exist,
unify them.
If duplicate package.json files exist,
merge them properly.
Final Result
After completion,
the repository should be a professional monorepo where:
Marketing is a standalone application.
The SaaS platform is a standalone application.
Flow Roadmaps is integrated into the SaaS.
Flow Project is integrated into the SaaS.
Business AI is prepared.
Playlists is prepared.
Everything shares:
authentication
UI components
packages
configuration
future database
future AI layer
The codebase should be clean, scalable, production-ready, and easy to extend as Flow-HQ grows.