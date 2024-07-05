// document
//   .getElementById("loginForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Mencegah formulir dikirimkan secara default

//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     // Validasi sederhana (Anda dapat mengganti ini dengan validasi yang lebih kompleks)
//     if (username === "user" && password === "password") {
//       document.getElementById("loginStatus").innerText = "Login successful!";
//       // Alihkan ke halaman lain atau lakukan tindakan yang diinginkan
//     } else {
//       document.getElementById("loginStatus").innerText =
//         "Invalid username or password.";
//     }
//   });

function cekLog() {
  document.getElementById("loginStatus").innerText = "Cek Lagi ada yang salah";
  var username_input = document.getElementById("username").value;

  // Set localStorage terlebih dahulu
  let users = [
    {
      name: "BADAN PENDAPATAN, PENGELOLAAN KEUANGAN DAN ASET DAERAH",
      username: "bppkad",
      password: "password_bppkad",
      id_role: "2",
      is_active: "1",
      akronim: "BPPKAD",
      link_bi:
        "https://drive.google.com/drive/folders/1KYZqvRInJiTl96wgW3QITrDBQIubQESG?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1ZfyuuM0DJafRR7Ws0T3FTJbeJi95QvcT?usp=drive_link",
    },
    {
      name: "KECAMATAN SAMPANG",
      username: "kec_sampang",
      password: "password_kec_sampang",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. SAMPANG",
      link_bi:
        "https://drive.google.com/drive/folders/13MCzLS6jH_nVpW-eXcVOVkvdPQIJqoQ8?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1Mh6EU7rAoX8zxj20EOnNIuB3UVXQJ250?usp=drive_link",
    },
    {
      name: "SEKRETARIAT DAERAH",
      username: "setda",
      password: "password_setda",
      id_role: "2",
      is_active: "1",
      akronim: "SETDA",
      link_bi:
        "https://drive.google.com/drive/folders/1b2f1qAzTwkuJAw1u8nntqq-wgwfYONU7?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/19x-mtEE3BzeeVAosbNAlQMuTOLmNh_zt?usp=drive_link",
    },
    {
      name: "SEKRETARIAT DPRD",
      username: "setwan",
      password: "password_setwan",
      id_role: "2",
      is_active: "1",
      akronim: "SETWAN",
      link_bi:
        "https://drive.google.com/drive/folders/1iap_VsZMZwpNMykh48ncVPTxr2lnIt-D?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1V1VZATBAYWolm53MMWlOL5jDOayqTJof?usp=drive_link",
    },
    {
      name: "INSPEKTORAT DAERAH",
      username: "itda",
      password: "password_itda",
      id_role: "2",
      is_active: "1",
      akronim: "ITDA",
      link_bi:
        "https://drive.google.com/drive/folders/13KnErmabDLJCVj3FzAentyoh4paK_GNQ?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1DCXGMVHcIgte2gwHWYGpqhv3rn_NFB4w?usp=drive_link",
    },
    {
      name: "DINAS PENDIDIKAN",
      username: "disdik",
      password: "password_disdik",
      id_role: "2",
      is_active: "1",
      akronim: "DISDIK",
      link_bi:
        "https://drive.google.com/drive/folders/1Xe3-QSM3kv2tXOJgGteu668kKs1cVprV?usp=sharing",
      link_stock:
        "https://drive.google.com/drive/folders/1vwT9UYPhO354xqMqv-OB_PxZaSyMCCM3?usp=sharing",
    },
    {
      name: "DINAS PEMUDA, OLAH RAGA, KEBUDAYAAN DAN PARIWISATA",
      username: "disporabudpar",
      password: "password_disporabudpar",
      id_role: "2",
      is_active: "1",
      akronim: "DISPORABUDPAR",
      link_bi:
        "https://drive.google.com/drive/folders/1y9oKcIdIBLbzxKPvoJDTUhl3nFXY9hCq?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1Rdjdad0a1Ka7UR4aPec-IjvKtD4eIuop?usp=drive_link",
    },
    {
      name: "DINAS KESEHATAN DAN KB",
      username: "dinkes",
      password: "password_dinkes",
      id_role: "2",
      is_active: "1",
      akronim: "DINKES KB",
      link_bi:
        "https://drive.google.com/drive/folders/14S2YCBYLwkjZRf6RPKposmdn6DDRkA8Z?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1EUvBy9rPMuql6bmn7Hfuu7jAb6TPmV0I?usp=drive_link",
    },
    {
      name: "DINAS SOSIAL PPPA",
      username: "dinsos",
      password: "password_dinsos",
      id_role: "2",
      is_active: "1",
      akronim: "DINSOS PPPA",
      link_bi:
        "https://drive.google.com/drive/folders/1z5hA9J4P_t8jq1IKbrVuBZXENK3DNZe5?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1HGqpgy8y31_u5f5DNXsmpCtyq71CN-Oo?usp=drive_link",
    },
    {
      name: "DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL",
      username: "dispendukcapil",
      password: "password_dispendukcapil",
      id_role: "2",
      is_active: "1",
      akronim: "DISPENDUK CAPIL",
      link_bi:
        "https://drive.google.com/drive/folders/1oENUuBZo3yi3y-1jAP1kMa4UYnpojrr5?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1aRCQee_FsdZ1w_eKfVzT2KbQNczJx8nq?usp=drive_link",
    },
    {
      name: "DINAS PEMBERDAYAAN MASYARAKAT DAN DESA",
      username: "dpmd",
      password: "password_dpmd",
      id_role: "2",
      is_active: "1",
      akronim: "DPMD",
      link_bi:
        "https://drive.google.com/drive/folders/1SSvz3kAN6DjROlM6pCCHo59AdNNCQaDD?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1BMkmaLCt7YCp1tFYDXNhPgVN-a2ZuSyu?usp=drive_link",
    },
    {
      name: "DINAS PU DAN PENATAAN RUANG",
      username: "dpupr",
      password: "password_dpupr",
      id_role: "2",
      is_active: "1",
      akronim: "DPUPR",
      link_bi:
        "https://drive.google.com/drive/folders/11p9KJmNXMK6dhM70XF6EEjKwvIxgskAl?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1iIAIIV2PtZrfp4hX0QWvvHqxoa4N1Bwa?usp=drive_link",
    },
    {
      name: "DINAS PERHUBUNGAN",
      username: "dishub",
      password: "password_dishub",
      id_role: "2",
      is_active: "1",
      akronim: "DISHUB",
      link_bi:
        "https://drive.google.com/drive/folders/1NECfQrXucaZonhMkxkltw3r_qPk7NQo8?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1mFZ_Nh4SgKg_37phxV1fZaUsiWs4Txfz?usp=drive_link",
    },
    {
      name: "SATUAN POLISI PAMONG PRAJA DAN PERLINDUNGAN MASYARAKAT",
      username: "satpolpp",
      password: "password_satpolpp",
      id_role: "2",
      is_active: "1",
      akronim: "SATPOLPP DAN LINMAS",
      link_bi:
        "https://drive.google.com/drive/folders/1MMsgPbhyjIKvDKPWilo_wOjkIMONQgYq?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1EyC0KZoaLmzX3__-ckSxX-NPzCZ2oQCu?usp=drive_link",
    },
    {
      name: "DINAS PEMADAM KEBAKARAN DAN PENYELAMATAN DAERAH",
      username: "disdamkar",
      password: "password_disdamkar",
      id_role: "2",
      is_active: "1",
      akronim: "DISDAMKAR PD",
      link_bi:
        "https://drive.google.com/drive/folders/1q7CF_zWXMGAa8mc0qGxrTJOSwLBFp-eb?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1Gguy1jpQILkrGUBEXcaFufkA3QouvrDH?usp=drive_link",
    },
    {
      name: "DINAS PENANAMAN MODAL DAN PELAYANAN TERPADU SATU PINTU",
      username: "dpmptsp",
      password: "password_dpmptsp",
      id_role: "2",
      is_active: "1",
      akronim: "DPMPTSP",
      link_bi:
        "https://drive.google.com/drive/folders/1IvGueO5eROAqeOujmr7KA93YaQVT8os_?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1bGMYS7OTUk-pliSbBrE_oDUPexQEXS17?usp=drive_link",
    },
    {
      name: "DINAS TENAGA KERJA",
      username: "disnaker",
      password: "password_disnaker",
      id_role: "2",
      is_active: "1",
      akronim: "DISNAKER",
      link_bi:
        "https://drive.google.com/drive/folders/1JLD74P7-fxSmvtpJfrZUBvn9Z6AoHY01?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1RlPTUafLufyY02w_8wEZDy7sLy0mgpPv?usp=drive_link",
    },
    {
      name: "DINAS KOPERASI, PERINDUSTRIAN DAN PERDAGANGAN",
      username: "diskopindag",
      password: "password_diskopindag",
      id_role: "2",
      is_active: "1",
      akronim: "DISKOPINDAG",
      link_bi:
        "https://drive.google.com/drive/folders/13KcnnAyVtempW4tMFcxiLrqpc3-Bn6Uj?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1xggUHpN0UMzTO9-M4G3CKXLPgtX2IRbs?usp=drive_link",
    },
    {
      name: "DINAS KOMUNIKASI DAN INFORMATIKA",
      username: "diskominfo",
      password: "password_diskominfo",
      id_role: "2",
      is_active: "1",
      akronim: "DISKOMINFO",
      link_bi:
        "https://drive.google.com/drive/folders/1NCC1WM7i-Zj2uDE_7tvLNVYazVByxg1O?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1pNWaMIuawP-4dRFZjpC-fdRv1Ff883W8?usp=drive_link",
    },
    {
      name: "DINAS PERTANIAN DAN KETAHANAN PANGAN",
      username: "dispertakp",
      password: "password_dispertakp",
      id_role: "2",
      is_active: "1",
      akronim: "DISPERTAKP",
      link_bi:
        "https://drive.google.com/drive/folders/117oe0-20QyUG0Sim3KHs35_LnppNe4Fk?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1MyxC9VziDzKQswhJYRwwXLuCd18iB80K?usp=drive_link",
    },
    {
      name: "DINAS PERIKANAN",
      username: "diskan",
      password: "password_diskan",
      id_role: "2",
      is_active: "1",
      akronim: "DISKAN",
      link_bi:
        "https://drive.google.com/drive/folders/1MY0PHjMpkmNI-npuz8J84hVeS7pLb74f?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1GVnV1mlovoL7cKBtAJcZCZhsWPrzaFIz?usp=drive_link",
    },
    {
      name: "DINAS LINGKUNGAN HIDUP, PERUMAHAN RAKYAT DAN PERMUKIMAN",
      username: "dlhperkim",
      password: "password_dlhperkim",
      id_role: "2",
      is_active: "1",
      akronim: "DLH PERKIM",
      link_bi:
        "https://drive.google.com/drive/folders/1w0NXF9rw0NPc5B54WbprrMT3kLe6qssy?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1Tm1Lu2_yHSzvs3VhvmxfbtAIMrnGaLyD?usp=drive_link",
    },
    {
      name: "DINAS KEARSIPAN DAN PERPUSTAKAAN",
      username: "dispusip",
      password: "password_dispusip",
      id_role: "2",
      is_active: "1",
      akronim: "DISPUSIP",
      link_bi:
        "https://drive.google.com/drive/folders/1QhnmmgcFc6VmB_Rwt1qnzV-8DqXUuIyO?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1CYfzLS5mYXxCAbJkXrjtCnYFqAwW7OEF?usp=drive_link",
    },
    {
      name: "BADAN PERENCANAAN PEMBANGUNAN, PENELITIAN DAN PEMBANGUNAN DAERAH",
      username: "bappelitbangda",
      password: "password_bappelitbangda",
      id_role: "2",
      is_active: "1",
      akronim: "BAPPELITBANGDA",
      link_bi:
        "https://drive.google.com/drive/folders/1iDZ6ABJwrUdLrM8BB5cNq_KIEgw8JuMJ?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1LJEcmuYd6Aet7W1EGaPWMD-ZMaLjPyYW?usp=drive_link",
    },
    {
      name: "BADAN KEPEGAWAIAN DAN PENGEMBANGAN SUMBER DAYA MANUSIA",
      username: "bkpsdm",
      password: "password_bkpsdm",
      id_role: "2",
      is_active: "1",
      akronim: "BKPSDM",
      link_bi:
        "https://drive.google.com/drive/folders/1zlTTl6hdroC791WtvT7Z9D88R9AvqeeC?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1l1ACUPDTtWvTt41bZw1tfHTPlpMkvsOV?usp=drive_link",
    },
    {
      name: "BADAN KESATUAN BANGSA DAN POLITIK",
      username: "bakesbangpol",
      password: "password_bakesbangpol",
      id_role: "2",
      is_active: "1",
      akronim: "BAKESBANGPOL",
      link_bi:
        "https://drive.google.com/drive/folders/1bGMf2vIdOtdZaphv9_wxxOZFxmpufqdB?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1LhNRQeoBZ-Pv38xbC0JcjaftXo6e7hGW?usp=drive_link",
    },
    {
      name: "BADAN PENANGGULANGAN BENCANA DAN PENYELAMATAN DAERAH",
      username: "bpbd",
      password: "password_bpbd",
      id_role: "2",
      is_active: "1",
      akronim: "BPBD PD",
      link_bi:
        "https://drive.google.com/drive/folders/1fxKYEp7yLZ18-4s5RJy3tX0a0WTmN5hR?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/159_uB0nSpURTr76ExFrwWnGbuPqWgVrt?usp=drive_link",
    },
    {
      name: "RSUD dr. MOHAMMAD ZYN",
      username: "rsud_mohzyn",
      password: "password_rsud_mohzyn",
      id_role: "2",
      is_active: "1",
      akronim: "RSUD MOH. ZYN",
      link_bi:
        "https://drive.google.com/drive/folders/1m-JL6zA6gtWNNqgRsy3Ml-k7ZkIxPz8L?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1Okj-XdczBioy0n9cZJsFcqAQFVnQXuoA?usp=drive_link",
    },
    {
      name: "RSD KETAPANG",
      username: "rs_ketapang",
      password: "password_rs_ketapang",
      id_role: "2",
      is_active: "1",
      akronim: "RSD KETAPANG",
      link_bi:
        "https://drive.google.com/drive/folders/1QlyF6gkOnxgX-5bt6FPqchnvLFjI83aB?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1T27MDoNJ0lfzl-su38cpxFvHC6ZMB8o4?usp=drive_link",
    },
    {
      name: "KECAMATAN OMBEN",
      username: "kec_omben",
      password: "password_kec_omben",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. OMBEN",
      link_bi:
        "https://drive.google.com/drive/folders/1V01rRnCVIsx1cEc7ZTG2ZDS3QBCe0sco?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1U6kjB9V7Hb4CnpDTetv_OIzTPlDiLtcG?usp=drive_link",
    },
    {
      name: "KECAMATAN CAMPLONG",
      username: "kec_camplong",
      password: "password_kec_camplong",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. CAMPLONG",
      link_bi:
        "https://drive.google.com/drive/folders/1wVJqtFD7XVIbbY_RbuHqpgiWAAyqSUeH?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/12BvjSdsKRtQpKEvPeUzI-6_O6vvaYH6R?usp=drive_link",
    },
    {
      name: "KECAMATAN TORJUN",
      username: "kec_torjun",
      password: "password_kec_torjun",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. TORJUN",
      link_bi:
        "https://drive.google.com/drive/folders/1eJx_lqt8PsmLV5YiYXR3e1KkZSMYxzti?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1geuhw83hVfYCuTiqGDxPmSVsl2j5TPDz?usp=drive_link",
    },
    {
      name: "KECAMATAN PANGARENGAN",
      username: "kec_pangarengan",
      password: "password_kec_pangarengan",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. PANGARENGAN",
      link_bi:
        "https://drive.google.com/drive/folders/1b-7ArXX3h1VR6bvtqx8gnVRSX4S-EyjS?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1z7MWEQ4llRPavgqlwvZAte0flwIzDGKm?usp=drive_link",
    },
    {
      name: "KECAMATAN JRENGIK",
      username: "kec_jrengik",
      password: "password_kec_jrengik",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. JRENGIK",
      link_bi:
        "https://drive.google.com/drive/folders/14hs9dclSbA4czHzdU8ZnBPfK9ZJJ_K_N?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1hgUb4LMy1UfH-Ak0xUEw4JB6D-xL7S_7?usp=drive_link",
    },
    {
      name: "KECAMATAN SRESEH",
      username: "kec_sreseh",
      password: "password_kec_sreseh",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. SRESEH",
      link_bi:
        "https://drive.google.com/drive/folders/1lBkZW5cHzdzdC2FLGJKNhhOM20OQlEwS?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/102R7InMc2PcKOWoAegJ-Pu-zUGZrMyFi?usp=drive_link",
    },
    {
      name: "KECAMATAN TAMBELANGAN",
      username: "kec_tambelangan",
      password: "password_kec_tambelangan",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. TAMBELANGAN",
      link_bi:
        "https://drive.google.com/drive/folders/1D34bwMycWlCPLFlGumKiHaFeLPckGm1V?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1dwFe3nne_y8XaEY38lRMWbQIJ5J3DqN4?usp=drive_link",
    },
    {
      name: "KECAMATAN KEDUNGDUNG",
      username: "kec_kedungdung",
      password: "password_kec_kedungdung",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. KEDUNGDUNG",
      link_bi:
        "https://drive.google.com/drive/folders/1WdniRFpmM4LZy-t6UuGB19C5ltLICLww?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/15axdwBUtoc6jAja-SeOo4UFNsL897kRl?usp=drive_link",
    },
    {
      name: "KECAMATAN ROBATAL",
      username: "kec_robatal",
      password: "password_kec_robatal",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. ROBATAL",
      link_bi:
        "https://drive.google.com/drive/folders/1O6Xfi9NeeJRq8bq09H7bCCUfNzdTKpp2?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1iovLkdychZ6C-kOisq92cpzX-vVhiiMi?usp=drive_link",
    },
    {
      name: "KECAMATAN KARANG PENANG",
      username: "kec_krpenang",
      password: "password_kec_krpenang",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. KR PENANG",
      link_bi:
        "https://drive.google.com/drive/folders/1L84rsadsTcB9ytXOU62UzwU7SmEyKUab?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1J-EZq7EgINDfj_jvTuOHUMSwosYsuYxE?usp=drive_link",
    },
    {
      name: "KECAMATAN KETAPANG",
      username: "kec_ketapang",
      password: "password_kec_ketapang",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. KETAPANG",
      link_bi:
        "https://drive.google.com/drive/folders/1n8wvmK6kM69MkI4noagkf7K8RfIWaeyi?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1OlHPSVa5PSEHN0vwWMkJ8pGBgmQhvcUy?usp=drive_link",
    },
    {
      name: "KECAMATAN BANYUATES",
      username: "kec_banyuates",
      password: "password_kec_banyuates",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. BANYUATES",
      link_bi:
        "https://drive.google.com/drive/folders/1B3gBKFOaaIf0MPD6IcQSSVDQ_ybs5njp?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1do9ztST3TfUM9Hl6QFuXXu_1_yv3eMVy?usp=drive_link",
    },
    {
      name: "KECAMATAN SOKOBANAH",
      username: "kec_sokobanah",
      password: "password_kec_sokobanah",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. SOKOBANAH",
      link_bi:
        "https://drive.google.com/drive/folders/1SfU_kiEFIGg52GneVEdneB6UK3x-His-?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1e1a87d-AlVbhf1gg4l5S7FsNKR2tSQPS?usp=drive_link",
    },
  ];
  // Menyimpan array objek sebagai string JSON
  localStorage.setItem("users", JSON.stringify(users));

  // Cek apa ada data dengan username yang diinput
  let storedUsers = localStorage.getItem("users");
  if (storedUsers) {
    let usersArray = JSON.parse(storedUsers);

    let user = usersArray.find((user) => user.username === username_input);

    if (user) {
      // hasil.innerHTML = `Name: ${user.name} <br/> Akronim: ${user.akronim}<br/> Link BI: <a href="${user.link_bi}" target="_blank">Klik Disini</a> <br/> Link Persediaan: <a href="${user.link_stock}" target="_blank">Klik Disini</a>`;
      cekPassword(user);
    } else {
      localStorage.removeItem("users");
      localStorage.clear();
      document.getElementById("loginStatus").innerText =
        "Username tidak ditemukan";
    }
  }

  // if (username === "user" && password === "password") {
  //   document.getElementById("loginStatus").innerText = "Login successful!";
  //   // Menyimpan status log in di localStorage
  //   localStorage.setItem("loggedIn", "true");
  //   // Alihkan ke halaman lain
  //   window.location.href = "dashboard.html";
  //   //   kosongkan field
  //   document.getElementById("username").value = "";
  //   document.getElementById("password").value = "";
  // } else {
  //   document.getElementById("loginStatus").innerText =
  //     "Username atau password tidak valid.";
  // }
}

function cekPassword(user) {
  var password_input = document.getElementById("password").value;
  let username_target = {
    name: user.name,
    username: user.username,
    password: user.password,
    id_role: user.id_role,
    is_active: user.is_active,
    akronim: user.akronim,
    link_bi: user.link_bi,
    link_stock: user.link_stock,
  };
  localStorage.setItem("username_target", JSON.stringify(username_target));
  localStorage.removeItem("users");
  localStorage.clear();

  // Cek apa password yang diinput sesuai
  let password_data = localStorage.getItem("username_target");
  if (password_data) {
    let pwdTgt = JSON.parse(password_data);
    let dataPwdTgt = pwdTgt.find(
      (dataPwdTgt) => dataPwdTgt.password === password_input
    );
    if (dataPwdTgt) {
      window.location.href = "dashboard.html";
    } else {
      localStorage.removeItem("username_target");
      localStorage.clear();
      document.getElementById("loginStatus").innerText = "Data Tidak ditemukan";
    }
  }
}
