<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas Pertemuan 1 - Struktur Kendali & Form</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .form-group { margin-bottom: 15px; }
        .result { margin-top: 20px; padding: 15px; background-color: #f0f8ff; border: 1px solid #ccc; }
    </style>
</head>
<body>

    <h2>Form Input Nilai Ujian</h2>
    
    <!-- Form dengan method POST sesuai materi video -->
    <form method="POST" action="">
        <div class="form-group">
            <label for="nama">Nama:</label><br>
            <input type="text" id="nama" name="nama" required>
        </div>

        <div class="form-group">
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required>
        </div>

        <div class="form-group">
            <label for="nilai">Nilai Ujian:</label><br>
            <input type="number" id="nilai" name="nilai" min="0" max="100" required>
        </div>

        <!-- Tombol submit dengan name="proses" untuk pengecekan isset -->
        <input type="submit" name="proses" value="Kirim Data">
    </form>

    <?php
    // Cek apakah tombol dengan name="proses" sudah diklik (sesuai materi Video 2 Bagian 3)
    if (isset($_POST['proses'])) {
        
        // 1. Ambil data dari form menggunakan $_POST
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $nilai = $_POST['nilai'];

        // 2. Struktur Kendali (If-Else) sesuai instruksi
        // Catatan: Saya gunakan >= 70 agar nilai tepat 70 juga dianggap Lulus (best practice)
        if ($nilai >= 70) {
            $status = "Lulus";
        } else {
            $status = "Remedial";
        }

        // 3. Tampilkan output ke dalam halaman browser
        echo "<div class='result'>";
        echo "<h3>Hasil Penilaian:</h3>";
        echo "<p><strong>Nama:</strong> $nama</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo "<p><strong>Nilai Ujian:</strong> $nilai</p>";
        echo "<p><strong>Status:</strong> <span style='color: blue; font-weight: bold;'>$status</span></p>";
        echo "</div>";
    }
    ?>

</body>
</html>