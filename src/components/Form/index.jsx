import { Button }  from "@mui/material"
import Container from '@mui/material/Container';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { SelectionButton } from "../SelectionButton"

import { useState } from "react";

export function Form({newPost}){
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


    function handleChageName(event){
        setName(event.target.value);
    }
    function handleChageContent(event){
        setContent(event.target.value);
    }
    function handleChageSelect(event){
        setSelect(event.target.value);
    }
    function showDateTime(value){
        setDate(value.date)
        setTime(value.time)
        setOption(value.option)
    }

    // - Permitir apenas agendar para horários a partir de 5 minutos do atual
    // - Permitir que hajam no máximo 3 postagens agendadas para uma data futura
    // - Retornar mensagem de sucesso ao realizar o agendamento

    return(
        <form onSubmit={
            (event)=>{
                event.preventDefault();
                newPost({name, content, select, date, time, option})
            }
        }
        >
            <Container>
                <TextField
                    id="post-name"
                    label="Nome da postagem"
                    placeholder="Digite o nome da postagem" 
                    variant='outlined'
                    margin="normal"
                    fullWidth
                    onChange={handleChageName}
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
                    onChange={handleChageContent}
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
                    onChange={handleChageSelect}
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
