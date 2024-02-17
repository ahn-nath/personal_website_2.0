import logo from './logo.svg';
import './App.css';
//import * as url from "url";

function App() {
  return (

    <div className="App">


      <section className="showcase">
        <div className="container-fluid p-0" style={{ maxWidth: '1200px'}}>
          <div className="row g-0 justify-content-center mt-5">
            <div className="col-lg-6 col-xl-4 text-white mx-auto order-lg-2 showcase-img"
            style={{
              backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            >
            </div>

            <div className="col-lg-6 order-lg-1 p-5">
              <h2 className="text-uppercase text-center mb-4">About</h2>
              <p className="lead mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. <br /> <br />Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.&nbsp;&nbsp;<span style={{color: '#000'}}>Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
                    ut labore et dolore magnam aliquam quaerat voluptatem.&nbsp;</span></p>
            </div>
          </div>

        </div>
      </section>
    </div>


  );
}

export default App;
