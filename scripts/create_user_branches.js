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
  'lobastov',
  'marsov',
  'nikitin',
  'noschenko',
  'pervushin',
  'pogorelyi',
  'polukarpov',
  'polyansky',
  'ragulin',
  'reshetnev',
  'samsonova',
  'suleimanov',
  'teterin',
  'uriev',
];

async function main() {
  for (let student of students) {
    await createHomeworkBranch(7, student);
  }
  await execPromise('git checkout master');
}

async function createHomeworkBranch(homeworkNum, student) {
  let homeworkName = `${student}/homework_${homeworkNum}`;
  await execPromise('git checkout master');
  await execPromise(`git checkout -b ${homeworkName}`);
  await execPromise(`git push --set-upstream origin ${homeworkName}`);
}

main()
  .catch(error => {
    console.log(error);
  })
  .then(() => {
    process.exit(0);
  });
