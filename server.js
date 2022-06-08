function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const  envVariable = rocess.env.MY_ENV_Variable;

async function main() {
  while(true) {
    console.log('Containers rule! v2! ' + envVariable + "!");
    await sleep(5000);
  }
}

main();
