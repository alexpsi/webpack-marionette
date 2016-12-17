
    var testsContext = require.context("../../app", false);

    var runnable = testsContext.keys();

    runnable.forEach(testsContext);
    