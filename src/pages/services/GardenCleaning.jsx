import ServiceHero from "../../components/ServiceHero";
import ServiceInfoSection from "../../components/ServiceInfoSection";

export const GardenCleaning = () => {
  return (
    <>
      <ServiceHero
        title="Kompleksowe sprzątanie ogrodów"
        text="Uporządkowany ogród to estetyczna i funkcjonalna przestrzeń przez cały rok. Oferujemy profesjonalne sprzątanie ogrodów, działek oraz terenów zielonych – sezonowo i jednorazowo."
        image="/assets/GardenCleaning-hero.svg"
      />

      <ServiceInfoSection
        title="Przygotowanie ogrodu do sezonu"
        text="Przygotowujemy ogrody do sezonu wiosennego oraz zimowego. Wykonujemy niezbędne prace porządkowe i pielęgnacyjne, aby ogród był gotowy na zmieniające się warunki pogodowe."
        subtitle="Oferta"
        listElements={[
          "wiosenne porządki po zimie",
          "jesienne przygotowanie do zimy",
          "oczyszczanie rabat i trawnika",
          "zabezpieczanie roślin sezonowych",
        ]}
        image="/assets/GardenCleaning-1.svg"
        reverse={false}
      />

      <ServiceInfoSection
        title="Porządkowanie działek"
        text="Przywracamy działkom estetyczny wygląd i pełną funkcjonalność. Usuwamy chwasty, gałęzie, samosiejki oraz odpady zielone."
        subtitle="Oferta"
        listElements={[
          "koszenie wysokiej trawy i chwastów",
          "usuwanie samosiejek i zarośli",
          "porządkowanie terenu",
          "przygotowanie działki do dalszych prac",
        ]}
        image="/assets/GardenCleaning-2.svg"
        reverse={true}
      />

      <ServiceInfoSection
        title="Usuwanie liści"
        text="Jesienne liście mogą zalegać na trawniku, rabatach i podjazdach. Sprawnie usuwamy liście, pomagając utrzymać ogród w czystości i chroniąc trawnik przed gniciem."
        subtitle="Oferta"
        listElements={[
          "grabienie liści z trawników",
          "oczyszczanie rabat i ścieżek",
          "sprzątanie podjazdów i posesji",
          "wywóz lub składowanie liści",
        ]}
        image="/assets/GardenCleaning-3.svg"
        reverse={false}
      />

      <ServiceInfoSection
        title="Usługi rębakiem"
        text="Rozdrabniamy gałęzie, krzewy i odpady zielone za pomocą profesjonalnego rębaka. To szybki sposób na uporządkowanie ogrodu po cięciach i wycince."
        subtitle="Efekty"
        listElements={[
          "szybkie usunięcie gałęzi",
          "zmniejszenie objętości odpadów zielonych",
          "łatwiejszy transport materiału",
          "możliwość wykorzystania zrębków",
        ]}
        image="/assets/GardenCleaning-4.svg"
        reverse={true}
      />

      <ServiceInfoSection
        title="Kompleksowe sprzątanie ogrodu"
        text="Wykonujemy jednorazowe oraz regularne sprzątanie ogrodów i terenów zielonych. Dbamy o porządek, estetykę oraz przygotowanie przestrzeni do dalszego użytkowania."
        subtitle="Efekty"
        listElements={[
          "czysty i uporządkowany teren",
          "lepsza estetyka posesji",
          "więcej przestrzeni użytkowej",
          "gotowość ogrodu do kolejnych prac",
        ]}
        image="/assets/GardenCleaning-5.svg"
        reverse={false}
      />
    </>
  );
};

export default GardenCleaning;