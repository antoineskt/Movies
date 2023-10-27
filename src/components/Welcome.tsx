import moviesHome from '../assets/moviesHome.png';
import SearchBarAndBtn from '../components/Search/SearchBarAndBtn';

export default function Welcome() {
  return (
    <div className="pb-5 relative  bg-cover opacity-100" style={{ backgroundImage: `url(${moviesHome})` }}>
      <div className=" m-5 p-5 ">
        <h1 className="text-4xl text-white font-bold">Bienvenue, </h1>
        <h1 className="text-2xl text-white ">Des millions de films, émissions télévisées et artistes...</h1>
      </div>
      <SearchBarAndBtn />
    </div>
  );
}
