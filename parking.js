function solution(E, L) {
    const baseCharge = 2;
    const firstHour = 3;
    const repetitiveHour = 4;

    const a = E.split(':');
    const b = L.split(':');
    console.log(a);
    console.log(b)

    const hms1 = a[0]*60*60 + a[1]*60
    console.log(hms1)

    const hms2 = b[0]*60*60 + b[1]*60
    console.log(hms2)

    const diff = hms2 -hms1;
    console.log(diff);

    const hnew = Math.ceil(Math.abs(diff/3600))
    console.log(Math.ceil(hnew))

const total_charge = baseCharge + firstHour + repetitiveHour *(hnew-1)
console.log(total_charge)
return total_charge

}

solution('3:20', '3:30');

