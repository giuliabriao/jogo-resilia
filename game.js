function startGameImg() {
    resetLayout();
    image(knifeImg, "knifeImg")
    textChoices(
        "textStartGameImg", `Olá e bem vinda ao acampamento! <br><br> <b>Você é Joana</b>, a atleta de sua escola, com alta capacidade física, 
        habilidosa com objetos no geral, mas seu senso de liderança te faz dar a cara a tapa com muita facilidade.
        Voce está correndo pelos arredores do acampamento, treinando para o próximo campeonato de baseball quando vê um 
        belíssimo exemplar de uma <b>faca</b> novinha no chão. <br><br> <b>O que você faz?</b>`
    );
    createButtons("Pegar a Faca", "takeKnife1", "Deixa-la no chão mesmo", "leaveKnife1");
}

function takeKnife1() {
    image(campFireImg, "campFireImg");
    textChoices("textTakeKnife1", `Você leva a faca pro seu dormitório para limpar e analisar. <br><br> <b>Tem a sensação de estar sendo observada</b>, 
    mas acaba deixando isso pra lá. Teus amigos acharam maneiro e de muita sorte ter encontrado um objeto tão raro.<br><br> 
    Mais tarde naquele dia, vocês vão confraternizar em volta da fogueira.`);
    continuarStory("continueTakeKnife1", takeKnife2);
}

function takeKnife2() {
    image(deerImg, "deerImg")
    textChoices("textTakeKnife2", `De repente vocês escutam um barulho estranho na mata.</b> 
    Todos com medo mas, como você é destemida, resolve ir ver o que é. <br><br> <b>O vulto vai ficando mais próximo, mais próximo</b> e quando 
    vê era um filhote de veado a espreita. <br><br>Você volta pra fogueira. Depois de um tempo, o pessoal achou melhor ficar papeando 
    dentro do dormitório, porque fora tinham mosquitos demais. <br><br> <b>O que você faz?</b> <br> Vai treinar porque tem um importante campeonato 
    regional semana que vem e você precisa estar em forma ou vai junto da galera?`);
    createButtons("Vai treinar", "train1", "Ir junto da galera", "hangOut");
}

function train1() {
    image(joggingImg, "joggingImg");
    textChoices("textTrain1", `No seu treino all by yourself, mega concentrada, 
    você ouve um barulho e vê denovo um vulto mas deixa pra lá porque 
    deve ser o Bambi mais um vez.`);

    continuarStory("continueTrain1", train2)
}

function train2() {  
    clearImg();
    textChoices("textTrain2", `Silêncio total. <br><br>Você se vê caída na chão.<br><br> 
    Algo quente escorre da sua testa. O tal serial killer que você não deu bola 
    te matou primeiro por ter roubado a faca dele.`);
    death();
    playAgain();

}

function leaveKnife1(){
    image(campFireImg, "campFireImg");
    textChoices("textLeaveKnife1", `Você vai para o dormitório tomar banho e se preparar pra confraternização na fogueira.`)
    continuarStory("continueLeaveKnife1", leaveKnife2);
}

function leaveKnife2(){
    image(hugImg, "hugImg")
    textChoices("textLeaveKnife2", `As histórias de terror tão comendo soltas, você não liga, acha até graça. 
    mas vê Diana morrendo de medo. Como você é a fim dela, chega mais perto para abraça-la. <br><br>Depois de um tempo, 
    o pessoal achou melhor ficar papeando dentro do dormitório porque fora tinham mosquitos demais.`);
    continuarStory("continueLeaveKnife2", hangOut);
}

function hangOut(){
    image(cabinImg, "cabinImg");
    textChoices("textHangOut", `Você não deixa de reparar mais uma vez o quanto aquele dormitório parecia na verdade uma casa!
    Tinha 3 banheiros, varios quartos, uma cozinha imensa, sala... Poderia morar ali facilmente. <br><br>Enquanto o povo 
    conversava, ria ou morria de medo na sala, um barulho de porta fechando não passou desapercebido.`);
    continuarStory("continueHangOut", whoToCall);
}

