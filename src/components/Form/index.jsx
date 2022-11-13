// - nome da postagem
// - corpo da postagem
// - data e hora da publicação da postagem


import { Button }  from "@mui/material"
import Container from '@mui/material/Container';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { SelectionButton } from "../SelectionButton"
import { ButtonArea } from "./styles"

import { useState } from "react";

export function Form(){
        const postVisualization = [
            "",
            "Todo mundo",
            "Colaboradores"
        ]

    const [select, setSelect] = useState('');
    const handleChange = (event) => {
        setSelect(event.target.value);
      };

    return(
        <div>
            <Container
                component='article'
                maxWidth='md'
            >
                <TextField
                    id="post-name"
                    label="Nome da postagem"
                    placeholder="Digite o nome da postagem" 
                    variant='outlined'
                    margin="normal"
                    fullWidth
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
                />
                <TextField
                    id="post-visualization"
                    label="Quem pode ver?"
                    placeholder="Selecione quem pode ver" 
                    variant='outlined'
                    margin="normal"
                    select
                    value={select}
                    onChange={handleChange}
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
                <SelectionButton />
            </Container>
        </div>
    )
}
