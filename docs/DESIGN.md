# Design Specification

## 1. Design Overview
Asta's Preparation Dashboard is a single-page dashboard for tracking preparation tasks before facing Lucifero.

The design direction is dark fantasy, using black, gray, and purple. The interface should feel focused and dramatic while remaining clear and easy to use.

## 2. Design Goals
- Make all three preparation tasks easy to find.
- Make priority and completion status easy to understand.
- Show overall progress prominently.
- Keep interactions simple and predictable.
- Support desktop and mobile layouts.
- Maintain readable contrast and keyboard accessibility.

## 3. Page Structure

### Header
- Display the title: "Asta's Preparation Dashboard".
- Include a short subtitle explaining that the dashboard tracks preparation against Lucifero.
- Use a restrained dark fantasy visual style.

### Threat Brief
- Show a compact introductory panel about preparing for Lucifero.
- Keep the text short so it does not distract from the task list.
- Do not display a victory probability or combat simulation.

### Progress Summary
- Display the number of completed tasks out of three.
- Display the calculated completion percentage.
- Include a progress bar that reflects the same percentage.
- Update the summary whenever a task is completed or undone.

### Preparation Task Cards
Display exactly three cards:

1. **Sword Control**
   - Description: Practise precise anti-magic sword movements.
   - Priority: High.

2. **Physical Endurance**
   - Description: Complete a focused strength and stamina session.
   - Priority: Medium.

3. **Team Coordination**
   - Description: Review a preparation plan with the Black Bulls.
   - Priority: High.

Each card should contain:
- Task title.
- Short description.
- Priority label.
- Completion status.
- A button or checkbox to complete or undo the task.

## 4. Visual Direction
- **Background:** near-black or charcoal.
- **Panels and cards:** dark gray with subtle borders.
- **Accent:** purple for highlights and progress.
- **Primary text:** high-contrast light text.
- **Secondary text:** muted gray.
- **Status:** clear labels and visual differences for completed and incomplete tasks.

Avoid excessive decoration, distracting animations, and low-contrast text.

## 5. Desktop Layout
- Use a centered content area with comfortable spacing.
- Place the title and threat brief near the top.
- Make the progress summary easy to notice.
- Arrange task cards in a clear grid or vertical list, depending on available space.
- Keep the task controls aligned and easy to operate.

## 6. Mobile Layout
- Support a viewport around 360 pixels wide.
- Stack content vertically.
- Keep task cards within the screen width.
- Allow descriptions to wrap naturally.
- Ensure buttons and checkboxes are easy to tap.
- Avoid horizontal scrolling.

## 7. Interaction States
### Incomplete Task
- Show an "Incomplete" status.
- Provide a clear action to mark the task complete.

### Completed Task
- Show a "Completed" status.
- Provide a clear action to undo completion.
- Use a subtle visual distinction without making text difficult to read.

### Progress States
The progress display must reflect the task state:

| Completed Tasks | Progress |
|---|---:|
| 0 of 3 | 0% |
| 1 of 3 | 33% |
| 2 of 3 | 67% |
| 3 of 3 | 100% |

## 8. Accessibility
- Use semantic HTML elements.
- Use buttons or checkboxes that work with a keyboard.
- Provide visible keyboard focus.
- Maintain readable text and sufficient contrast.
- Do not communicate task status through color alone.
- Use clear labels for interactive controls.

## 9. Design Validation
Before implementation is considered complete:
- Review desktop and mobile designs.
- Compare the design against the PRD.
- Refine at least one design element after the initial design.
- Save evidence of the initial and refined design.
- Verify the implemented interface against the approved design.

## 10. Out of Scope
The design does not include authentication, database features, additional pages, task creation or deletion, chatbots, multiplayer features, or combat simulation.