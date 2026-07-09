/* REBRAND: ganti nama/tagline/warna di sini. Fitur dari _engine (dibagi). */
window.APP = {
  "id": "planner-Vektor",
  "nama": "Vektor",
  "tagline": "Kemudikan bisnismu dengan sengaja",
  "logo": "",
  "modul": [
    "beranda",
    "fokus",
    "checklist",
    "ritme",
    "pendapatan",
    "klien",
    "invoice",
    "sasaran",
    "kalender",
    "pustaka",
    "jurnal",
    "catatan",
    "tinjau",
    "skor",
    "tantangan",
    "pencapaian",
    "cetak",
    "panduan"
  ],
  "labels": {
    "beranda": "Beranda",
    "fokus": "Fokus Hari Ini",
    "checklist": "Checklist & Tugas",
    "ritme": "Ritme",
    "sasaran": "Sasaran",
    "kalender": "Kalender",
    "pustaka": "Pustaka",
    "jurnal": "Jurnal",
    "catatan": "Catatan",
    "tinjau": "Tinjauan",
    "skor": "Skor Bisnis",
    "tantangan": "Tantangan",
    "pencapaian": "Pencapaian",
    "cetak": "Studio Cetak",
    "panduan": "Panduan",
    "pendapatan": "Arus Kas",
    "klien": "Pipeline Klien",
    "invoice": "Invoice"
  },
  "navGroups": [
    {
      "label": "Hari Ini",
      "ids": [
        "beranda",
        "fokus",
        "checklist",
        "ritme"
      ]
    },
    {
      "label": "Bisnis",
      "ids": [
        "pendapatan",
        "klien",
        "invoice"
      ]
    },
    {
      "label": "Rencana",
      "ids": [
        "sasaran",
        "kalender",
        "pustaka"
      ]
    },
    {
      "label": "Refleksi",
      "ids": [
        "jurnal",
        "catatan",
        "tinjau"
      ]
    },
    {
      "label": "Progres",
      "ids": [
        "skor",
        "tantangan",
        "pencapaian",
        "cetak",
        "panduan"
      ]
    }
  ],
  "ai": {
    "provider": "gemini",
    "model": "gemini-2.0-flash"
  },
  "spec": {
    "onboardHabits": [
      {
        "nama": "Deep work proyek utama 2 jam",
        "domain": "produk",
        "p": 0.6
      },
      {
        "nama": "Outreach/jualan 5 kontak",
        "domain": "marketing",
        "p": 0.52
      },
      {
        "nama": "Cek angka & pipeline",
        "domain": "revenue",
        "p": 0.66
      },
      {
        "nama": "Bikin 1 konten",
        "domain": "marketing",
        "p": 0.58
      },
      {
        "nama": "Rapikan 1 SOP/sistem",
        "domain": "operasi",
        "p": 0.45
      }
    ],
    "onboardRoutine": {
      "nama": "Rutinitas Pagi",
      "waktu": "pagi",
      "items": [
        "Mulai dengan tenang",
        "Tetapkan 1 niat utama",
        "Siapkan yang dibutuhkan hari ini"
      ]
    },
    "habitPacks": [
      {
        "nama": "Paket Produk",
        "icon": "flame",
        "warna": "#38bdf8",
        "habits": [
          {
            "nama": "Deep work proyek utama 2 jam",
            "domain": "produk"
          }
        ]
      },
      {
        "nama": "Paket Marketing",
        "icon": "flame",
        "warna": "#fb7185",
        "habits": [
          {
            "nama": "Outreach/jualan 5 kontak",
            "domain": "marketing"
          },
          {
            "nama": "Bikin 1 konten",
            "domain": "marketing"
          }
        ]
      },
      {
        "nama": "Paket Pendapatan",
        "icon": "flame",
        "warna": "#fbbf24",
        "habits": [
          {
            "nama": "Cek angka & pipeline",
            "domain": "revenue"
          }
        ]
      }
    ],
    "goalTemplates": [
      {
        "judul": "MRR Rp30 juta",
        "domain": "revenue",
        "horizon": "kuartal",
        "sub": [
          "Naikkan harga paket",
          "Tawarkan retainer bulanan",
          "Closing 5 klien baru",
          "Kurangi churn"
        ]
      },
      {
        "judul": "Sistemkan onboarding klien",
        "domain": "operasi",
        "horizon": "bulan",
        "sub": [
          "Buat template & checklist",
          "Otomasi email",
          "Rekam video panduan"
        ]
      },
      {
        "judul": "Bangun audiens 10k",
        "domain": "marketing",
        "horizon": "tahun",
        "sub": [
          "Konten 3×/minggu konsisten",
          "1 lead magnet"
        ]
      }
    ],
    "kind": "business",
    "kindLabel": "solopreneur/pemilik usaha",
    "scoreLabel": "Skor Bisnis",
    "wheelLabel": "Roda Bisnis",
    "heroTitle": "Sibuk itu mudah.<br>Progres yang butuh arah.",
    "heroSub": "Fokus pada sedikit hal yang benar-benar menggerakkan bisnis.",
    "niatPh": "Fokus bisnis hari ini… mis. Kontak 5 calon klien",
    "goalPh": "mis. Omzet Rp50jt/bulan",
    "domains": [
      {
        "key": "revenue",
        "label": "Pendapatan",
        "color": "#fbbf24"
      },
      {
        "key": "produk",
        "label": "Produk",
        "color": "#38bdf8"
      },
      {
        "key": "marketing",
        "label": "Marketing",
        "color": "#fb7185"
      },
      {
        "key": "operasi",
        "label": "Operasi",
        "color": "#2dd4bf"
      },
      {
        "key": "diri",
        "label": "Diri (Founder)",
        "color": "#a78bfa"
      }
    ],
    "seedBrain": {
      "nama": "Founder",
      "peran": "solopreneur jasa/produk digital",
      "musim": "Tahun Naik Kelas",
      "nilai": [
        "fokus",
        "integritas",
        "tumbuh"
      ],
      "fokus": "naikkan pendapatan berulang & sistemkan operasi",
      "tantangan": "kejebak kerja teknis, lupa strategi"
    },
    "seedHabits": [
      {
        "nama": "Deep work proyek utama 2 jam",
        "domain": "produk",
        "p": 0.6
      },
      {
        "nama": "Outreach/jualan 5 kontak",
        "domain": "marketing",
        "p": 0.52
      },
      {
        "nama": "Cek angka & pipeline",
        "domain": "revenue",
        "p": 0.66
      },
      {
        "nama": "Bikin 1 konten",
        "domain": "marketing",
        "p": 0.58
      },
      {
        "nama": "Rapikan 1 SOP/sistem",
        "domain": "operasi",
        "p": 0.45
      },
      {
        "nama": "Olahraga (jaga stamina)",
        "domain": "diri",
        "p": 0.5
      }
    ],
    "seedGoals": [
      {
        "judul": "MRR Rp30 juta",
        "domain": "revenue",
        "horizon": "kuartal",
        "kenapa": "arus kas stabil & bisa nyewa tim",
        "sub": [
          "Naikkan harga paket",
          "Tawarkan retainer bulanan",
          "Closing 5 klien baru",
          "Kurangi churn"
        ],
        "doneN": 1,
        "deadline": "2026-09-28"
      },
      {
        "judul": "Sistemkan onboarding klien",
        "domain": "operasi",
        "horizon": "bulan",
        "kenapa": "hemat waktu, klien happy",
        "sub": [
          "Buat template & checklist",
          "Otomasi email",
          "Rekam video panduan"
        ],
        "doneN": 1
      },
      {
        "judul": "Bangun audiens 10k",
        "domain": "marketing",
        "horizon": "tahun",
        "sub": [
          "Konten 3×/minggu konsisten",
          "1 lead magnet"
        ],
        "doneN": 1
      }
    ],
    "checklistTemplates": [
      {
        "jenis": "rutinitas",
        "nama": "Ritual CEO Pagi",
        "waktu": "pagi",
        "icon": "briefcase",
        "warna": "#0eab99",
        "items": [
          "Tinjau 3 metrik kunci",
          "Tetapkan 1 hal terpenting hari ini",
          "Balas pesan penting saja"
        ]
      },
      {
        "jenis": "proyek",
        "nama": "Luncurkan Produk Baru",
        "waktu": null,
        "icon": "rocket",
        "warna": "#2f6fed",
        "items": [
          "Validasi ide ke 5 calon pembeli",
          "Tetapkan harga & penawaran",
          "Siapkan materi jualan",
          "Soft launch ke audiens kecil",
          "Kumpulkan feedback & iterasi"
        ]
      }
    ],
    "guide": {
      "intro": "Kemudikan bisnismu dengan sengaja. Arus kas, klien, dan target — dalam satu dasbor.",
      "sub": null,
      "start": [
        {
          "j": "Catat arus kas",
          "d": "Menu Arus Kas: masukkan pemasukan & pengeluaran, laba terlihat jujur."
        },
        {
          "j": "Kelola pipeline",
          "d": "Di Pipeline Klien, geser deal dari Prospek sampai Selesai."
        },
        {
          "j": "Tetapkan OKR",
          "d": "Buat sasaran kuartal di menu Sasaran, pecah jadi langkah."
        }
      ],
      "faq": [
        {
          "q": "Bisnis masih kecil, perlu ini?",
          "a": "Justru dari kecil enaknya. Kebiasaan mencatat sejak awal bikin skala nanti jauh lebih mudah."
        }
      ]
    },
    "challenges": [
      {
        "nama": "30 Hari Catat Arus Kas",
        "hari": 30,
        "icon": "coin",
        "warna": "#0eab99",
        "desc": "Angka bisnis selalu segar."
      },
      {
        "nama": "7 Hari Follow-up Klien",
        "hari": 7,
        "icon": "phone",
        "warna": "#2f6fed",
        "desc": "1 follow-up tiap hari."
      }
    ]
  },
  "tema": {
    "theme": "light",
    "vars": {
      "--bg": "#f0faf8",
      "--surface": "#ffffff",
      "--surface2": "#def4ef",
      "--ink": "#0f2e2a",
      "--muted": "#5b7d77",
      "--primary": "#0eab99",
      "--primary-deep": "#0d8578",
      "--accent": "#5fd6c8",
      "--on-primary": "#ffffff",
      "--line": "#d4eee9",
      "--line2": "#bee4dc",
      "--ok": "#34d399",
      "--warn": "#fbbf24",
      "--danger": "#f87171",
      "--font-d": "\"Schibsted Grotesk\", sans-serif",
      "--font-b": "\"Manrope\", sans-serif",
      "--font-m": "\"JetBrains Mono\", monospace"
    }
  },
  "themes": [
    {
      "key": "studio",
      "nama": "Studio Toska",
      "light": true,
      "vars": {
        "--bg": "#f0faf8",
        "--surface": "#ffffff",
        "--surface2": "#def4ef",
        "--ink": "#0f2e2a",
        "--muted": "#5b7d77",
        "--primary": "#0eab99",
        "--primary-deep": "#0d8578",
        "--accent": "#5fd6c8",
        "--on-primary": "#ffffff",
        "--line": "#d4eee9",
        "--line2": "#bee4dc",
        "--ok": "#34d399",
        "--warn": "#fbbf24",
        "--danger": "#f87171"
      }
    },
    {
      "key": "biru",
      "nama": "Biru Kerja",
      "light": true,
      "vars": {
        "--bg": "#f4f7fd",
        "--surface": "#ffffff",
        "--surface2": "#e5ecf9",
        "--ink": "#161f33",
        "--muted": "#616e8a",
        "--primary": "#2f6fed",
        "--primary-deep": "#1d4ed8",
        "--accent": "#7aa3f7",
        "--on-primary": "#ffffff",
        "--line": "#dde6f4",
        "--line2": "#c8d7ee",
        "--ok": "#34d399",
        "--warn": "#fbbf24",
        "--danger": "#f87171"
      }
    },
    {
      "key": "amber",
      "nama": "Amber",
      "light": true,
      "vars": {
        "--bg": "#fdf9ee",
        "--surface": "#ffffff",
        "--surface2": "#f6edd3",
        "--ink": "#2f2712",
        "--muted": "#837960",
        "--primary": "#dd8a0e",
        "--primary-deep": "#b8720c",
        "--accent": "#fbbf24",
        "--on-primary": "#ffffff",
        "--line": "#eee4ca",
        "--line2": "#e1d2a6",
        "--ok": "#34d399",
        "--warn": "#fbbf24",
        "--danger": "#f87171"
      }
    },
    {
      "key": "malam",
      "nama": "Nakhoda Malam",
      "vars": {
        "--bg": "#0a1417",
        "--surface": "#101e22",
        "--surface2": "#16282d",
        "--ink": "#e6f1f0",
        "--muted": "#7d9491",
        "--primary": "#2dd4bf",
        "--primary-deep": "#0d9488",
        "--accent": "#5eead4",
        "--on-primary": "#04140f",
        "--line": "#1c3135",
        "--line2": "#284349",
        "--ok": "#34d399",
        "--warn": "#fbbf24",
        "--danger": "#f87171"
      }
    }
  ]
};
