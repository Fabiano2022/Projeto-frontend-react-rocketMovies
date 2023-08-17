import { Container, Content, AddMovie } from './styles'
import { FiPlus } from "react-icons/fi"
import { Header } from '../../components/Header'
import { Movie} from '../../components/Movie'
import { Link } from "react-router-dom"


export function Home() {
    return(
        <Container>            
            <Header/>
                <main>
                    <Content>
                        <header>
                        <h1>Meus Filmes</h1> 

                        <AddMovie to='/createmovie'>  
                            <FiPlus/>
                            Adicionar Filmes
                        </AddMovie>                   
                        </header> 
                        <Movie/>
                        <Movie/>
                        <Movie/>                                                                    

                    </Content>
                </main>

        </Container>
  )
}                                         
                          
