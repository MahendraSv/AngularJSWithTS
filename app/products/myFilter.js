function StringRevese() {
    return function (item, isUpperCase) {
        if (isUpperCase != null && !isUpperCase)
            return item.split("").reverse().join("");
        else if (isUpperCase != null && isUpperCase)
            return item.split("").reverse().join("").toUpperCase();
    };
}
angular.module('products').filter('reverseString', StringRevese);
