export function hello() {
    document.write("hello from webpack!!!!"); 
}

export function changeH1(text) {
    document.querySelector('h1').innerText = text;

}

if(module && module.hot) module.hot.accept()