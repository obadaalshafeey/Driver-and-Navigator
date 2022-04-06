const str = 'The Car Drove Fast';
const arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1,4);

}
const str2 = arr.join(" ");
console.log(str2);
