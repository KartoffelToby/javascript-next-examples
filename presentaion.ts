// Some Config shit
({
    babel: true
})


// PLAYGROUND
;(() => {


const objectOne:Object = { name: 'Tobias Haber', age: 22 };
const objectTwo:Object = { name: 'Tobias Haber', role: 'Web-Application-Developer' };
const objectThree:Object = { name: 'Tobias Haber', color: 'blue' };

const merged:Object = {...objectOne, ...objectTwo,...objectThree};

console.log(merged); 


})();
//