document.getElementById('encryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = encrypt(inputText);
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = decrypt(inputText);
    document.getElementById('outputText').value = decryptedText;
});

function encrypt(text) {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        encrypted += String.fromCharCode(text.charCodeAt(i) + 3);
    }
    return encrypted;
}

function decrypt(text) {
    let decrypted = '';
    for (let i = 0; i < text.length; i++) {
        decrypted += String.fromCharCode(text.charCodeAt(i) - 3);
    }
    return decrypted;
}
