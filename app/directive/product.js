var app;
(function (app) {
    var domain;
    (function (domain) {
        var Product = (function () {
            function Product(productName, description, imageUrl) {
                this.productName = productName;
                this.description = description;
                this.imageUrl = imageUrl;
            }
            return Product;
        }());
        domain.Product = Product;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
