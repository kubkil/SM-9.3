let text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
let dinosaur = 'triceratops';
dinosaur = dinosaur.toUpperCase();

let textTrice = text.replace('Velociraptor', dinosaur);

console.log(textTrice.length);

console.log(textTrice.slice(0, textTrice.length/2));