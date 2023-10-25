import logocine from '../assets/logocine.png';

export function Header() {
  return (
    <div className=" ml-7 flex flex-row items-center bg-white">
      <a href="/">
        <img src={logocine} alt="logo ciné" className="w-32"></img>
      </a>

      <nav>
        <a className="pr-5 pl-5" href="/Films">
          Films
        </a>
        <a className="pr-5" href="/Series">
          Séries
        </a>
        <a className="pr-5" href="/Artistes">
          Artistes
        </a>
      </nav>
    </div>
  );
}
