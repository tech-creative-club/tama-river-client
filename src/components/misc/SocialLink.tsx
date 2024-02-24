'use client';
import { Box, ButtonBase, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function SocialLink({Icon, id, href}: {Icon: React.ElementType, id: string, href: string}) {
  return (
    <a href={href} target='_blank'>
      <ButtonBase >
        <Box className="flex">
          <Box className="mt-4 w-6">
            <Icon className='text-2xl'/>
          </Box>
          <Typography variant='body1' sx={{ fontSize: "1.125rem", margin: "1rem"}}>{id}</Typography>
        </Box>
      </ButtonBase>
    </a>
  );
}

SocialLink.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
