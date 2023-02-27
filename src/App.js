import HOC from './HOC';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <form> */}
        <h1>Welcome User!</h1>
        {/* <div className='form'>
          <div className='formData'>
            <label>Name:</label>
            <input type="text"/>
          </div>
          <div className='formData'>
            <label>Email:</label>
            <input type="email"/>
          </div>
          <div className='formData'>
            <label>Phone:</label>
            <input type="tel"/>
          </div>      
        </div>
        <div>
          <button >submit</button>
        </div>
        
        
      </form> */}
        

    </div>
  );
}

export default HOC(App);
