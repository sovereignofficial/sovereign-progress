const testProcess = process.argv
const mission = testProcess[2] ?? 'learn';

if(mission === 'learn'){
    console.log('Time to write some Node code!');
}else{
    console.log(`Is ${mission} really more fun?`);
}