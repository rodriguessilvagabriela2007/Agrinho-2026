```javascript
const botao = document.getElementById("saibaMais");
const textoExtra = document.getElementById("textoExtra");

botao.addEventListener("click", () => {
    textoExtra.innerHTML = `
    <p>
    A produção rural é essencial para fornecer alimentos, gerar empregos e contribuir para o desenvolvimento da economia. No entanto, para que essa atividade continue trazendo benefícios, é importante que os produtores utilizem os recursos naturais de forma consciente, preservando o solo, a água e a vegetação.
    </p>

    <p>
    A preservação ambiental é uma grande aliada da produção rural, pois ajuda a manter o equilíbrio da natureza e a qualidade dos recursos utilizados no campo. Por meio de práticas sustentáveis, é possível produzir mais, reduzir impactos ambientais e garantir que as futuras gerações também possam aproveitar um ambiente saudável e produtivo.
    </p>
    `;
});
```
