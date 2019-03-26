import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {
    private items = [];
    constructor(){
        this.items = [
            
            {
                name:"Sudadera edicion limitada",
                description:"Hermosa sudadera negra con la imagen del personaje Noodle en la pate delantera. 100% algodon y puede lavarse a cualquier temperatura.",
                image:"../../assets/img/clothes/mangalarga1.jpg",
                availableUnits:"6"
            },
            {
                name:"Camiseta clasica",
                description:"Hermosa camiseta clasica color negro con un diseño clasico de la banda. Se la sensacion entre tus amigos demostrando que eres un verdadero fan.",
                image:"../../assets/img/clothes/polera1.jpg",
                availableUnits:"8"
            },
            
            {
                name:"Camiseta personalizada",
                description:"Hermosa camiseta blanca con un diseño muy original, con Murdoc junto Noodle en la parte delantera de la camiseta. 100% algodon.",
                image:"../../assets/img/clothes/polera3.jpg",
                availableUnits:"8"
            },
            
            {
                name:"Camiseta negra para ellas",
                description:"La mejor camiseta negra con un original diseño de banda en la parte delantera. Se la sensacion entre tus amigas demostrando que eres una verdadera fan.",
                image:"../../assets/img/clothes/polera5.jpg",
                availableUnits:"2"
            },
            {
                name:"Camiseta de Noodle",
                description:"La mejor camiseta con un diseño de noodle en la parte delantera, hay tanto para el como para ella. Con Noodle en tu camiseta nunca te faltará estilo",
                image:"../../assets/img/clothes/polera6.jpg",
                availableUnits:"1"
            },
            {
                name:"Camiseta clasica",
                description:"Hermosa camiseta color blanco con un diseño clasico de la banda en la parte posterior. 100% algodon, no se ensancha",
                image:"../../assets/img/clothes/polera7.jpg",
                availableUnits:"5"
            },
            {
                name:"Sudadera Demon Days",
                description:"Hermosa sudadera con un diseño clasico del mitico album de la banda Demon Days. Protegete del invierno con esta genial prenda",
                image:"../../assets/img/clothes/sudadera2.jpg",
                availableUnits:"10"
            },
        ];
    }

    getItems(){
        return this.items;
    }

}