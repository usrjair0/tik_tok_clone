import './App.css';
import Video from "./pages/video"

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
          likes={300}
          messages={200}
          shares={300}
          name="Paulo"
          description="Brecker o goleiro"
          music="música épica"
        />
        
        <Video 
          likes={444}
          messages={555}
          shares={600}
          name="Paulo"
          description="Brecker o goleiro"
          music="música épica"
        />

      </div>
    </div>
  );
}

export default App;
