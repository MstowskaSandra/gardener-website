import ServiceHero from "../../components/services/ServiceHero";
import ServiceInfoSection from "../../components/services/ServiceInfoSection";

export const LawnCare = () => {
  return (
    <>
      <ServiceHero
        title="Kompleksowa pielęgnacja 
  trawnika"
        text="Zadbany trawnik to wizytówka każdego ogrodu. Oferujemy kompleksową pielęgnację trawników — od regularnego koszenia po profesjonalne zabiegi regeneracyjne."
        image="/assets/LawnCare-5.svg"
      />
      <ServiceInfoSection
        title="Koszenie trawy"
        text="Oferujemy profesjonalne koszenie trawników na małych działkach, w ogrodach przydomowych oraz na dużych terenach zielonych."
        subtitle="Oferta"
        listElements={[
          "koszenie małych ogrodów",
          " koszenie dużych powierzchni",
          "koszenie terenów przy firmach (wystawiamy fakturę)",
          "estetyczne wykończenie krawędzi trawnika",
        ]}
        image="/assets/LawnCare-1.svg"
        reverse={false}
      />
      <ServiceInfoSection
        title="Wertykulacja trawnika"
        text="Pozbądź się filcu i pozwól trawnikowi oddychać.
Wertykulacja polega na nacinaniu darni i usuwaniu warstwy filcu, która utrudnia dostęp powietrza i składników odżywczych do korzeni trawy."
        subtitle="Oferta"
        listElements={[
          "lepszy dostęp powietrza do korzeni",
          "koszenie dużych powierzchni",
          " zdrowszy i gęstszy trawnik",
        ]}
        image="/assets/LawnCare-2.svg"
        reverse={true}
      />
      <ServiceInfoSection
        title="Aeracja trawnika"
        text="Dotlenienie gleby dla silnego trawnika.
Aeracja polega na nakłuwaniu gleby w celu poprawy napowietrzenia i przepuszczalności podłoża."
        subtitle="Efekty"
        listElements={[
          "poprawa struktury gleby",
          "lepsze wchłanianie wody",
          " mocniejszy system korzeniowy",
        ]}
        image="/assets/LawnCare-3.svg"
        reverse={false}
      />
      <ServiceInfoSection
        title="Nawożenie trawnika"
        text="ntensywna zieleń i zdrowy wzrost trawy.
Odpowiednio dobrane nawozy dostarczają trawie niezbędnych składników odżywczych i wspierają jej wzrost przez cały sezon."
        subtitle="Efekty"
        listElements={[
          " intensywny zielony kolor",
          "gęsty i odporny trawnik",
          "szybsza regeneracja",
        ]}
        image="/assets/LawnCare-4.svg"
        reverse={true}
      />
      <ServiceInfoSection
        title="Piaskowanie trawnika"
        text="Lepsza przepuszczalność gleby i zdrowszy trawnik.
Piaskowanie polega na rozsypaniu cienkiej warstwy piasku na trawniku, co poprawia strukturę gleby i wspiera regenerację darni.
"
        subtitle="Efekty"
        listElements={[
          "poprawa drenażu",
          "wyrównanie powierzchni trawnika",
          "lepsze warunki wzrostu trawy",
        ]}
        image="/assets/LawnCare-hero.svg"
        reverse={false}
      />
    </>
  );
};

export default LawnCare;
