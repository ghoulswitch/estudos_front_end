/*Considere uma array/lista de ovelhas onde algumas ovelhas podem estar faltando. Conte o número de ovelhas presentes no array (true significa que está presente)*/

    const arrayDeOvelhas = [true, true, false, true, null, undefined, true, false];
    let num = 0; //inicializa o contador

    arrayDeOvelhas.forEach(ovelha => { //"ovelha" é o nome da variável temporária que representa cada item do array enquanro o forEach percorre
        if (ovelha === true) num++;
    });

    console.log(`Número de ovelhas presentes: ${num}`);

