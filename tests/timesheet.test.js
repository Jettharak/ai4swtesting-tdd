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
