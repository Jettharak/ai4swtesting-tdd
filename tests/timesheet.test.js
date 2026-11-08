const Timesheet = require('../src/timesheet');

test('submitting a timesheet with a project name and hours returns true', () => {
  const timesheet = new Timesheet();
  const result = timesheet.submitTimesheet('Project 1', 8);

  expect(result).toBe(true);
});

test('added timesheets can be retrieved as a list', () => {
  const timesheet = new Timesheet();
  timesheet.submitTimesheet('Project 1', 8);

  expect(timesheet.getTimesheets()).toEqual([
    { projectName: 'Project 1', hours: 8 },
  ]);
});

test('multiple added timesheets can be retrieved as a list', () => {
  const timesheet = new Timesheet();
  timesheet.submitTimesheet('Project 1', 8);
  timesheet.submitTimesheet('Project 2', 4);

  expect(timesheet.getTimesheets()).toEqual([
    { projectName: 'Project 1', hours: 8 },
    { projectName: 'Project 2', hours: 4 },
  ]);
});

test('the total hours worked on one project can be calculated', () => {
  const timesheet = new Timesheet();
  timesheet.submitTimesheet('Project 1', 8);
  timesheet.submitTimesheet('Project 1', 8);
  timesheet.submitTimesheet('Project 1', 8);

  const total = timesheet.getTotalTimesheetHours('Project 1');
  expect(total).toBe(24);
});
