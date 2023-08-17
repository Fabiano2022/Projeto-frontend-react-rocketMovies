
import { Container, Profile, Brand, Search } from './styles'

import { Link } from 'react-router-dom'


export function Header() {
    return(
        <Container>
            <Brand>
                <h1>RocketMovies</h1>
            </Brand>

            <Search>
                <input placeholder='Pesquisa pelo título'/>
            </Search>
           
            <Profile to='/profile'>            
                <div>
                    <span>Fabiano Oliveira</span>
                    <a href="/">Sair</a>
                </div>
                <img src="https://github.com/Fabiano2022.png"  alt="imagem usuário" />        
            </Profile>
            
        </Container>
    )
}  