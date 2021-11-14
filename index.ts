const HolesType: object = {
    4: 1,
    6: 1,
    8: 2,
    9: 1,
    0: 1,
}

const arr: number[] = [10,4, 6, 8, 9, 0];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        let curr = HolesType[arr[j]] ? HolesType[arr[j]] : arr[j];
        let next = HolesType[arr[j+1]] ? HolesType[arr[j+1]] : arr[j+1];
        if (curr > next) {
            let tmp: number = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
        }
    }
}

console.log(arr);