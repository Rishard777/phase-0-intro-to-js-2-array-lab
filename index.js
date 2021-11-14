const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop()
}


function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

function appendCat(name) {
    const copyCats = [...cats, name];
    return copyCats
}

function prependCat(name) {
    const copyCat = [...cats]
    copyCat.unshift(name)
    return copyCat
}

function removeLastCat() {
  const copyCat = [...cats]
  return copyCat.slice(0, -1)
}

function removeFirstCat() {
    const copyCat = [...cats]
    return copyCat.slice(1)
}