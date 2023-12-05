# TestCafe : https://github.com/DevExpress/testcafe </br>

# CLI Docs: https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html </br>
## Configuration File (CLI): https://devexpress.github.io/testcafe/documentation/using-testcafe/configuration-file.html </br>

# TestCafe BDD: </br>
[TestCafe Cucumber](https://github.com/rquellh/testcafe-cucumber)</br>
[TestCafe Gherkin](https://github.com/kiwigrid/gherkin-testcafe)</br>
[TestCafe Starter](https://github.com/hdorgeval/testcafe-starter)</br>

</br>
NOTE: After you clone the repo - you will need to install the CLI HTML reporter:</br>
<b>npm install testcafe-reporter-html</b>

</br>
# Run TestCafe: node_modules/.bin/testcafe - runs the tests
</br>
## If you want to specify a specific test to run/debug - add this line to the ".testcaserc.json" file:
</br>
  <b>"filter": {"test": "Specific Test Name"},</b></br>
  </br>
  Example:  </br>
  {  </br>
  "browsers": [  </br>
    "chrome"  </br>
  ],  </br>
  "src": "./tests/*.js",  </br>
  "reporter": [  </br>
    {  </br>
      "name": "xunit",  </br>
      "output": "./reports/report.xml"  </br>
    },{  </br>
      "name": "html",  </br>
      "output": "./reports/report.html"  </br>
    },  </br>
    {  </br>
      "name": "list"  </br>
    }  </br>
  ],  </br>
  "screenshotPath": "./reports/",  </br>
  "takeScreenshotsOnFails": "./reports",  </br>
  "screenshotPathPattern": "${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png",  </br>
  "skipJsErrors": true,  </br>
  "concurrency": 1,  </br>
  "filter": {"test": "CoPilot Login Test"},  </br>
  "debugMode": false  </br>
  }  </br>
  </br>
