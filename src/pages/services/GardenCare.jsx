import ServiceHero from "../../components/ServiceHero";
import ServiceInfoSection from "../../components/ServiceInfoSection";

export const GardenCare = () => {
  return (
    <>
      <ServiceHero
        title="Kompleksowa pielęgnacja ogrodów"
        text="Zadbany ogród to wizytówka każdej posesji. Oferujemy profesjonalną pielęgnację ogrodów prywatnych, firmowych oraz terenów zielonych – od regularnych prac porządkowych po specjalistyczne zabiegi pielęgnacyjne roślin."
        image="/assets/GardenCare-hero1.svg"
      />

      <ServiceInfoSection
        title="Formowanie żywopłotów"
        text="Regularne cięcie żywopłotów pozwala zachować estetyczny wygląd ogrodu oraz zdrowy wzrost roślin. Przycinamy żywopłoty różnych gatunków i wysokości."
        subtitle="Oferta"
        listElements={[
          "przycinanie żywopłotów liściastych i iglastych",
          "nadawanie równych kształtów",
          "zagęszczanie roślin poprzez cięcie",
          "sprzątanie po wykonanej usłudze",
        ]}
        image="/assets/GardenCare-1.svg"
        reverse={false}
      />

      <ServiceInfoSection
        title="Przycinanie krzewów"
        text="Profesjonalne przycinanie krzewów ozdobnych poprawia ich kondycję, pobudza kwitnienie i nadaje atrakcyjny wygląd całemu ogrodowi."
        subtitle="Oferta"
        listElements={[
          "cięcie pielęgnacyjne krzewów",
          "usuwanie suchych i chorych gałęzi",
          "formowanie krzewów ozdobnych",
          "przygotowanie roślin do sezonu",
        ]}
        image="/assets/GardenCare-2.svg"
        reverse={true}
      />

      <ServiceInfoSection
        title="Pielęgnacja roślin ozdobnych"
        text="Dbamy o rabaty, byliny, trawy ozdobne i inne nasadzenia. Dzięki regularnej pielęgnacji rośliny zachowują zdrowy wygląd i pięknie prezentują się przez cały sezon."
        subtitle="Efekty"
        listElements={[
          "zdrowe i silne rośliny",
          "dłuższe oraz obfitsze kwitnienie",
          "estetyczny wygląd rabat",
          "lepszy rozwój roślin",
        ]}
        image="/assets/GardenCare-3.svg"
        reverse={false}
      />
    </>
  );
};

export default GardenCare;