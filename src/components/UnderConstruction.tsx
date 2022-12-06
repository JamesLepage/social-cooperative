import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const ShiedRoot = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

const ShiedInner = styled.div`
  text-align: center;
  position: relative;
`

const ShiedLogo = styled.img`
  display: block;
  width: 550px;
  margin: 0 auto;
`

export default function UnderConstruction() {
  return <>

    <ShiedRoot>
      <ShiedInner>
        <ShiedLogo src="under-construction.jpg" />
        <div>
          <Typography variant="h4" style={{ marginBottom: '0.6rem' }}>
            <img style={{ height: '1.5em', marginRight: '0.3em' }} src="logo.svg" />
          </Typography>
          <Typography variant="button">Сайт в разработке</Typography>
          <br/>
          <Button
            variant="contained"
            href="/store"
            sx={{ marginTop: '1em' }}
          >
            В магазин
          </Button>
        </div>
      </ShiedInner>
    </ShiedRoot>
  </>
}