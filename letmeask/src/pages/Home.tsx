import { useHistory } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';

// webpack -> (Module Bundle)

export function Home(){
    // Hook - Navegação entre Páginas
    const history = useHistory();

    function navigateToNewRoom(){
        history.push('/rooms/news');
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Logo LetMeAsk" />
                    <button onClick={navigateToNewRoom} className="create-room">
                        <img src={googleIconImg} alt="Ícone do Googl" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">
                        ou entre em uma sala existente
                    </div>
                    <form>
                        <input type="text" placeholder="Digite o código da sala"/>
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}