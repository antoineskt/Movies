type Props = {
  id: string;

  originalTitle: string;
  status: string;
  originalLanguage: string;
  revenu: number;
  budget: number;
};

export default function AdditionnalInfos({ id, originalTitle, status, originalLanguage, revenu, budget }: Props) {
  return (
    <div>
      <div>
        <div>Titre d'origine</div>
        <div>{originalTitle}</div>
        <div>Statut</div>
        <div>{status}</div>
        <div>Budget</div>
        <div>{budget}</div>
        <div>Recette</div>
        <div>{revenu}</div>
        <div>Langue d'origine</div>
        <div>{originalLanguage}</div>
      </div>
    </div>
  );
}
