import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import "./App.css";

function App() {
  return (
    <>
      <header className="flex h-14 items-center justify-between bg-slate-950 px-8 text-white">
        <nav className="flex items-center gap-4">
          <img src="./netflix.png" alt="Logo" className="w-16 sm:w-28" />
          <a href="#">Phim</a>
          <a href="#">Truyền hình</a>
        </nav>
        <div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </div>
      </header>
      <main>
        <section className="feature-movies">
          <img src="https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg" alt="Movie Background" />
          <div>
            <p>Inside Out 2</p>
            <div>
              <p>PG13</p>
              <p>2025-06-11</p>
            </div>
            <article>
              <h3>Overview</h3>
              <p>
                Teenager Riley&apos;s mind headquarters is undergoing a sudden
                demolition to make room for something entirely unexpected: new
                Emotions! Joy, Sadness, Anger, Fear and Disgust, who&apos;ve long been
                running a successful operation by all accounts, aren&apos;t sure how to
                feel when Anxiety shows up. And it looks like she&apos;s not alone.
              </p>
            </article>
            <div>
              <button>
                <FontAwesomeIcon icon={faPlay}/>
                Trailer
              </button>
              <button>
                View Detail
              </button>
            </div>
          </div>
          <div>
            <ul>
              <li className="w-4 h-0.5 bg-slate-600 cursor-pointer"></li>
              <li className="w-4 h-0.5 bg-slate-600 cursor-pointer"></li>
              <li className="w-4 h-0.5 bg-slate-600 cursor-pointer"></li>
              <li className="w-4 h-0.5 bg-slate-600 cursor-pointer"></li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
