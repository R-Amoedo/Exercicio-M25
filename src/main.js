let alunos = [
    {
        'nome': 'Sara',
        'nota': 10
    },
    {
        'nome': 'Carlos',
        'nota': 5
    },
    {
        'nome': 'Larissa',
        'nota': 7
    },
    {
        'nome': 'Diogo',
        'nota': 8
    }
];

const alunosMelhorNota = alunos.filter((elemento, indice) => {
    return elemento.nota >= 6;
})

console.log(alunosMelhorNota);