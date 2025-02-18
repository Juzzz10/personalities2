import { useState } from 'react';
import { ArtistList } from './data';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import "./App.css";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < ArtistList.length - 1;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handleBackClick() {
    setIndex(index > 0 ? index - 1 : ArtistList.length - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let artist = ArtistList[index];

  return (
    <Box 
      sx={{
        width: '400px',
        margin: 'auto',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '10px',
        boxShadow: 3,
        bgcolor: 'white'
      }}
    >
      <Typography variant="h4" fontWeight="bold">JUSTINE JAY A. ENRIQUEZ</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
        <Button variant="contained" color="info" onClick={handleBackClick}>
          Back
        </Button>
        <Button variant="contained" color="info" onClick={handleNextClick}>
          Next
        </Button>
      </Box>

      <Typography variant="h5" sx={{ mt: 2 }}>{artist.artist}</Typography>
      <Typography variant="subtitle1">{index + 1} of {ArtistList.length}</Typography>

      <IconButton onClick={handleMoreClick} sx={{ mt: 1 }}>
        {showMore ? <ExpandLess /> : <ExpandMore />}
      </IconButton>

      {showMore && (
        <Typography variant="body1" sx={{ mt: 1, px: 2 }}>
          {artist.description}
        </Typography>
      )}

      <Box sx={{ mt: 2 }}>
        <img className="artist-image" src={artist.url} alt={artist.artist} style={{ width: '100%', borderRadius: '10px' }} />
      </Box>
    </Box>
  );
}