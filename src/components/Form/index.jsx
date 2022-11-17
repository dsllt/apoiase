import { Button }  from "@mui/material"
import Container from '@mui/material/Container';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { SelectionButton } from "../SelectionButton"

import { useState } from "react";

import { gql, useMutation } from '@apollo/client'

const CREATE_NEW_POST_DATA = gql`
    mutation CreateNewPost($postName: String!,
        $postBody:  String!,
        $postVisualization: VisualizacaoDaPostagem!,
        $postOption: TipoDePostagem!,
        $dateAndTime:DateTime! ) 
            {
                createApoiase(data: 
                    {
                        postName: $postName, 
                        postBody: $postBody,
                        postVisualization: $postVisualization,
                        postOption: $postOption,  
                        postDateAndTime: $dateAndTime, 
                    }
                ) {id}
            }

`

export function Form(){
    const postVisualization = [
        "",
        "Todo mundo",
        "Colaboradores"
    ]

    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [select, setSelect] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [option, setOption] = useState('');
    const [newPost, setNewPost] = useState('');
    const [dateTime, setDateTime] = useState('');

    const [createNewPost] = useMutation(CREATE_NEW_POST_DATA)

    function handleChangeName(event){
        setName(event.target.value);
    }
    function handleChangeContent(event){
        setContent(event.target.value);
    }
    function handleChangeSelect(event){
        setSelect(event.target.value);
    }
    function showDateTime(value){
        setDate(value.date)
        setTime(value.time)
        setOption(value.option)
    }    
    function handleChangeForm(){
        setNewPost({name, content, select, date, time, option})
        let year = date.slice(0,4)
        let month = date.slice(5,7)
        let day = date.slice(-2)
        let hour = time.slice(0,2)
        let minutes = time.slice(-2)
        let newDate = new Date(year, month, day, hour, minutes)
        setDateTime(newDate)
    }

    function handleSubmit(event){
        event.preventDefault();
        createNewPost({
            variables: {
                name,
                content,
                select,
                option,
                dateTime
            }
        })
    }

    // - Permitir apenas agendar para horários a partir de 5 minutos do atual
    // - Permitir que hajam no máximo 3 postagens agendadas para uma data futura
    // - Retornar mensagem de sucesso ao realizar o agendamento

    return(
        <form onSubmit={handleSubmit} onChange={handleChangeForm}
        >
            <Container>
                <TextField
                    id="post-name"
                    label="Nome da postagem"
                    placeholder="Digite o nome da postagem" 
                    variant='outlined'
                    margin="normal"
                    fullWidth
                    onChange={handleChangeName}
                    value={name}
                />
                <TextField
                    id="post-content"
                    label="Corpo da postagem"
                    placeholder="Digite o corpo da postagem" 
                    variant='outlined'
                    margin="normal"
                    multiline
                    maxRows={40}
                    fullWidth
                    onChange={handleChangeContent}
                    value={content}
                />
                <TextField
                    id="post-visualization"
                    label="Quem pode ver?"
                    placeholder="Selecione quem pode ver" 
                    variant='outlined'
                    margin="normal"
                    select
                    value={select}
                    onChange={handleChangeSelect}
                    sx={{width: 300, marginBottom: 8}}
                >
                    {postVisualization.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Container>

            <Container
                maxWidth='md'
                sx={{display: 'flex', flexDirection: 'row', justifyContent: 'end',marginBottom: 10, alignItems: 'end'}}
            >
                <Button variant="text" color='error' > Cancelar </Button>
                <SelectionButton  dateTime={showDateTime}/>
            </Container>
        </form>
    )
}
