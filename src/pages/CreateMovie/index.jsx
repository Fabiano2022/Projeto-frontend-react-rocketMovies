import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Markers } from '../../components/Markers'
import { MovieItem } from '../../components/MovieItem'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'




export function CreateMovie () {
    return(
        <Container>            
            <Header/>

            <main>
                <Content>
                    <Link to='/'>
                    <ButtonText title='Voltar'/>                    
                    </Link>
                    
                    

                    <h1>Novo Filme</h1>

                    <div className='inputs'>
                    <Input placeholder='Título'/>
                    <Input placeholder='Sua nota (de 0 a 5)'/>
                    </div>

                    <TextArea placeholder='Observações'/>                           
                   
                    <Markers title='Marcadores'>
                    <div className='markers'>
                    <MovieItem value='Drama'/>
                    <MovieItem isNew placeholder='Novo Marcador'/>                                                 
                    </div>
                    </Markers>                                                 
            
                    <div className='buttons'>
                    <Button title='Excluir filme'/>
                    <Button title='Salvar alterações'/>
                    </div>

                </Content>
            </main>

        </Container>
    )
}