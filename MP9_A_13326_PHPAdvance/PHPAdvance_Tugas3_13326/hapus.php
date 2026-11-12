<?php
    require 'koneksi.php';

    $id = $_GET['id'] ?? '';

    if ($id !== '' && ctype_digit($id)) {
        $stmt = mysqli_prepare($conn, 'DELETE FROM mahasiswa WHERE id = ?');
        mysqli_stmt_bind_param($stmt, 'i', $id);
        mysqli_stmt_execute($stmt);

        echo '<p>Data berhasil dihapus.</p>';
    } else {
        echo '<p>ID tidak valid.</p>';
    }

    echo '<a href="index.php">Kembali</a>';
?>