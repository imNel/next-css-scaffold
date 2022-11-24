export let components:string[] = [];
export let options:string[] = [];

process.argv.slice(2).forEach((el: string)=>{
  if (el.startsWith('--')) {
    options.push(el);
  }
  else {
    components.push(el)
  }
});
