function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
document.getElementById('Btn').addEventListener('click', ()=>{
    let colorChanger =getRandomColor();
    document.body.style.backgroundColor = colorChanger;
} )
document.getElementById('reset').addEventListener('click' , ()=>{
    document.body.style.backgroundColor = '#ffffff';
})
