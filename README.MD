#### Snappet web automation project

## Description:

This is a cypress web automation project to test the creation and editing of a subject in the Snappet teacher dashboard.
https://teacher.snappet.org

## Steps to run test:

#### Setup Automation

- clone the repository
- navigate to the project folder
- run `npm install`
- run `npm run test`

## View Test report

- open `cypress/reports/mochareports` folder
- open the `report.html` in a web browser

To view the test video, open `cypress/videos`

## Running Test in the browser,

You can also view the real time while it runs on the browser

- run `npm install`
- run `npx cypress open`
- click on the `subject-creation-and-update.spec.js` to open a new browser

# a sample of the test result is in the `cypress/reports/mochareports` folder. you can view the index.html in a browser

#### FYI

- The endpoints/pages takes some time to load. i.e exceeeds the default cypress 4000ms `defaultCommandTimeout`. so I updated the default timeout to 17000ms.
