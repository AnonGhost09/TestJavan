# TestJavan

<h1>SETUP NODE</h1>
<ol>
    <li>Clone projectnya git clone (URL REPO) </li>
    <li>Masuk ke folder TestJavan <strong>cd TestJavan</strong></li>
    <li>Masukan perintah <strong>npm install</strong> di dalam terminal</li>
    <li>Masukan perintah <strong>npm audit fix --force</strong></li>
</ol>

<h1>SETUP PRISMA</h1>
<ol>
    <li>Masuk ke file .env</li>
    <li>Ganti settingan database di DATABASE_URL dengan settingan kalian</li>
    <strong>contoh : </strong>
    <ul>
        <li>(YOUR_USER_DB) ganti dengan postgres</li>
        <li>(YOUR_PASSWORD) ganti dengan 12345</li>
        <li>(YOUR_HOST) ganti dengan localhost</li>
        <li>(YOUR_PORT) ganti dengan 5432</li>
        <li>(YOUR_DB_NAME) ganti dengan testjavan</li>
    </ul>
    <li>
        Masuk terminal jalankan perintah <strong>npx prisma migrate dev --name init</strong>
        untuk membuat database dan migration secara automatis
    </li>
    <li>
        Lalu jalankan lagi perintah <strong>npx prisma db seed</strong> maka data yang default akan dimasukan
    </li>
    <li>
        Jalankan aplikasi dengan perintah <strong>npm run start</strong>
    </li>
</ol>

<h1>Panduan pemakaian</h1>
<ul>
    <li>Buka file <strong>TestJavanERD.pdf</strong> untuk melihat design databasenya</li>
     <li>Buka file <strong>PostmanLinkDOcumentation.txt</strong> untuk melihat documentasi dari tiap endpoint yang ada</li>
</ul>
