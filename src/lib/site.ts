export const SITE = {
  name: "Shinemax Pharma (I) Pvt Ltd",
  founded: 2013,
  whatsapp: "https://wa.me/919945832536",
  phoneDisplay: "+91 99458 32536",
  address: "65, 5th Cross, Maruthi Temple Rd, Gangothri Layout, Mysuru, Karnataka 570009",
  maps: "https://maps.google.com/?cid=18084430092929372372",
};

export const THERAPY_AREAS = [
  { name: "Diabetology", text: "Formulations supporting long-term glycaemic management." },
  { name: "Cardiology & Hypertension", text: "Therapies for blood-pressure and cardiovascular care." },
  { name: "Gynaecology", text: "Products supporting women's health across life stages." },
  { name: "Gastroenterology", text: "Formulations for digestive and gastric conditions." },
];

export const productImages = Array.from(
  { length: 36 },
  (_, i) => `https://shinemaxpharma.net/images/products/${String(i + 1).padStart(2, "0")}.png`,
);
