import React from "react";
import HomePage from "./pages/HomePage"
import DetailPage from "./pages/DetailPage";
import NoteInputPage from "./pages/NoteInputPage";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ToggleTheme from "./components/ToggleTheme";
import { ThemeProvider } from './context/ThemeContext';
import { getUserLogged, putAccessToken } from './utils/network-data';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {

          const newTheme = prevState.theme === 'light' ? 'dark' : 'light';

          localStorage.setItem('theme', newTheme);

          return {
            theme: newTheme
          };
        });
      }
    }

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });
    putAccessToken('');
  }

  render() {

    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state}>
          <div className='contact-app'>
            <header className='contact-app__header'>
              <h1>Aplikasi Kontak</h1>
              <ToggleTheme />
            </header>
            <main>
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      )
    }

    return (
      <ThemeProvider value={this.state}>
        <header className="navigation">
          <h1>Aplikasi Catatan</h1>
          <ToggleTheme />
          <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/note-input" element={<NoteInputPage />} />
            <Route path="detail/:id" element={< DetailPage />} />
          </Routes>
        </main>
      </ThemeProvider>

    )
  }
}

export default App;