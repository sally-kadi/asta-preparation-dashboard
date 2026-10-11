# Proof of Concept (POC)

## Objective

Verify that the core task-tracking interaction works correctly before completing the full dashboard.

## Core Features to Test

1. Display exactly three predefined preparation tasks.
2. Allow the user to mark a task as complete.
3. Allow the user to undo completion and return a task to incomplete.
4. Calculate the completed-task count and percentage from the task states.
5. Keep the count between zero and three.

## Initial Task Data

All three tasks start as incomplete.

| Task | Priority | Initial Status |
|---|---|---|
| Sword Control | High | Incomplete |
| Physical Endurance | Medium | Incomplete |
| Team Coordination | High | Incomplete |

## Expected Results

| Completed Tasks | Progress Percentage | Expected Status |
|---|---:|---|
| 0 of 3 | 0% | Incomplete |
| 1 of 3 | 33% | In Progress |
| 2 of 3 | 67% | In Progress |
| 3 of 3 | 100% | Complete |
| Undo one task after reaching 3 of 3 | 67% | In Progress |

## Test Procedure

1. Open the dashboard and verify that all three tasks are incomplete.
2. Confirm that the progress count is 0 of 3 and the percentage is 0%.
3. Mark one task complete and verify that the count becomes 1 of 3 and the percentage becomes 33%.
4. Mark a second task complete and verify that the percentage becomes 67%.
5. Mark the final task complete and verify that the percentage becomes 100%.
6. Undo one task and verify that the percentage returns to 67%.
7. Toggle tasks repeatedly and verify that the count and percentage remain consistent.
8. Refresh the page and verify that all tasks reset to incomplete.

## Implementation Principle

Task completion state is the single source of truth. The completed-task count and percentage must be calculated from the current task states rather than maintained as separate, manually updated values.

The percentage is calculated as:

`Math.round((completedTasks / totalTasks) * 100)`

## Result and Evidence

The tests must be performed on the implemented dashboard. Record the actual results and add screenshots to `docs/evidence/`.

**Status:** Pending implementation and testing.

Do not mark a test as passed until it has been performed and its result verified.