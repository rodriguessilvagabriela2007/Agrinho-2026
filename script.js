const botao = document.getElementById("saibaMais");
const textoExtra = document.getElementById("textoExtra");

botao.addEventListener("click", () => {

    textoExtra.innerHTML = `
    <p>
    A busca pelo equilíbrio entre a produtividade no campo e a preservação ambiental é o eixo central da agricultura moderna.
    O uso de defensivos agrícolas (agrotóxicos) permitiu o controle de pragas em larga escala e garantiu a segurança alimentar de bilhões de pessoas.
    No entanto, o uso indiscriminado dessas substâncias ameaça a biodiversidade, contamina recursos hídricos e gera riscos à saúde humana.
    </p>

    <p>
    Alcançar a sustentabilidade não significa necessariamente banir a química do campo, mas sim aplicar inteligência, ciência e responsabilidade.
    </p>
    `;
});

/* CURIOSIDADES */
const botaoCuriosidades = document.getElementById("mostrarCuriosidades");
const curiosidades = document.getElementById("curiosidades");

botaoCuriosidades.addEventListener("click", () => {

    curiosidades.innerHTML = `
    <div class="painel-curiosidades">

        <h3>🌟 Curiosidades da Agricultura Sustentável</h3>

        <div class="curiosidade">
            🦟 <strong>Insetos heróis:</strong> Microvespas combatem pragas na cana-de-açúcar naturalmente.
        </div>

        <div class="curiosidade">
            🌱 <strong>Plantas faxineiras:</strong> Algumas plantas ajudam a limpar o solo contaminado.
        </div>

        <div class="curiosidade">
            🤖 <strong>Drones inteligentes:</strong> Aplicam defensivos apenas onde há necessidade.
        </div>

    </div>
    `;
});