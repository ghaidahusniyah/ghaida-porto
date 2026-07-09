#include <stdio.h>
#include <math.h> // Library tambahan untuk fungsi matematika (isfinite)

int main() {
    int pilihan;
    double angka1, angka2, hasil;

    // Tampilkan menu operasi
    printf("Pilih operasi matematika:\n");
    printf("1. Penjumlahan\n2. Pengurangan\n3. Perkalian\n4. Pembagian\n");
    printf("Masukkan pilihan Anda (1-4): ");
    scanf("%d", &pilihan);

    // Input dua angka
    printf("Masukkan angka pertama: ");
    scanf("%lf", &angka1);
    printf("Masukkan angka kedua: ");
    scanf("%lf", &angka2);

    // Switch-case untuk operasi
    switch (pilihan) {
        case 1:
            hasil = angka1 + angka2;
            printf("Hasil: ");
            break;
        case 2:
            hasil = angka1 - angka2;
            printf("Hasil: ");
            break;
        case 3:
            hasil = angka1 * angka2;
            printf("Hasil: ");
            break;
        case 4:
            if (angka2 != 0) {
                hasil = angka1 / angka2;
                printf("Hasil: ");
            } else {
                printf("Error: Pembagian dengan nol tidak diperbolehkan.\n");
                return 1; // Akhiri program jika error
            }
            break;
        default:
            printf("Error: Pilihan tidak valid.\n");
            return 1; // Akhiri program jika pilihan salah
    }

    // Cek apakah hasil bilangan bulat atau desimal
    if (hasil == (int)hasil) {
        // Jika hasil bilangan bulat
        printf("%d\n", (int)hasil);
    } else {
        // Jika hasil bilangan desimal
        printf("%.2lf\n", hasil);
    }

    return 0;
}
