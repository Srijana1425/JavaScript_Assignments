   const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

    shoppingCart.unshift('Meat'); //[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]
    console.log(shoppingCart);

    shoppingCart.push('Sugar'); //[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]
    console.log(shoppingCart);
   
    removed = shoppingCart.splice(4, 1); //[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar' ]
    console.log(shoppingCart);

    shoppingCart[2]="Green Tea"//[ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]
    console.log(shoppingCart);

    