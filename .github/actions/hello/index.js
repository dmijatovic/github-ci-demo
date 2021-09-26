// use npm package for custom actions
// npm i @ations/core @actions/github

const core = require("@actions/core");
const github = require("@actions/github");

try {
  // get input (action parameters)
  const name = core.getInput("who-to-greet");
  // log
  console.log(`Hello ${name}`);
  // define output
  const time = new Date().toISOString();
  // first param is output variable name
  core.setOutput("time", time);
  // log info
  console.lo("github:", JSON.stringify(github, null, 2));
} catch (e) {
  // simulate error
  // throw new Error("Custom action hello failed:", e.message);
  // we need to notify github action
  core.setFailed(`Hello action failed: ${e.message}`);
}
