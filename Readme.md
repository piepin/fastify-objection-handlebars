# Contoh Penggunaan Fastify, Objection, Handlebars dan MySQL

Ini adalah sebuah contoh aplikasi sederhana dengan NodeJS menggunakan library:

* Fastify - Web framework 
* Objection - ORM
* Handlebars - Template engine
* MySQL - Database MySQL

Tujuan proyek ini untuk belajar membuat aplikasi NodeJS dengan lebih terstruktur.

Library-library di atas saya gunakan karena tergolong populer dan banyak direkomendasikan. Selain itu penggunaan nya relatif mudah dan sederhana. 

### Database

Pada contoh ini saya menggunakan database MySQL, namun dapat diubah ke database lain dengan mengubah parameter pada Objection.

### Struktur Database

Silahkan buat dulu tabel pada database, dengan struktur sbb:

    
    CREATE TABLE `users` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `name` VARCHAR(45) NULL,
      `email` VARCHAR(45) NULL,
      PRIMARY KEY (`id`));
    
    CREATE TABLE `phone` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `user_id` INT NOT NULL,
      `phone_number` VARCHAR(15) NOT NULL,
      `description` VARCHAR(50) NULL,
      PRIMARY KEY (`id`),
      INDEX `fk_phone_1_idx` (`user_id` ASC),
      CONSTRAINT `fk_phone_1`
        FOREIGN KEY (`user_id`)
        REFERENCES `users` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION);


### Menginstal Aplikasi

    > git clone https://github.com/piepin/fastify-objection-handlebars.git
    > cd fastify-objection-handlebars
    > npm install

### Struktur Folder

Setelah repo ini diclone, maka akan didapatkan struktur folder seperti ini:
    .
    ├── connection.js
    ├── controllers
    │   ├── PhoneController.js
    │   ├── ResponseController.js
    │   └── UserController.js
    ├── models
    │   ├── PhoneModel.js
    │   └── UserModel.js
    ├── package.json
    ├── Readme.md
    ├── routes.js
    ├── server.js
    └── views
        ├── main.hbs
        └── partials
            ├── head.hbs
            └── nav.hbs

Ini merupakan contoh struktur folder yang bisa kita kembangkal lagi. Tetapi minimal di dalamnya ada folder `controllers`, `views`, `models`.             

### Menjalankan Server

    > node server.js

### Mengakses dari Client

Mencoba membaca data dalam format JSON. Sebelumnya jangan lupa untuk mengisi tabel users dan phone dengan sembarang data.

    > curl http://127.0.0.1:3100/v1/users  
    > curl http://127.0.0.1:3100/v1/users/1

Mencoba template engine, buka di browser:    
    
    http://127.0.0.1:3100/v1/users/html 
    
### Todo

* Folder static / public
* Integrasi Bootstrap
* Authentication 