function whoToCall(){
    image(doubtImg, "doubtImg");
    textChoices("textWhoToCall", `Ta, dessa vez você estava com medo, mas não se deixou levar. Como Diana tava tensa e Fred quase desmaiando, 
    você se oferece pra ir ver se não era o vento, ou algo assim.<br><br> Quem você chama pra ir conferir o barulho contigo?`);
    createButtons("Ariel, o cara de mente afiada porém fisicamente lento", "chooseAriel1", "Úrsula, a popular que faz boas gambiarras porém é distraída", "chooseUrsula1");
}

function chooseAriel1(){
    image(lockedImg, "lockedImg");
    textChoices("textChooseAriel1", `Vocês adentram a despensa quando de repente a porta atrás de vocês se fecha, 
    tentar abri-la é inútil pois está trancada! Do lado de fora, ouvem-se gritos. Ariel tem a brilhante ideia 
    de vocês dois tentarem arrombar a porta. Os gritos estão ficando cada vez mais altos e aterrorizantes.`)
    continuarStory("continueChooseAriel1", chooseAriel2);
}

function chooseAriel2(){
    image(carnageImg, "carnageImg");
    textChoices("textChooseAriel2", `Finalmente conseguem sair e quando chegam na sala, uma carnificina. Vocês paralisam de medo mas é tarde demais... 
    O serial killer matou todo mundo... <br><br> <b>O que você faz?</b>`);
    createButtons("Correm que nem louca pra bem longe", "runAway", "Bola um plano com Ariel para capturar ou se possível matar o serial killer", "planToKill");
}

function runAway(){
    image(policeImg, "policeImg");
    textChoices("textRunAway", `Você e Ariel se salvam correndo pra bem longe, um carro de patrulha da polícia estava passando bem na hora. 
    Vocês pedem ajuda, eles chegam ao local, capturam o serial killer e vocês salvam o dia.`);
    continuarStory("continueRunAway", winning1);
}

function winning1(){
    youWin();
    textChoices("textWinning1", `PARABENS! VOCÊ SOBREVIVEU! <br><br>Pena que seus amigos não tiveram a mesma sorte... R.I.P.`);
    playAgain();
}

function chooseUrsula1(){
    image(clipImg, "clipImg");
    textChoices("textChooseUrsula1", `Vocês vão até o quartinho dos fundos. A porta se fecha atrás de vocês e não quer mais abrir, 
    mas Úrsula tem a genial ideia de usar seus grampos de cabelo para abrir a porta. E não é que deu certo?`);
    continuarStory("continueChooseUrsula1", chooseUrsula2);
}

function chooseUrsula2(){
    image(serialKillerImg, "serialKillerImg");
    textChoices("textChooseUrsula2", `Vocês saem de fininho em direção a sala. Encontram uma cena aterrorizante: um homem imenso, mascarado e 
    com um machadinha se aproximava da Diana. Você rapidamente pensa em como deter o serial killer. <b>O que você faz?</b>`);
    createButtons("Pega uma faca na cozinha", "chooseKnife", "Pegar uma chaleira com água fervente", "chooseKettle1");
}

function chooseKnife(){
    image(deathSKImg, "deathSKImg");
    textChoices("textChooseKnife", `Devargarinho você se aproxima do serial killer e com um só golpe apunhala seu pescoço, que o faz agonizar e cair sangrando litros no chão.`);
    continuarStory("continueChooseKnife1", winning2);
}

function winning2(){
    youWin();
    textChoices("textWinning2", `PARABÉNS, VOCÊ SALVOU O DIA E AINDA GANHOU O CORAÇÃO DA MOÇA! <br><br>(só depois que ela se recuperar desse estresse pós-traumático)`);
    playAgain();    
}

function chooseKettle1(){
    image(kettleImg, "kettleImg");
    textChoices("textChooseKettle1",`Você prontamente chega de fininho e joga água fervente em cima do serial killer!`)
    continuarStory("continueChooseKettle1", chooseKettle2);
}

function chooseKettle2(){
    clearImg();
    textChoices("textChooseKettle2",`..mas ele é o próprio demônio e a água não faz nada além de cócegas. Ele não reage de outra forma a não ser te matando!`)
    death();
    playAgain();
}
