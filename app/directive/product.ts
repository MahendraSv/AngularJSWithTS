module app.domain {
    export interface IProduct {
        productName: string;
        description: string;
        imageUrl: string;
    }

    export class Product implements IProduct {

        constructor(
            public productName: string,
            public description: string,
            public imageUrl: string
        ) {

        }
    }
}