const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const ustLinkler = document.querySelectorAll("header nav a");
for (let i = 0; i < ustLinkler.length; i++) {
  ustLinkler[i].setAttribute("class", "italic");
}

ustLinkler[0].textContent = "Servisler";
ustLinkler[1].textContent = "Ürünler";
ustLinkler[2].textContent = "Vizyon";
ustLinkler[3].textContent = "Özellikler";
ustLinkler[4].textContent = "Hakkımızda";
ustLinkler[5].textContent = "İletişim";

const ustImg = document.getElementById("logo-img");
ustImg.setAttribute("src", "../mocks/img/logo.png");

const mukemmelBasilk = document.querySelector(".cta .cta-text h1");
mukemmelBasilk.textContent = "Bu DOM Mükemmel";

const mukemmelButton = document.querySelector(".cta .cta-text button");
mukemmelButton.textContent = "Başlayın";

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", "../mocks/img/cta.png");

const ustParagraf = document.querySelectorAll(".top-content .text-content h4");
ustParagraf[0].textContent = "Özellikler";
ustParagraf[1].textContent = "Hakkında";

const paragraflar = document.querySelectorAll(".top-content .text-content p");
paragraflar[0].textContent = "BURASI EKSİK!!";
paragraflar[1].textContent = "BURASI EKSİK!!";

const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", "../mocks/img/accent.png");

const altParagraf = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
altParagraf[0].textContent = "Servisler";
altParagraf[1].textContent = "Ürünler";
altParagraf[2].textContent = "Vizyon";

const altParagraflar = document.querySelectorAll(
  ".bottom-content .text-content p"
);
altParagraflar[0].textContent = "BURASI EKSİK!!";
altParagraflar[1].textContent = "BURASI EKSİK!!";
altParagraflar[2].textContent = "BURASI EKSİK!!";

const contactSection = document.querySelector(".contact h4");
contactSection.textContent = "İletişim";

const contactSectionP = document.querySelectorAll(".contact p");
contactSectionP[0].textContent =
  "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";
contactSectionP[1].textContent = "+90 (123) 456-7899";
contactSectionP[2].textContent = "satis@birsirketsitesi.com.tr";

const footerA = document.getElementsByTagName("footer");
footerA[0].setAttribute("class", "bold");
footerA[0].textContent = "Copyright Bir Şirket Sitesi 2022";
footerA[0].style.color = "grey";
footerA[0].style.fontWeight = "bold";
