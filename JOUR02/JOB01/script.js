function citation() {
    const citationText = document.getElementById('citation').innerText;
    console.log(citationText);
}

document.getElementById('button').addEventListener('click', citation);