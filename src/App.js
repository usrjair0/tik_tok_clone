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
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        
        <Video 
          likes={444}
          messages={555}
          shares={600}
          name="Pedro"
          description="gato olhando para dedo"
          music="clap your hands"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />

      </div>
    </div>
  );
}

export default App;
