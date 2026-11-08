class Timesheet {
  constructor() {
    this.timesheets = new Map();
  }

  submitTimesheet(projectName, hours) {
    const totalHours = (this.timesheets.get(projectName) || 0) + hours;
    this.timesheets.set(projectName, totalHours);
    return true;
  }

  getTimesheets() {
    return Array.from(this.timesheets, ([projectName, hours]) => ({
      projectName,
      hours,
    }));
  }

  getTotalTimesheetHours(projectName) {
    return this.timesheets.get(projectName);
  }
}

module.exports = Timesheet;
