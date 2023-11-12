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
      <div className="mt-5 ml-10">
        <div className="font-bold">Titre d'origine</div>
        <div>{originalTitle}</div>
        <div className="font-bold mt-3">Statut</div>
        <div>{status}</div>
        <div className="font-bold mt-3">Budget</div>
        <div>{budget}</div>
        <div className="font-bold mt-3">Recette</div>
        <div>{revenu}</div>
        <div className="font-bold mt-3">Langue d'origine</div>
        <div>{originalLanguage}</div>
      </div>
    </div>
  );
}
