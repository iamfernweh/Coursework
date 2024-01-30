const studentNames = [
    'julie', 'elissa', 'juan', 'lucas', 'allison'
];

studentNames.forEach(s => console.log(`Welcome to class, ${s}!`))

const clogEachName = (oneName) => {
    console.log(oneName);
}

studentNames.forEach(clogEachName)