function hitungLuas(e){
e.preventDefault();
    const alas = document.getElementById('alas');
    const tinggi = document.getElementById('tinggi');
    const hitung = document.getElementById('hitung');
    const output = document.getElementById('output');
    let a = alas.value;
    let t = tinggi.value;
    let l = 0.5*a*t;
    output.innerText += `Luas Segitiga tersebut adalah ${l} cm2`;
}
document.getElementById('hitung').addEventListener('click', hitungLuas);

function hitungKeliling(e){
e.preventDefault();
    const sisi1 = document.getElementById('sisi1');
    const sisi2 = document.getElementById('sisi2');
    const sisi3 = document.getElementById('sisi3');
    const hitung = document.getElementById('hitung-keliling');
    const output = document.getElementById('output-keliling');
    let s1 = sisi1.value;
    let s2 = sisi2.value;
    let s3 = sisi3.value;
    let k = parseInt(s1)+parseInt(s2)+parseInt(s3);
    output.innerText += `Keliling Segitiga tersebut adalah ${k} cm`;
}
document.getElementById('hitung-keliling').addEventListener('click', hitungKeliling);

function reset(){
    document.getElementById('reset').addEventListener('click', reset);
}

function reset(){
    document.getElementById('reset-keliling').addEventListener('click', reset);
}