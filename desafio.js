let numeroInformadoPeloUsuario = 4;

// Desafio 1
    
    let n = numeroInformadoPeloUsuario;

    function piramideLateral(n){

        if(n > 1 & n <= 10){ //inverter

            function repetirCaractere(caractere, numeroRepeticoes){

                let string = "";

                for(let i = 0; i < numeroRepeticoes; i++){
                    string = string.concat(caractere);
                }
                return string;
            }

            for(i = 0; i < n; i++){
                let espaco = repetirCaractere(" ", n - i + 1);
                let hashtag = repetirCaractere("#", i + 1);
                let string = espaco.concat(hashtag)       
                console.log(string)
            }
        }
        else{ //não precisa
            console.log("O número deve estar contido no intervalo entre 1 e 10.")
        }    
    }

// piramideLateral(n);

// Desafio 2 

    if(n > 1 & n <= 100){

        function somarNPrimeirosNumeros(n){

            let soma = 0;       

            for(let i = 0; i <= n; i++){
                soma += i; 
            }
            console.log(soma);
        }
    }
    else{
        console.log("O número deve estar contido no intervalo entre 1 e 100.")
    }    
    
//somarNPrimeirosNumeros(n);

// Desafio 3


    function piramideCentral(n){

        if(n > 1 & n <= 10){

            function repetirCaractere(caractere, numeroRepeticoes){

                let texto = "";

                for(let i = 0; i < numeroRepeticoes; i++){
                    texto = texto.concat(caractere);
                }
                return texto;
            }

            for(i = 0; i < n; i++){
                let espacoEsquerda = repetirCaractere(" ", n - i - 1); // dentro do for geralmente não precisa
                let hashtag = repetirCaractere("#", i + 1);
                let espacoDireita = repetirCaractere(" ", n);
                let string = espacoEsquerda.concat(hashtag)       
                let stringFinal = string.concat(hashtag)
                console.log(stringFinal)
            }
        }
        else{
            console.log("O número deve estar contido no intervalo entre 1 e 10.")
        }    
    }

// piramideCentral(n)

// Desafio 4

function somaDeMatrizes(n){

    if(n > 1 & n <= 1000){

        let array = [];

        for(let i=1; i<n; i++){
            array.push(i);
        }
        function somaTotal(){

            for(let i; i <array.length; i++){
                let total = total + array[i];
                return total;
                
            }
        }
        soma = array.reduce(somaTotal,0);
    }
    else{
        console.log("O número deve estar contido no intervalo entre 1 e 1000.")
    }    
    console.log(soma)
}
//somaDeMatrizes(n)

// Desafio 5

    if(n > 1 & n <= 100){

        function numerosFizzEBuzz(n){

            for(let i = 1; i <= n; i++){

                if(i%3!=0 & i%5!=0){
                    console.log(i)
                }
                else if(i%3==0 & i%5==0){
                    console.log("FizzBuzz");
                }
                else if(i%3==0){
                    console.log("Fizz");
                }
                else if(i%5==0){
                    console.log("Buzz");
                }
            }
        }
    }
    else{
        console.log("O número deve estar contido no intervalo entre 1 e 100.")
    }    
    numerosFizzEBuzz(n);
    