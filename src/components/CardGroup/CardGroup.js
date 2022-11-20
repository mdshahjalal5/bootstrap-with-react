import React from "react";
import Card from "../Card/Card";
function CardGroup(){
    const products = [
        {id:1, name:'Mac book Pro', price:1444},
        {id:2, name:'Mac book Pro', price:1444},
        {id:3, name:'Mac book Pro', price:1444},
    ]
    return (
        <div>
<div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map(product => <Card key={product.id} product ={product}></Card>)}
</div>
        </div>
    )
}
 
export default CardGroup; 

/* const CardGroup = () => {
    return (
        <div>
            
        </div>
    );
};

export default CardGroup; */