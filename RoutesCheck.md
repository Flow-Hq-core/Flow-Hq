# Flow-HQ Sitemap & User Navigation Architecture

## Product Vision

Flow-HQ is a unified SaaS platform that helps users:

1. Discover what they should build/learn → Flow Roadmaps
2. Turn ideas into execution plans → Flow Projects
3. Get AI guidance and business analysis → Flow AI
4. Learn through curated paths → Flow Playlists

All modules share one ecosystem and navigation.

---

# Global Application Structure

## Public Website

apps/marketing

Routes:

/
├── Hero
├── How Flow Works
├── Products Overview
├── Features
├── Pricing
└── CTA


/about

/about/company
/about/mission


/products

/products/roadmaps
/products/projects
/products/business-ai
/products/playlists


/pricing


/resources

/resources/blog
/resources/guides
/resources/templates


/auth

/login
/register
/forgot-password


---

# Logged-in SaaS Application

apps/app


## Main App Shell

Every authenticated page uses:

- Left sidebar navigation
- Top header
- User profile
- Workspace selector
- Notifications
- Search


Global Layout:


Dashboard
│
├── Explore
│
├── Roadmaps
│
├── Projects
│
├── Business AI
│
├── Playlists
│
├── Templates
│
├── Billing
│
└── Settings


---

# Dashboard

Route:

/dashboard


Purpose:
User command center.


Sections:

- Current goals
- Active projects
- Roadmap progress
- AI recommendations
- Recent activity
- Learning progress


User actions:

Dashboard
    |
    ├── Continue roadmap
    ├── Open project
    ├── Ask AI
    └── Continue playlist



---

# Explore Module

Route:

/explore


Purpose:
Discovery marketplace.


Sections:

- Popular roadmaps
- Templates
- Project ideas
- Learning paths
- Business categories


User Flow:


Explore

↓

Choose interest

↓

View recommended:

- Roadmap
- Project template
- Playlist
- AI analysis


↓

Start journey



---

# Flow Roadmaps

Routes:


/roadmaps

/roadmaps/[slug]


Purpose:

Help users understand the path from beginner to advanced.


Navigation:


Roadmaps

↓

Browse categories


Categories:

- Business
- Data Engineering
- Software Development
- Marketing
- Finance
- Transport
- Other industries


↓

Roadmap Detail


Roadmap Detail:


Header

- Title
- Description
- Difficulty
- Duration
- Progress


Sections:

- Levels
- Milestones
- Skills
- Resources


Actions:


Start Roadmap

↓

Track Progress

↓

Recommended Project


↓

Create Project From Roadmap



Important Integration:

Every roadmap milestone can create:

Roadmap Step

↓

Project

Example:

Learn Marketing

↓

Create Marketing Campaign Project



---

# Flow Projects

Routes:


/projects

/projects/new

/projects/[id]


Purpose:

Turn ideas and roadmap steps into execution.


Projects Dashboard:


Projects

├── Active
├── Completed
├── Templates
└── Archived



Create Project Flow:


New Project

↓

Choose:

- Blank project
- From roadmap
- From template
- AI generated


↓

Project Setup


Inputs:

- Goal
- Requirements
- Timeline
- Resources


↓

AI generates:


- Tasks
- Milestones
- Risks
- Scenarios


↓

Project Workspace



Project Workspace:


Overview

├── Goals
├── Requirements
├── Timeline
├── Tasks
├── Documents
├── Risks
├── AI Assistant
└── Reports



Integration:


Project

↓

Related Roadmap

↓

Learning Playlist

↓

Business AI Analysis



---

# Flow Business AI

Routes:


/business-ai


Purpose:

AI business advisor.


Flow:


Business AI


↓

Choose analysis:


- Business idea
- Existing business
- Marketing
- Operations
- Competition


↓

Input information


↓

AI Report:


- Problems
- Opportunities
- Recommendations
- Action plan


↓

Actions:


Create Project

OR

Start Roadmap



---

# Flow Playlists

Routes:


/playlists

/playlists/[id]


Purpose:

Learning engine.


Flow:


Choose Goal


↓

Generate Learning Path


↓

Playlist


↓

Watch Resources


↓

Complete Lessons


↓

Update Roadmap Progress



Integration:


Playlist Completion

↓

Roadmap Skill Completion



---

# Templates

Routes:


/templates


Categories:

- Business templates
- Project templates
- Roadmaps
- AI prompts


Flow:


Template

↓

Preview

↓

Use Template

↓

Create Project/Roadmap



---

# Settings

Routes:


/settings


Sections:


/settings/profile

/settings/account

/settings/preferences

/settings/notifications

/settings/security


---

# Global Navigation Rules


1. User should always know:

Where am I?
What can I do next?


2. Every product page should have contextual next actions.


Example:


Roadmap page:

Primary CTA:
"Start Roadmap"


Secondary:
"Create Project"


Project page:

Primary CTA:
"Execute Project"


Secondary:
"Improve With AI"



3. Avoid isolated products.


Everything connects:


Roadmap

↓

Project

↓

AI

↓

Learning

↓

Growth



---

# Sidebar Navigation


Desktop:


Flow Logo


Dashboard


Explore


Build

    Roadmaps
    Projects


Learn

    Playlists


Intelligence

    Business AI


Resources


Settings



Mobile:

Bottom Navigation:


Home

Explore

Create

Projects

Profile



---

# Design Principle

Flow-HQ should feel like one operating system for personal/business growth.

Not separate apps.

Everything should guide users from:

Discovery → Planning → Execution → Improvement → Growth