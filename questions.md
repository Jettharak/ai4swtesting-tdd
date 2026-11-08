# Questions and Work Log

## Timesheet requirements: clarification questions

1. What does “tracked in half-hour units” mean for time entry? - It is unclear whether users may enter only exact 30-minute increments or whether other durations are rounded up, down, or to the nearest half hour.
2. What is the minimum and maximum amount of time that can be entered for a project? - The text does not specify whether zero time, partial-day entries, or unusually long entries are allowed.
3. What does “complete a timesheet” mean? - It is unclear whether a timesheet covers a day, week, or another period, and whether it can contain entries for multiple projects.
4. How should a project be identified when time is entered? - The text does not say whether users select from an existing project list or can create or enter project names themselves.
5. When can a user view or change tracked time? - The text does not specify whether entries can be edited or deleted, or whether completed timesheets can be changed.
6. Who counts as “I” for the privacy requirement? - It is unclear whether only the user who created an entry may see it, or whether administrators or project members may also access it.

## Work log

- Created this file at the user's request to keep a record of prompt answers and related edits.
- Future task answers and workspace edits will be recorded here.
- Added one Jest test to `tests/timesheet.test.js` verifying that submitting `Project 1` for 8 hours returns `true`; no source files were changed.
- Ran the targeted Jest test; it fails as expected because `submitTimesheet` is not implemented yet.
- Implemented `submitTimesheet(projectName, hours)` to return `true`, without changing the test.
- Reran the targeted Jest test; it passes.
- Added one Jest test verifying a submitted timesheet can be retrieved as a list; no source files were changed.
- Ran the targeted Jest tests; the new test fails as expected because `getTimesheets` is not implemented yet, while the existing test passes.
- Added a `Map` keyed by project name for storing hours and implemented `getTimesheets()` to return the required list; tests were not changed.
- Ran the targeted Jest tests; both pass.
- Added one Jest test confirming multiple project timesheets are returned as a list; no source files were changed.
- Ran the targeted Jest tests; all three pass.
- Added one Jest test that submits three 8-hour timesheets for one project and expects the total to be 24; no source files were changed.
- Ran the targeted Jest tests; the new test fails because `getTotalTimesheetHours` is not implemented, while the other three tests pass.
- Added `getTotalTimesheetHours(projectName)` to return the hours currently stored for that project. No other source changes were made.
- Ran the targeted Jest tests; the new total test returns 8 instead of 24 because `submitTimesheet` overwrites hours for an existing project.
- Updated `submitTimesheet` to accumulate hours for an existing project; tests were not changed.
- Ran the targeted Jest tests; all four pass.
