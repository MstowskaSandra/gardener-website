import ServiceHero from "../../components/services/ServiceHero";
import ServiceInfoSection from "../../components/services/ServiceInfoSection";

export const Sprays = () => {
  return (
    <>
      <ServiceHero
        title="Opryski drzew i krzewów"
        text="Chronimy rośliny przed chorobami i szkodnikami. Wykonujemy profesjonalne opryski drzew i krzewów, dobierając odpowiednie środki i metody, aby zapewnić skuteczną i bezpieczną ochronę Twojego ogrodu."
        image="/assets/Sprays-hero.svg"
      />
      <ServiceInfoSection
        title="Opryski drzew i krzewów"
        text="Dobieramy odpowiednie środki ochrony roślin oraz termin zabiegu, aby zapewnić skuteczne działanie i bezpieczeństwo roślin."
        subtitle="Oferta"
        listElements={[
          "opryski drzew owocowych",
          "opryski krzewów ozdobnych",
          "zabiegi profilaktyczne",
          "ochrona roślin sezonowych",
        ]}
        image="/assets/Sprays-1.svg"
        reverse={false}
      />

      <ServiceInfoSection
        title="Ochrona przed chorobami"
        text="Zapobiegamy rozwojowi chorób grzybowych, bakteryjnych i innych problemów osłabiających rośliny. Regularna ochrona wspiera zdrowy wzrost i lepszy wygląd ogrodu."
        subtitle="Efekty"
        listElements={[
          "zdrowsze liście i pędy",
          "mniejsze ryzyko infekcji",
          "lepsze kwitnienie i owocowanie",
          "silniejsze rośliny przez cały sezon",
        ]}
        image="/assets/Sprays-2.svg"
        reverse={true}
      />

      <ServiceInfoSection
        title="Ochrona przed szkodnikami"
        text="Skutecznie zwalczamy mszyce, przędziorki, gąsienice oraz inne szkodniki atakujące drzewa i krzewy."
        subtitle="Efekty"
        listElements={[
          "ograniczenie żerowania szkodników",
          "lepsza kondycja roślin",
          "ochrona młodych pędów i liści",
          "zdrowszy ogród",
        ]}
        image="/assets/Sprays-3.svg"
        reverse={false}
      />

      <ServiceInfoSection
        title="Opryski profilaktyczne"
        text="Regularne zabiegi zapobiegawcze pomagają uniknąć problemów jeszcze przed pojawieniem się pierwszych objawów chorób lub szkodników."
        subtitle="Oferta"
        listElements={[
          "zabiegi wiosenne",
          "ochrona przed sezonem letnim",
          "wzmocnienie odporności roślin",
          "planowanie ochrony całorocznej",
        ]}
        image="/assets/Sprays-4.svg"
        reverse={true}
      />

      <ServiceInfoSection
        title="Kompleksowa ochrona ogrodu"
        text="Łączymy opryski, ocenę stanu roślin oraz doradztwo pielęgnacyjne, aby zapewnić ogrodowi zdrowy wygląd i długotrwałą ochronę."
        subtitle="Efekty"
        listElements={[
          "zdrowe drzewa i krzewy",
          "mniej chorób i szkodników",
          "estetyczny wygląd roślin",
          "lepszy rozwój przez cały sezon",
        ]}
        image="/assets/Sprays-5.svg"
        reverse={false}
      />
    </>
  );
};

export default Sprays;
