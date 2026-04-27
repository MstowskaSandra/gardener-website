import ServiceHero from "../../components/ServiceHero";
import ServiceInfoSection from "../../components/ServiceInfoSection";

export const TreeRemoval = () => {
  return (
    <>
      <ServiceHero
        title="Wycinka i pielęgnacja drzew"
        text="Oferujemy profesjonalną wycinkę drzew oraz prace pielęgnacyjne na posesjach prywatnych, działkach i terenach firmowych. Działamy sprawnie, bezpiecznie i z dbałością o otoczenie."
        image="/assets/TreeCare-hero.svg"
      />

      <ServiceInfoSection
        title="Wycinka tradycyjna"
        text="Realizujemy standardową wycinkę drzew w miejscach, gdzie warunki pozwalają na bezpieczne obalenie drzewa metodą klasyczną."
        subtitle="Oferta"
        listElements={[
          "wycinka drzew na otwartym terenie",
          "sprawna realizacja prac",
          "cięcie pnia na mniejsze elementy",
          "uprzątnięcie miejsca po wycince",
        ]}
        image="/assets/TreeCare-1.svg"
        reverse={false}
      />

      <ServiceInfoSection
        title="Wycinka alpinistyczna"
        text="W trudno dostępnych miejscach wykonujemy wycinkę sekcyjną z użyciem technik linowych. To idealne rozwiązanie przy zabudowaniach, ogrodzeniach i liniach energetycznych."
        subtitle="Oferta"
        listElements={[
          "wycinka przy budynkach i posesjach",
          "demontaż drzewa etapami",
          "prace w ciasnej zabudowie",
          "minimalizacja ryzyka uszkodzeń",
        ]}
        image="/assets/TreeCare-2.svg"
        reverse={true}
      />

      <ServiceInfoSection
        title="Przycinanie drzew"
        text="Regularne cięcie drzew poprawia ich wygląd, kondycję oraz bezpieczeństwo. Usuwamy gałęzie suche, uszkodzone i nadmiernie rozrośnięte."
        subtitle="Efekty"
        listElements={[
          "zdrowsza korona drzewa",
          "poprawa estetyki",
          "większe bezpieczeństwo otoczenia",
          "kontrolowany wzrost drzewa",
        ]}
        image="/assets/TreeCare-3.svg"
        reverse={false}
      />

      <ServiceInfoSection
        title="Redukcja korony drzew"
        text="Zmniejszamy rozmiar korony drzewa, zachowując jego naturalny pokrój. Zabieg pomaga ograniczyć nadmierne zacienienie oraz ryzyko łamania konarów."
        subtitle="Efekty"
        listElements={[
          "mniejsza masa korony",
          "więcej światła na posesji",
          "lepsza stabilność drzewa",
          "estetyczny wygląd",
        ]}
        image="/assets/TreeCare-4.svg"
        reverse={true}
      />

      <ServiceInfoSection
        title="Porządkowanie po pracach"
        text="Po zakończeniu wycinki lub przycinania dokładnie porządkujemy teren. Możemy również pociąć drewno oraz rozdrobnić gałęzie."
        subtitle="Oferta"
        listElements={[
          "sprzątanie gałęzi i odpadów",
          "cięcie drewna opałowego",
          "usługi rębakiem",
          "gotowy i uporządkowany teren",
        ]}
        image="/assets/GardenCleaning-4.svg"
        reverse={false}
      />
    </>
  );
};

export default TreeRemoval;
