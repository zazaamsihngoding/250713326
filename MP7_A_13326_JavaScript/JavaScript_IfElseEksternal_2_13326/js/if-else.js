var iNilai;
var sHadir;

iNilai = prompt("Masukkan Nilai Ujian (0-100).", 0);
sHadir = prompt("Kehadiran Minimal 75%? (Y)a atau (T)idak", "Y");

if (iNilai >= 75) {
    if (sHadir == "Y") {
        alert("Lulus dengan kehadiran memenuhi syarat"); 
    } else {
    alert("Nilai Lulus, Tetapi kehadiran kurang");
   }
} else {
    if (sHadir == "Y") {
        alert("Nilai Belum Cukup, ikuti remedial");
    } else {
        alert("Nilai dan kehadiran belum cukup");
    }
}