function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const ME = process.env.NAME;

async function main() {
  while(true) {
    console.log('Containers rule! v2!' + ME);
    await sleep(5000);
  }
}

main();
