import {
  FavoriteOutlined,
  Menu as MenuIcon,
  PermIdentityOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@mui/material';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';
import React, { KeyboardEvent, MouseEvent, useState } from 'react';

import { AppConfig, AssetsConfig, NavbarConstants } from '@/constants';

import { ElevationScroll } from './ElevationScroll';

interface INavbarProps {}
export const Navbar = (_props: INavbarProps) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setMobileOpen(open);
    };

  const handleToggle = (open: boolean) => (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(open ? event.currentTarget : null);
  };

  const Logo = ({ size }: { size: number }) => (
    <Stack justifyContent="center" alignItems="center" direction="row" gap={2}>
      <Image
        src={AssetsConfig.brand.logo}
        width={size}
        height={size}
        style={{ objectFit: 'contain', borderRadius: '50%' }}
        alt="Logo"
      />
      <Typography variant="h5" color="primary.main">
        {AppConfig.name.toUpperCase()}
      </Typography>
    </Stack>
  );
  const Links = (
    <Stack direction={{ xs: 'column', md: 'row' }} gap={{ xs: 1, md: 3 }}>
      {NavbarConstants.pages.map((page) => (
        <Link passHref href={page} key={nanoid()}>
          <Button key={page} onClick={handleDrawerToggle(false)}>
            <Typography>{page}</Typography>
          </Button>
        </Link>
      ))}
    </Stack>
  );

  const ActionIcons = (
    <Stack direction="row" gap={{ xs: 1, md: 3 }}>
      <IconButton color="primary" size="large">
        <SearchOutlined fontSize="inherit" />
      </IconButton>
      <IconButton
        color="primary"
        onClick={handleToggle(!anchorElUser)}
        size="large"
      >
        <PermIdentityOutlined fontSize="inherit" />
      </IconButton>
      <IconButton color="primary" size="large">
        <ShoppingCartOutlined fontSize="inherit" />
      </IconButton>
      <IconButton color="primary" size="large">
        <FavoriteOutlined fontSize="inherit" />
      </IconButton>
    </Stack>
  );

  const DesktopNavbar = (
    <Stack
      display={{ xs: 'none', md: 'flex' }}
      flexDirection="row"
      flexGrow={1}
      alignItems="center"
    >
      <Logo size={48} />
      <Box flexGrow={1} />
      {Links}
      <Box flexGrow={1} />
      {ActionIcons}
    </Stack>
  );

  const MobileNavbar = (
    <Stack display={{ xs: 'flex', md: 'none' }} direction="row" width="100%">
      <Logo size={48} />
      <Box flexGrow={1} />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle(false)}
        onOpen={handleDrawerToggle(true)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Stack py={3} px={1}>
          {ActionIcons}
          {Links}
        </Stack>
      </SwipeableDrawer>
    </Stack>
  );

  return (
    <ElevationScroll>
      <AppBar
        position="sticky"
        color="inherit"
        sx={{ bgcolor: 'background.paper', py: { xs: 1, md: 1 } }}
        elevation={0}
      >
        <Container maxWidth="md" disableGutters>
          <Toolbar>
            {MobileNavbar}
            {DesktopNavbar}
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};
