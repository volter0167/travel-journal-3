import './styles.css';
import Article from './Components/Article';
import Header from './Components/Header';
import articlesList from './data/articlesList';

function App() {
  const articles = articlesList.map(article => {
    return <Article key={article.id} {...article} />
  })
  return (
    <div>
      <Header />
      {articles}
    </div>
  );
}

export default App;
