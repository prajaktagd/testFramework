const formatResult = function (testsResult) {
  const formattedResult = testsResult.map(function (testResult) {
    const status = testResult.passed ? '✅' : '❌';
    return status + ' ' + testResult.name;
  });
  return formattedResult;
};

const generateFailedReport = function (testsResult) {
  const failedTests = testsResult.filter(result => !result.passed);
  const report = failedTests.map(test => {
    return {
      name: test.name,
      actual: test.error.actual,
      expected: test.error.expected,
      description: test.error.message
    };
  });
  return report;
};

const generateReport = function (testsResult) {
  const result = formatResult(testsResult);
  const failedReport = generateFailedReport(testsResult);
  const counts = [result.length, failedReport.length];
  return [result, failedReport, counts];
};

const displayReport = function (report) {
  console.log(report[0].join('\n') + '\n');
  if (report[1].length) {
    console.table(report[1]);
  }
  console.log('Failed: ' + report[2][1] + '/' + report[2][0]);
};

const runTests = function (tests) {
  const testsResult = [];
  tests.forEach(test => {
    let testResult = { name: test.name, passed: true };
    try {
      test();
    } catch (error) {
      testResult.passed = false;
      testResult.error = error;
    }
    testsResult.push(testResult);
  });
  displayReport(generateReport(testsResult));
};

exports.runTests = runTests;
