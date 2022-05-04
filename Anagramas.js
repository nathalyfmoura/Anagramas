var prompt = require("prompt-sync")()

console.clear()

var palavra = ""
var numero = 0

while (true) {
  legenda("Anagramas")
  console.log("Digite uma das seguintes opções : ")
  console.log(" 1. Digitar palavra \n 2. Listar os Anagramas da Palavra")
  console.log(" 3. Pesquisar Anagrama por Nº de Arranjo \n 4. Finalizar")

  var opcao = Number(prompt("Opção escolhida: "))

  if (opcao == 1) {
    incluir()
  } else if (opcao == 2) {
    lista()
  } else if (opcao == 3) {
    pesquisaArr()
  } else {
    break
  }
}
function legenda(texto) {
  console.log()
  console.log(texto)
  console.log("-".repeat(40))
}
function incluir() {
  legenda("Palavra Desejada para o Anagrama : ")
  console.log("Digite uma palavra até 6 letras , sem letras repetidas !  ")
  console.log()

  palavra = prompt("Palavra : ")

  console.log("Palavra registrada com sucesso !!")
}
function lista() {
  legenda("Lista de Anagramas :")

  numero = palavra.length

  montarArr()
}
function pesquisaArr() {
  legenda("Digite quantas posições deve ter seu arranjo : ")

  console.log("--- Arranjo entre 2 e 6 letras !! ---")

  numero = prompt("Número : ")

  montarArr()

}
function montarArr() {

  if (numero == 2) {
    ate2()
  } else if (numero == 3) {
    ate3()
  } else if (numero == 4) {
    ate4()
  } else if (numero == 5) {
    ate5()
  } else if (numero == 6) {
    ate6()
  }

  function ate2() {
    var num = 0;
    for (var i = 0; i < palavra.length; i++) {
      for (var j = 0; j < palavra.length; j++) {

        if (i != j) {
          num++;
          console.log(`${num} ${palavra.charAt(i)}${palavra.charAt(j)}`);
        }
      }
    }
  }

  function ate3() {
    var num = 0;
    for (var i = 0; i < palavra.length; i++) {
      for (var j = 0; j < palavra.length; j++) {
        for (var k = 0; k < palavra.length; k++) {
          if (i != j && i != k && j != k) {
            num++;
            console.log(`${num} ${palavra.charAt(i)}${palavra.charAt(j)}${palavra.charAt(k)}`);
          }
        }
      }
    }

  }
  function ate4() {
    num = 0;
    for (var i = 0; i < palavra.length; i++) {
      for (var j = 0; j < palavra.length; j++) {
        for (var k = 0; k < palavra.length; k++) {
          for (var l = 0; l < palavra.length; l++) {
            if (i != j && i != k && i != l && j != k && j != l && k != l) {
              num++;
              console.log(`${num} ${palavra.charAt(i)}${palavra.charAt(j)}${palavra.charAt(k)}${palavra.charAt(l)}`);
            }
          }
        }
      }
    }
  }
  function ate5() {
    num = 0;
    for (var i = 0; i < palavra.length; i++) {
      for (var j = 0; j < palavra.length; j++) {
        for (var k = 0; k < palavra.length; k++) {
          for (var l = 0; l < palavra.length; l++) {
            for (var m = 0; m < palavra.length; m++)
              if (i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                num++;
                console.log(`${num} ${palavra.charAt(i)}${palavra.charAt(j)}${palavra.charAt(k)}${palavra.charAt(l)}${palavra.charAt(m)}`);
              }
          }
        }
      }
    }
  }
  function ate6() {
    num = 0;
    for (var i = 0; i < palavra.length; i++) {
      for (var j = 0; j < palavra.length; j++) {
        for (var k = 0; k < palavra.length; k++) {
          for (var l = 0; l < palavra.length; l++) {
            for (var m = 0; m < palavra.length; m++) {
              for (var n = 0; n < palavra.length; n++) {
                if (i != j && i != k && i != l && i != m && i != n && j != k && j != l && j != m && j != n && k != l && k != m && k != n && l != m && l != n && m != n) {
                  num++;
                  console.log(`${num} ${palavra.charAt(i)}${palavra.charAt(j)}${palavra.charAt(k)}${palavra.charAt(l)}${palavra.charAt(m)}${palavra.charAt(n)}`);
                }
              }
            }
          }
        }
      }
    }
  }
}