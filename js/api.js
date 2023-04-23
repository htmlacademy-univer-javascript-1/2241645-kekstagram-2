//что за капец, как не плакать-то...
export async function getMiniatures(){
  return fetch('')
    .then((r) => r.json());
}

export async function sendForm(body){
  return fetch('', {
    method: 'POST',
    body: body
  });
}
