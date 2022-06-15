const cincoMil = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise cincoMil resolvida"), 5000);
  });

const mil = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise mil resolvida"), 1000);
  });

const quinhentos = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise quinhentos resolvida"), 500);
  });

const cem = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise cem resolvida"), 100);
  });

const resolvedoraDePromisesAssincronas = async () => {
    const resultado1 = await cincoMil();
    console.log('Aqui');
    const resultado2 = await quinhentos();
    console.log('Aqui');
    const resultado3 = await cem();
    console.log('Aqui');
  const resultado4 = await mil();

  console.log(`Mensagens: \n${resultado1} \n${resultado2} \n${resultado3} \n${resultado4}`);
};

resolvedoraDePromisesAssincronas();
