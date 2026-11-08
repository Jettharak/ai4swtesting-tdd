class Timesheet {
  constructor() {
    this.timesheets = new Map();
  }

  submitTimesheet(projectName, hours) {
    if (typeof projectName !== 'string' || projectName.trim() === '') {
      throw new TypeError('projectName must be a non-empty string');
    }
    if (typeof hours !== 'number' || !Number.isFinite(hours)) {
      throw new TypeError('hours must be a finite number');
    }
    if (hours <= 0 || !Number.isInteger(hours * 2)) {
      throw new RangeError('hours must be a positive multiple of 0.5');
    }

    const submissions = this.timesheets.get(projectName) || [];
    submissions.push(hours);
    this.timesheets.set(projectName, submissions);
    return true;
  }

  getTimesheets() {
    return Array.from(this.timesheets, ([projectName, submissions]) => ({
      projectName,
      hours: submissions.reduce((total, entry) => total + entry, 0),
    }));
  }

  getTotalTimesheetHours(projectName) {
    return (this.timesheets.get(projectName) || []).reduce(
      (total, hours) => total + hours,
      0,
    );
  }

  getTimesheetHistory(projectName) {
    return (this.timesheets.get(projectName) || []).map((hours) => ({
      projectName,
      hours,
    }));
  }
}

module.exports = Timesheet;
