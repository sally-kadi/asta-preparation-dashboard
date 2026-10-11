# Product Requirements Document (PRD)

## Project Name
Asta's Preparation Dashboard — Asta's Plan Against Lucifero

## 1. Overview
Asta's Preparation Dashboard is a single-page dashboard that helps Asta track his preparation tasks before facing Lucifero. It provides a clear view of the required tasks, their priorities, completion status, and overall preparation progress.

The dashboard uses a dark fantasy visual style with black, gray, and purple tones.

## 2. Problem Statement
Asta needs a simple way to see which preparation tasks remain unfinished and how much of his plan has been completed. Without a clear overview, it is harder to track progress consistently.

## 3. Target User
The primary user is Asta, who uses the dashboard to monitor his preparation against Lucifero.

## 4. Goals
- Display all three predefined preparation tasks.
- Allow Asta to mark a task as complete or incomplete.
- Calculate and display progress automatically from task completion state.
- Present task priorities and statuses clearly.
- Keep the dashboard usable on desktop and mobile screens.

## 5. Core Features

### Feature 1: View Preparation Tasks
Display exactly three predefined tasks:

1. **Sword Control**
   - Description: Practise precise anti-magic sword movements.
   - Priority: High
   - Initial status: Incomplete

2. **Physical Endurance**
   - Description: Complete a focused strength and stamina session.
   - Priority: Medium
   - Initial status: Incomplete

3. **Team Coordination**
   - Description: Review a preparation plan with the Black Bulls.
   - Priority: High
   - Initial status: Incomplete

Each task must show its title, description, priority, completion status, and a control for changing its completion state.

### Feature 2: Toggle Task Completion
- The user can mark any task as complete.
- The user can mark a completed task as incomplete again.
- The status shown on each task must update immediately.
- Controls must be keyboard-operable and show a visible focus state.

### Feature 3: Calculated Progress
- Display the number of completed tasks out of three.
- Display the overall completion percentage.
- Calculate both values from the current task completion state.
- Update the progress indicator immediately when a task is completed or undone.

Expected progress values:

| Completed Tasks | Progress |
|---|---:|
| 0 of 3 | 0% |
| 1 of 3 | 33% |
| 2 of 3 | 67% |
| 3 of 3 | 100% |

The percentage represents completion of Asta's preparation plan. It does not represent the probability of defeating Lucifero.

## 6. User Interface and Design
- Use a dark fantasy style with black, gray, and purple as the main colors.
- Show the dashboard title and a short introduction.
- Include a compact briefing about the threat posed by Lucifero.
- Display the three preparation tasks as clear task cards.
- Show each task's priority, status, and completion control.
- Include a progress bar, completed-task count, and percentage.
- Provide clear visual differences between completed and incomplete tasks.
- Use readable text, adequate contrast, and visible keyboard focus.
- Ensure the layout works on desktop and mobile screens, including a viewport around 360 pixels wide.

## 7. User Interaction and State
- All three tasks start as incomplete when the application loads.
- Task completion state is managed in the client.
- Progress count and percentage are derived from the task state; they must not be maintained as separate, independently updated values.
- Refreshing the page resets all tasks to incomplete.
- No database or persistent storage is required.

## 8. Scope

### In Scope
- One dashboard page.
- Three predefined tasks.
- Viewing task details and priorities.
- Completing and undoing tasks.
- Automatically calculated progress.
- Responsive desktop and mobile layout.
- Keyboard-accessible task controls.

### Out of Scope
- User accounts or authentication.
- Database integration or persistent storage.
- Adding, editing, or deleting tasks.
- Additional pages or routes.
- Chatbots, multiplayer features, or combat simulation.
- Live anime data or external API integration.
- Payments or probability-of-victory calculations.

## 9. Acceptance Criteria
The dashboard is accepted when:

1. Exactly three predefined tasks are displayed.
2. All tasks start as incomplete.
3. Each task displays its title, description, priority, status, and completion control.
4. Completing a task updates its status and the progress immediately.
5. Undoing completion returns the task to the incomplete state.
6. Progress is correct at 0%, 33%, 67%, and 100% for zero, one, two, and three completed tasks.
7. Repeated toggles keep the task count and percentage consistent and within the range of zero to three completed tasks.
8. Refreshing the page resets all tasks to incomplete.
9. Task controls can be operated with a keyboard and have a visible focus state.
10. The layout remains readable and usable on desktop and mobile screens, including around 360 pixels wide.
11. The progress percentage is clearly understood as preparation-plan completion, not the chance of winning a battle.

## 10. Technical Requirements
- Framework: Next.js.
- Language: TypeScript.
- Styling: Tailwind CSS.
- Use a single source of truth for task completion state.
- Derive completed-task count and percentage from that state.
- Keep the implementation simple and within the defined scope.

## 11. Success Measurement
The project succeeds when a user can quickly identify the remaining preparation tasks, change completion states, and understand the current preparation progress without confusion.