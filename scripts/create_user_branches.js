#!/usr/bin/env node
const exec = require('child_process').exec;

const execPromise = command =>
  new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => (err ? reject(err) : resolve(stdout, stderr)));
  });

const students = [
  'dashko',
  'isaev',
  'ivanov',
  'kontareva',
  'kulakouski',
  'kurbakov',
  'marsov',
  'nikitin',
  'noschenko',
  'pogorelyi',
  'polukarpov',
  'polyansky',
  'ragulin',
  'reshetnev',
  'suleimanov',
  'teterin',
  'uriev',
];

async function main() {
  await execPromise('git checkout master');
  for (let student of students) {
    await createBranch(3, student);
  }
}

async function createBranch(homeworkNum, student) {
  let homeworkName = `${student}/homework_${homeworkNum}`;
  await execPromise(`git checkout -b ${homeworkName}`);
  await execPromise(`git push --set-upstream origin ${homeworkName}`);
  await execPromise('git checkout master');
}

main()
  .catch(error => {
    console.log(error);
  })
  .then(() => {
    process.exit(0);
  });
