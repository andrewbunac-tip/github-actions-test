# File Encryption and Decyption 

## To Encrypt 
```BASH
    gpg --symmetric --cipher-algo AES256 secret.json
```
Note: This will ask you a passphrase promt

## To Decrypt
```BASH
    udemy % gpg --decrypt --passphrase="<YOUR_PASSPHRASE>" --output decrypted.json secret.json.gpg
```