import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <header>
        <div className='container'>
          <section className='nav__bar'>
            <figure>
              <img
                src='https://onward.masaischool.com/static/media/Brand-identity_3.ea915f3a.svg'
                alt='masai logo'
              />
            </figure>
            <div className='account__details'>
              <p>
                <span>Already have an account?</span>{' '}
                <a href='https://onward.masaischool.com/signin'>Sign In</a>
              </p>
              <figure className='absolute__figure'>
                <img
                  src='https://onward.masaischool.com/static/media/brand-streak.10cf60be.svg'
                  alt='edge'
                />
              </figure>
            </div>
          </section>
        </div>
      </header>
      <main>
        <div className='container'>
          <article className='article__section'>
            <form className='form padding__height__20 shadow' action=''>
              <fieldset className='form__fieldset'>
                <h2 className='text__align padding__height__20 font-serif'>
                  Welcome
                </h2>
                <input type='email' placeholder='Email address' name='email' />
                <input type='tel' placeholder='Phone number' name='tel' />
                <input type='email' placeholder='email' name='email' />
                <label for='cars'>Choose a car:</label>
                <select name='cars' id='cars'>
                  <option value='volvo'>Volvo</option>
                  <option value='saab'>Saab</option>
                  <option value='opel'>Opel</option>
                  <option value='audi'>Audi</option>
                </select>
                <a href='./redirect.js' className='text__align'>
                  <input type='submit' value='Submit' className='submit__btn' />
                </a>
              </fieldset>
            </form>
          </article>
        </div>
      </main>
    </body>
  );
}

export default App;
