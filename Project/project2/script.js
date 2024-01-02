const form = document.querySelector('form')

form.addEventListener('submit',function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

     if(height === '' || height < 0 || isNaN(height)) {
        console.log(height);
        results.innerHTML = `please give a valid height` // ${height}
     }
     else if(weight === '' || weight < 0 || isNaN(weight)) {
        console.log(weight);
        results.innerHTML = `please give a valid height` // ${weight}
     }
     else {
        const Bmi = (weight / ((height * height) / 10000)).toFixed(2)
        //to show the result
        results.innerHTML = `<span>${Bmi}</span>`

        if(Bmi < 18.6) {
            results.innerHTML = `it is under weight(${Bmi})`
         }
         else if(Bmi > 24.9) {
            results.innerHTML = `it is over weight(${Bmi})`
         }
         else if(Bmi > 18.6 && Bmi < 24.9) {
            results.innerHTML = `it is in Normal Range(${Bmi})`
         }
     }

     
});