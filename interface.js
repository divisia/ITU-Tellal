const { fetchAnnouncements } = require('./fetcher.js')

let announcementHistory = [
  {
    title: 'MAT Havuz Dersleri Web Sitesi',
    body: 'MAT Havuz Dersleri web sitesi ile ilgili detaylı bilgi için haberin devamı butonuna tıklayınız.',
    date: '17 Nis 2020 ',
    link: 'https://matmuh.itu.edu.tr/haberdetay/2020/04/16/mat-havuz-dersleri-web-sitesi'
  },
  {
    title: 'MAT Havuz Yarıyıl İçi Sınavları Hakkında',
    body: '16.03.2020 - 05.04.2020 tarihleri arasında eğitime ara verilmesinden ötürü, 26.03.2020 ve 28.03.2020 tarihlerinde yapılması planlanan MAT Havuz yarıyıl içi sınavları ertelenmiştir.',
    date: '28 May 2020 ',
    link: 'https://matmuh.itu.edu.tr/haberdetay/2020/05/27/mat-havuz-yariyil-ici-sinavlari-hakkinda'
  },
  {
    title: 'Pandemi Dönemi Staj Esasları',
    body: 'Covid-19 salgını nedeniyle uygulanacak staj esasları detaylı bilgi için haberin devamı butonuna tıklayınız.',
    date: '04 Haz 2020 ',
    link: 'https://matmuh.itu.edu.tr/haberdetay/2020/06/03/pandemi-donemi-staj-esaslari'
  },
  {
    title: 'Etkinlik Duyurusu',
    body: 'Mezun Söyleşileri ile ilgili etkinlik duyurusu detayları için haberin devamı butonuna tıklayınız.',
    date: '03 Kas 2020 ',
    link: 'https://matmuh.itu.edu.tr/haberdetay/2020/11/02/etkinlik-duyurusu'
  },
  {
    title: 'Seminer Duyurusu',
    body: 'Seminer duyurusu detayları için haberin devamı butonuna tıklayınız.',
    date: '20 Oca 2021 ',
    link: 'https://matmuh.itu.edu.tr/haberdetay/2021/01/15/seminer-duyurusu'
  },
  {
    title: "Nobel Ödülü alan ekonomist Prof. Robert Fogel'in öğrencisi Prof. John Komlos'un Semineri",
    body: "Nobel Ödülü alan ekonomist Prof. Robert Fogel'in öğrencisi Prof. John Komlos'un İTÜ'de Zoom üzerinden yapacağı semineri ile ilgili bilgiler haberin detayındadır.",
    date: '04 May 2021 ',
    link: 'https://matmuh.itu.edu.tr/haberdetay/2021/05/03/nobel-odulu-alan-ekonomist-prof-robert-fogelin-ogrencisi-prof-john-komlosun-semineri'
  },
  {
    title: 'Seminer Duyurusu (Konuşmacı: Handan Borluk)',
    body: 'Seminer duyurusu detayları için haberin devamı butonuna tıklayınız.',
    date: '24 May 2021 ',
    link: 'https://matmuh.itu.edu.tr/haberdetay/2021/05/24/seminer-duyurusu-(konuşmacı-handan-borluk)'
  },
  {
    title: 'Seminer Duyurusu (Konuşmacı: Fatma Zürnacı Yetiş)',
    body: 'Seminer duyurusu detayları için haberin devamı butonuna tıklayınız.',
    date: '24 May 2021 ',
    link: 'https://matmuh.itu.edu.tr/haberdetay/2021/05/24/seminer-duyurusu-(konuşmacı-fatma-zürnacı-yetiş)'
  },
  {
    title: 'Lisans Öğrencilerine Yönelik Workshop',
    body: 'Workshop duyurusu detayları için devam butonuna tıklayınız.',
    date: '26 May 2021 ',
    link: 'https://matmuh.itu.edu.tr/haberdetay/2021/05/26/lisans-öğrencilerine-yönelik-workshop'
  },
  {
    title: 'Seminer Duyurusu (Konuşmacı: Aybike Özer)',
    body: 'Seminer duyurusu detayları için haberin devamı butonuna tıklayınız.',
    date: '29 May 2021 ',
    link: 'https://matmuh.itu.edu.tr/haberdetay/2021/05/29/seminer-duyurusu-(konuşmacı-aybike-özer)'
  }
];

async function checkAnnouncements(){
  const currentAnnouncements = await fetchAnnouncements();
  if (announcementHistory.length == currentAnnouncements.length) return [];
  else if (announcementHistory.length > currentAnnouncements.length) { console.error("Something really bad has happened.") } // ! WTF? 
  else {
    const newAnnouncements = currentAnnouncements.slice(announcementHistory.length, currentAnnouncements.length);
    announcementHistory = currentAnnouncements;
    return newAnnouncements;
  }
  return [];
}

module.exports = { checkAnnouncements }