import Trending from './components/Trending';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="ml-10">
      <Welcome />
      <Trending title="Films du moment" mediaType="movie" />
    </div>
  );
}

export default App;
