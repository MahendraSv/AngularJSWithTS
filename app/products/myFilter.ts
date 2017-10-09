function StringRevese() {
    return function (item: string, isUpperCase: boolean): string {
        if(isUpperCase != null && !isUpperCase)
            return item.split("").reverse().join("");
        else if(isUpperCase != null && isUpperCase)
            return item.split("").reverse().join("").toUpperCase();
    }
}

angular.module('products').filter('reverseString', StringRevese);