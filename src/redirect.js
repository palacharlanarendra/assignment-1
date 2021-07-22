import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <header>
        <div class='container'>
          <section class='nav__bar'>
            <figure>
              <img
                src='https://onward.masaischool.com/static/media/Brand-identity_3.ea915f3a.svg'
                alt='masai logo'
              />
            </figure>
            <div class='account__details'>
              <p>
                <span>Already have an account?</span>{' '}
                <a href='https://onward.masaischool.com/signin'>Sign In</a>
              </p>
              <figure class='absolute__figure'>
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
        <div class='container'>
          <article class='article__section'>
            <form class='form padding__height__20 shadow'>
              <fieldset class='form__fieldset'>
                <h2 class='text__align padding__height__20 font-serif'>
                  Redirected to new page
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
                <a href='./redirect.js' class='text__align'>
                  <input type='submit' value='Submit' class='submit__btn' />
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
