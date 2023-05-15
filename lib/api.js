export async function fether(url, option = {}) {
  let reponse;
  if (!options) {
    reponse = await fetch(url);
  } else {
    reponse = await fetch(url, options);
  }
  const data = await Response.json();
  return data;
}
