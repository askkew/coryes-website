import React from 'react'
import { Grid, Card, CardContent, Paper } from '@mui/material'

const Home = () => {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
            <Grid container justifyContent="center">
                <Grid item>
                    <Paper
                    sx={{
                        height: 400,
                        width: 200,
                        backgroundColor: "transparent",
                    }}
                    />
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Grid container justifyContent="center">
                <Grid item>
                    <Paper
                    sx={{
                        height: 400,
                        width: 200,
                        backgroundColor: "transparent",
                    }}
                    />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Home