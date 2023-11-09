import {
  FavoriteOutlined,
  Login as LoginIcon,
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
import { useModal } from 'mui-modal-provider';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';
import React, { KeyboardEvent, MouseEvent, useEffect, useState } from 'react';

import {
  AppConfig,
  asModal,
  AssetsConfig,
  NavbarConstants,
  useUser,
} from '@/lib';

import { IconButtonPopover, Login } from '.';
import { ElevationScroll } from './ElevationScroll';

interface INavbarProps {}
export const Navbar = (_props: INavbarProps) => {
  const [openDrawer, setDrawer] = useState(false);
  const { showModal } = useModal();
  const user = useUser();

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

      setDrawer(open);
    };

  const handleLogin = () => {
    showModal(asModal(<Login />), { maxWidth: 'sm' });
  };

  useEffect(() => {
    handleLogin();
  }, []);

  const Logo = (
    <Stack justifyContent="center" alignItems="center" direction="row" gap={2}>
      <Image
        src={AssetsConfig.brand.logo}
        width={48}
        height={48}
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
      {!user ? (
        <IconButtonPopover Icon={<PermIdentityOutlined />} name="user">
          <Typography sx={{ p: 2 }}>
            The content of the Popover for user.
          </Typography>
        </IconButtonPopover>
      ) : (
        <IconButton color="primary" onClick={handleLogin} size="large">
          <LoginIcon fontSize="inherit" />
        </IconButton>
      )}
      <IconButtonPopover
        Icon={
          <FavoriteOutlined
            fontSize="inherit"
            sx={{
              fill: 'transparent',
              stroke: 'currentColor',
              strokeWidth: '2px',
            }}
          />
        }
        name="favorites"
      >
        <Typography sx={{ p: 2 }}>
          The content of the Popover for favs.
        </Typography>
      </IconButtonPopover>
      <IconButtonPopover Icon={<ShoppingCartOutlined />} name="cart">
        <Typography sx={{ p: 2 }}>
          The content of the Popover for cart.
        </Typography>
      </IconButtonPopover>
    </Stack>
  );

  const DesktopNavbar = (
    <Stack
      display={{ xs: 'none', md: 'flex' }}
      flexDirection="row"
      flexGrow={1}
      alignItems="center"
    >
      {Logo}
      <Box flexGrow={1} />
      {Links}
      <Box flexGrow={1} />
      {ActionIcons}
    </Stack>
  );

  const MobileNavbar = (
    <Stack display={{ xs: 'flex', md: 'none' }} direction="row" width="100%">
      {Logo}
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
        open={openDrawer}
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
