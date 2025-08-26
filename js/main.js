// Criar o script JSON-LD dinamicamente
const schemaScript = document.createElement("script");
schemaScript.type = "application/ld+json";

// O JSON em si
schemaScript.text = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Schmitz Seguridad Electrónica",
  "url": "https://www.ejemplo.com/",
  "logo": "https://www.ejemplo.com/logo-schmitz.jpg",
  "sameAs": [
    "https://www.facebook.com/schmitzseguridadeletronica/",
    "https://www.instagram.com/schmitzseguridad/"
  ],
  "department": [
    {
      "@type": "LocalBusiness",
      "name": "Schmitz – Unidad Nueva Esperanza",
      "address": {
        "@type":"PostalAddress",
        "addressLocality":"Nueva Esperanza",
        "addressCountry":"PY"
      },
      "areaServed": "Paraguay",
      "image": "https://www.ejemplo.com/logo-schmitz.jpg",
      "telephone": "+595 981 329999",
      "hasMap": "https://maps.google.com/?q=Schmitz%20Seguridad%20Electr%C3%B3nica%20Nueva%20Esperanza"
    },
    {
      "@type": "LocalBusiness",
      "name": "Schmitz – Unidad Ciudad del Este KM4",
      "address": {
        "@type":"PostalAddress",
        "addressLocality":"Ciudad del Este",
        "streetAddress":"KM4",
        "addressCountry":"PY"
      },
      "areaServed": "Paraguay",
      "image": "https://www.ejemplo.com/logo-schmitz.jpg",
      "telephone": "+595 983 924185",
      "hasMap": "https://maps.google.com/?q=Ciudad%20del%20Este%20KM4"
    }
  ]
});

// Adicionar dentro do <head>
document.head.appendChild(schemaScript);
